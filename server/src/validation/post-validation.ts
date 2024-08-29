import { z, ZodType } from "zod";

export class PostValidation {
  static readonly createPost: ZodType = z.object({
    title: z.string(),
    body: z.string(),
  });
}
