import { prismaClient } from "../app/database";
import { PostRequest, PostResponse } from "../model/post-model";
import { PostValidation } from "../validation/post-validation";
import { Validation } from "../validation/validation";

export class PostService {
  static async storePost(request: PostRequest): Promise<PostResponse> {
    const storeRequest = Validation.validate(
      PostValidation.createPost,
      request
    );

    const post = await prismaClient.post.create({
      data: {
        title: storeRequest.title,
        body: storeRequest.body,
        authorId: request.user.id,
      },
    });

    return {
      message: "post created successfully",
      post,
    };
  }
}
