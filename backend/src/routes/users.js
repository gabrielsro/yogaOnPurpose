import { Router } from "express";
import users from "../controllers/users";
import signupValidator from "../utils/validators/signupValidator";
import cdnSignatureValidator from "../utils/validators/cdnSignatureValidator";
import authenticate from "../utils/sessions/authenticate";

const router = Router();

router.get("/", authenticate, users.getUsers);
router.post("/", signupValidator, users.createUser);
router.post(
  "/profilePic",
  authenticate,
  cdnSignatureValidator,
  users.updateProfilePic,
);
router.put("/", authenticate, users.updateUser);

export default router;
