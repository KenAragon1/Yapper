import { z, ZodType } from "zod";

export class UserValidation {
  static readonly register: ZodType = z.object({
    email: z.string().email(),
    username: z.string().min(1).max(12),
    password: z.string().min(8).max(100),
  });

  static readonly login: ZodType = z.object({
    email: z.string().email(),
    password: z.string(),
  });
}
