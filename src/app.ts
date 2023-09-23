import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";
import { CatagoryRoutes } from "./modules/catagory/catagory.routes";
import { PostRoutes } from "./modules/post/post.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', UserRoutes)
app.use('/api/v1/catagory', CatagoryRoutes)
app.use('/api/v1/post', PostRoutes)

export default app;
