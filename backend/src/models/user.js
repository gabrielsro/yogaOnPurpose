import { Schema } from "mongoose";
import { model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model("User", userSchema);

export default User;
