import { body, validationResult } from "express-validator";
import { BadRequest } from "../errors/badRequest";

export default [
  body("username", "Username cannot be empty").trim().notEmpty().escape(),
  body("password", "Password cannot be empty").trim().notEmpty().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next(new BadRequest(errors));
    } else {
      next();
    }
  },
];
