import { Router } from "express";
import users from "../controllers/users";
import signupValidator from "../utils/validators/signupValidator";

const router = Router();

router.post("/", signupValidator, users.createUser);
router.get("/:userId", users.logUser);

export default router;
