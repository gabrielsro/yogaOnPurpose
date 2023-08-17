import { Router } from "express";
import events from "../controllers/events";

const router = Router();

router.get("/", events.getEvent);
router.post("/");
router.put("/");
router.delete("/");

export default router;
