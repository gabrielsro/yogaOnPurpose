import { body, validationResult } from "express-validator";
import { BadRequest } from "../errors/badRequest";

export default [
  body("firstName", "First name cannot be empty").trim().notEmpty().escape(),
  body("lastName", "Last name cannot be empty").trim().notEmpty().escape(),
  body("username", "Username cannot be empty").trim().notEmpty().escape(),
  body("password", "Password cannot be empty").trim().notEmpty().escape(),
  body("passwordAgain", "Re-entering your password is required")
    .trim()
    .notEmpty()
    .escape(),
  body("passwordAgain", "Your passwords don't match").custom(
    (value, { req }) => {
      return req.body.password == value;
    },
  ),
  body("level", "You must select a level").trim().notEmpty().escape(),
  body("key", "Key cannot be empty").trim().notEmpty().escape(),
  body("key", "Invalid key").custom((value, { req }) => {
    if (req.body.level == "admin") {
      return value == "maciel";
    }
    if (req.body.level == "guest") {
      return value == "acosta";
    }
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next(new BadRequest(errors));
    } else {
      next();
    }
  },
];
