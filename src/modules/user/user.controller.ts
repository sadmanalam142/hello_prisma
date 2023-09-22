import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);

    res.send({
      success: true,
      message: "User created successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const createOrUpadteProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createOrUpadteProfile(req.body);

    res.send({
      success: true,
      message: "Profile updated successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      success: true,
      message: "Users retrived successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Users retrived successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  createUser,
  createOrUpadteProfile,
  getUsers,
  getSingleUser,
};
