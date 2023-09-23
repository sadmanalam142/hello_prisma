import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.createPost);
router.patch("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.get("/", PostController.getPosts);
router.get("/:id", PostController.getSinglePost);

export const PostRoutes = router;
