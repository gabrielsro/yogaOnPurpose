import { Schema, model } from "mongoose";
import Post from "./post";
import Event from "./event";
import User from "./user";

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    authorName: { type: String, required: true },
    authorProfilePic: { type: String },
    content: { type: String, required: true },
    contextType: {
      type: String,
      enum: ["post", "event", "comment"],
      required: true,
    },
    postContextId: { type: Schema.Types.ObjectId, ref: "Post" },
    eventContextId: { type: Schema.Types.ObjectId, ref: "Event" },
    commentContextId: { type: Schema.Types.ObjectId, ref: "Comment" },
    postTarget: { type: Schema.Types.ObjectId, ref: "Post" },
    eventTarget: { type: Schema.Types.ObjectId, ref: "Event" },
    commentTarget: { type: Schema.Types.ObjectId, ref: "Comment" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    depth: { type: Number, required: true },
  },
  { timestamps: true },
);

commentSchema.post("save", async function (doc, next) {
  if (doc.contextType == "post") {
    const promisePost = new Promise((resolve, reject) => {
      Post.findByIdAndUpdate(doc.postContextId, {
        $push: { comments: doc._id },
      })
        .then(resolve)
        .catch((err) => reject(err));
    });

    const promiseUser = new Promise((resolve, reject) => {
      User.findByIdAndUpdate(doc.author, { $push: { comments: doc._id } })
        .then(resolve)
        .catch((err) => reject(err));
    });

    Promise.all([promisePost, promiseUser])
      .then(next())
      .catch((err) => {
        console.log(err);
        next();
      });
  }
  if (doc.contextType == "event") {
    const promiseEvent = new Promise((resolve, reject) => {
      Event.findByIdAndUpdate(doc.eventContextId, {
        $push: { comments: doc._id },
      })
        .then(resolve)
        .catch((err) => reject(err));
    });

    const promiseUser = new Promise((resolve, reject) => {
      User.findByIdAndUpdate(doc.author, { $push: { comments: doc._id } })
        .then(resolve)
        .catch((err) => reject(err));
    });

    Promise.all([promiseEvent, promiseUser])
      .then(next())
      .catch((err) => {
        console.log(err);
        next();
      });
  }

  next();
});

const Comment = model("Comment", commentSchema);

export default Comment;
