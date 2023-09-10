import { body, validationResult } from "express-validator";

export default [
  body("author").trim().notEmpty().escape(),
  body("status").trim().notEmpty().escape(),
  body("authorName").trim().notEmpty().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.sendStatus(400);
      return;
    }
    next();
  },
];
