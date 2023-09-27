import { Router } from "express";
import contact from "../controllers/contact";

const router = Router();

router.post("/", contact.receiveUserContact);

export default router;
