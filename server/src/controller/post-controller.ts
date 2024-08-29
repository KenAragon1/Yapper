import { NextFunction, Request, Response } from "express";
import { PostService } from "../service/post-service";
import { PostRequest } from "../model/post-model";

export class PostController {
  static async storePost(req: Request, res: Response, next: NextFunction) {
    try {
      const request: PostRequest = req.body;
      const response = await PostService.storePost(request);
      res.json({ data: response });
    } catch (e) {
      next(e);
    }
  }
}
