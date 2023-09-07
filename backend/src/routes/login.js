import { Router } from "express";
import passport from "passport";

const router = Router();

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info, status) => {
    if (err) {
      next(err);
    }
    if (!user) {
      return res.json({ info, status });
    }
    req.logIn(user, (err) => {
      err && next(err);
      return res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        level: user.level,
        id: user._id,
      });
    });
  })(req, res, next);
});

router.get("/", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.json("Not logged");
  }
  return res.json({
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    username: req.user.username,
    level: req.user.level,
    id: req.user._id,
  });
});

export default router;
