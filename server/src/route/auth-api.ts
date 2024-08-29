import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { PostController } from "../controller/post-controller";

export const authRouter = express.Router();

authRouter.use(authMiddleware);

authRouter.get("/user", (req, res) => {
  res.send(req.body);
});

authRouter.post("/post", PostController.storePost);
