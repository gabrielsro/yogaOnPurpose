import { Router } from "express";
import passport from "passport";

const router = Router();

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info, status) => {
    if (err) {
      next(err);
    }
    if (!user) {
      res.json({ info, status });
    }
    req.logIn(user, (err) => {
      err && next(err);
      return res.json({ user, info, status });
    });
  })(req, res, next);
});

export default router;
