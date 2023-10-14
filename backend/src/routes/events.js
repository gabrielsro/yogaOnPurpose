import { Router } from "express";
import events from "../controllers/events";
import authenticate from "../utils/sessions/authenticate";
import cdnSignatureValidator from "../utils/validators/cdnSignatureValidator";

const router = Router();

router.put(
  "/:eventId",
  authenticate,
  cdnSignatureValidator,
  events.updateEvent,
);
router.get("/account", authenticate, events.getEventsAccount);
router.get("/", events.getEvents);
router.get("/:eventId", events.getEvent);
router.post("/", authenticate, cdnSignatureValidator, events.createEvent);
router.delete("/:eventId", authenticate, events.deleteEvent);

export default router;
