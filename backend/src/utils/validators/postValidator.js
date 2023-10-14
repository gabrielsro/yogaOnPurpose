import { body, validationResult } from "express-validator";

export default [
  (req, res, next) => {
    req.body.author = req.user._id;
    req.body.authorName = `${req.user.firstName} ${req.user.lastName}`;
    next();
  },
  body("author").trim().notEmpty().escape(),
  body("status").trim().notEmpty().escape(),
  body("authorName").trim().notEmpty().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      res.sendStatus(400);
      return;
    }
    next();
  },
];
