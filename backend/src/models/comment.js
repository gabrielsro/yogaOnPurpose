import { Schema, model } from "mongoose";
// import Post from "./post";
// import User from "./user";

const commentSchema = new Schema(
  {
    author: { Type: Schema.Types.ObjectId, required: true, ref: "User" },
    content: { Type: String, required: true },
    target: { Type: String, enum: ["post", "comment"], required: true },
    postTarget: { Type: Schema.Types.ObjectId, ref: "Post", required: true },
    commentTarget: { Type: Schema.Types.ObjectId, ref: "Comment" },
    comments: [{ Type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true },
);

// commentSchema.post("save", async function (doc, next) {
//   if (doc.target == "post") {
//     Promise.all([
//       Post.findByIdAndUpdate(doc.postTarget, {
//         $push: { comments: doc._id },
//       }),
//       User.findByIdAndUpdate(doc.author, { $push: { comments: doc._id } }),
//     ])
//       .then(next())
//       .catch((err) => next(err));
//   }
//   if (doc.target == "comment") {
//     //TODO
//   }
// });

const Comment = model("Comment", commentSchema);

export default Comment;
