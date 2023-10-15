import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String },
    email: { type: String },
    profilePic: { type: String },
    level: {
      type: String,
      enum: ["owner", "admin", "guest", "member"],
      required: true,
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
    status: { type: String, enum: ["active", "suspended"] },
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  },
  { timestamps: true },
);

const User = model("User", userSchema);

export default User;
