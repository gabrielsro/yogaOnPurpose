export default { createUser, logUser };
import User from "../models/user";
import bcrypt from "bcryptjs";

async function createUser(req, res, next) {
  const password = await bcrypt.hash(req.body.password, 10);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: password,
    level: req.body.level,
  });
  try {
    await newUser.save();
    res.json({ status: "success", name: newUser.username });
  } catch (err) {
    res.json({
      status: "error",
      data: err.message,
      error: Object.entries(err),
    });
  }
  next();
}
async function logUser(req, res, next) {
  console.log("LLEGUE AQUI");
  res.json("gonorrea");
  next();
}
