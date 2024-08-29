import express from "express";
import { UserController } from "../controller/user-controller";

export const publicRouter = express.Router();

publicRouter.get("/", (req, res) => {
  if (req.query?.name) {
    res.send("hello " + req.query?.name);
  } else {
    res.send("this is yapper server");
  }
});

publicRouter.post("/user/register", UserController.register);
publicRouter.post("/user/login", UserController.login);
