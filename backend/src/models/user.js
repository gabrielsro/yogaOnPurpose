import { Schema } from "mongoose";
import { model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  level: { type: String, enum: ["admin", "guest"], required: true },
});

const User = model("User", userSchema);

export default User;
