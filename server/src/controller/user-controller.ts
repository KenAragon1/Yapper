import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/user-service";
import { CreateUserRequest, UserRequest } from "../model/user-model";

export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateUserRequest = req.body;
      const response = await UserService.register(request);
      res.json({ data: response });
    } catch (e) {
      next(e);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const request: UserRequest = req.body;
      const response = await UserService.login(request);
      res.json({ data: response });
    } catch (e) {
      next(e);
    }
  }
}
