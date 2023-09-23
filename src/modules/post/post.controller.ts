import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);

    res.send({
      success: true,
      message: "Post created successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = req.body;
  try {
    const result = await PostService.updatePost(id, data);

    res.send({
      success: true,
      message: "Post updated successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
  try {
    const result = await PostService.deletePost(id);

    res.send({
      success: true,
      message: "Post deleted successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getPosts = async (req: Request, res: Response) => {
    const options = req.query;
  try {
    const result = await PostService.getPosts(options);
    res.send({
      success: true,
      message: "Posts retrived successfully !",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Post retrived successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getSinglePost
};
