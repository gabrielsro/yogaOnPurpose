import { Router } from "express";
import schedule from "../controllers/schedule";

const router = Router();

router.get("/", schedule.getSchedule);
router.get("/:dayId", schedule.getScheduleDay);
router.post("/", schedule.createScheduleDay);
router.put("/:dayId", schedule.updateScheduleDay);
router.delete("/:dayId", schedule.deleteScheduleDay);

export default router;
