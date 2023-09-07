import { Schema } from "mongoose";
import { model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String },
    email: { type: String },
    pic: { type: String },
    level: { type: String, enum: ["admin", "guest", "member"], required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  },
  { timestamps: true },
);

const User = model("User", userSchema);

export default User;
