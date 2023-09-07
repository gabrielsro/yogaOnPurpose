import { Router } from "express";

const router = Router();

router.post("/", (req, res, next) => {
  req.logout((err) => {
    err && next(err);
    req.session.destroy((err) => {
      err && next(err);
      res.clearCookie("connect.sid");
      res.sendStatus(200);
    });
  });
});

export default router;
