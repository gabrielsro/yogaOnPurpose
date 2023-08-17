import { Router } from "express";
import pages from "../controllers/pages";

const router = Router();

router.get("/", pages.getPages);
router.get("/:pageId", pages.getPage);
router.post("/", pages.createPage);
router.put("/:pageId", pages.updatePage);
router.delete("/:pageId", pages.deletePage);

export default router;
