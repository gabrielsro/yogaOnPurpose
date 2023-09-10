import { Schema, model } from "mongoose";
import User from "./user";

const postSchema = new Schema(
  {
    title: { type: String },
    content: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    authorName: { type: String },
    status: { type: String, enum: ["published", "draft"], required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    views: { type: Number },
  },
  { timestamps: true },
);

postSchema.post("save", async function (doc, next) {
  try {
    await User.updateOne({ _id: doc.author }, { $push: { posts: doc._id } });
    next();
  } catch (err) {
    next(err);
  }
});

const Post = model("Post", postSchema);

export default Post;
