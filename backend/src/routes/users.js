import { Router } from "express";
import users from "../controllers/users";

const router = Router();

router.post("/", users.createUser);
router.get("/:userId", users.logUser);

export default router;
