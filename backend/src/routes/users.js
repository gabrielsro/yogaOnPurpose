import { Router } from "express";
import users from "../controllers/users";
import signupValidator from "../utils/validators/signupValidator";

const router = Router();

router.post("/", signupValidator, users.createUser);

export default router;
