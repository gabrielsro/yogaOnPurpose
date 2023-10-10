import { Router } from "express";
import * as Comments from "../controllers/comments";
import authenticate from "../utils/sessions/authenticate";

const router = Router();

//TODO: Validate comments
router.get("/post/:assetId", authenticate, Comments.getPostComments);
router.post("/post/:assetId", authenticate, Comments.createPostComment);
router.post("/event/:assetId", authenticate, Comments.createEventComment);
router.get("/event/:assetId", authenticate, Comments.getEventComments);
router.post("/comment/:assetId", authenticate, Comments.createReply);
router.get("/:assetId", authenticate, Comments.getReplies);

export default router;
