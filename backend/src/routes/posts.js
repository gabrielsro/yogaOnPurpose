import { Router } from "express";
import posts from "../controllers/posts";

const router = Router();

router.get("/", posts.getPosts);
router.get("/:postId", posts.getPost);
router.post("/", posts.createPost);
router.put("/:postId", posts.updatePost);
router.delete("/:postId", posts.deletePost);

export default router;
