import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.post("/profile", UserController.createOrUpadteProfile);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
