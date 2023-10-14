import { Router } from "express";
import posts from "../controllers/posts";
import authenticate from "../utils/sessions/authenticate";
import postValidator from "../utils/validators/postValidator";

const router = Router();

router.get("/", posts.getPosts);
router.get("/level", authenticate, posts.getPostsLevel);
router.get("/:postId", posts.getPost);
router.post("/", authenticate, postValidator, posts.createPost);
router.put("/:postId", authenticate, posts.updatePost);
router.delete("/:postId", authenticate, posts.deletePost);

export default router;
