export default { createUser, getUsers, updateProfilePic, updateUser };
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
    status: "active",
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

async function updateUser(req, res, next) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
      { new: true },
    );
    updatedUser.password = "";
    res.json(updatedUser);
    next();
  } catch (err) {
    console.log(err);
    next();
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await User.find(
      {},
      "firstName lastName username profilePic level",
    );
    res.json(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  next();
}

async function updateProfilePic(req, res, next) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        profilePic: req.body.profilePic,
      },
      { new: true },
    );
    updatedUser.password = "";
    res.json(updatedUser);
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    next();
  }
}
