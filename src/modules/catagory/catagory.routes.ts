import express from "express";
import { CatagoryController } from "./catagory.controller";

const router = express.Router();

router.post("/create-catagory", CatagoryController.createCatagory);

export const CatagoryRoutes = router;
