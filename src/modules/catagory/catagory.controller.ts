import { Request, Response } from "express";
import { CatagoryService } from "./catagory.service";

const createCatagory = async (req: Request, res: Response) => {
  try {
    const result = await CatagoryService.createCatagory(req.body);

    res.send({
      success: true,
      message: "Catagory created successfully !",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const CatagoryController = {
    createCatagory
};
