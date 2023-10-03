import { Router } from "express";
import events from "../controllers/events";
import authenticate from "../utils/sessions/authenticate";

const router = Router();

router.get("/", events.getEvents);
router.get("/:eventId", events.getEvent);
router.get("/account", events.getEventsAccount);
router.post("/", authenticate, events.createEvent);
router.put("/");
router.delete("/");

export default router;
