import { prismaClient } from "../app/database";
import { ResponseError } from "../error/response-error";
import {
  CreateUserRequest,
  toUserData,
  UserData,
  UserRequest,
  UserResponse,
} from "../model/user-model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService {
  static async register(request: CreateUserRequest): Promise<UserResponse> {
    const registerRequest = Validation.validate(
      UserValidation.register,
      request
    );

    const totalUserWithSameEmail = await prismaClient.user.count({
      where: {
        email: registerRequest.email,
      },
    });

    const totalUserWithSameUsername = await prismaClient.user.count({
      where: {
        username: registerRequest.username,
      },
    });

    if (totalUserWithSameEmail != 0) {
      throw new ResponseError(400, "Email already exist");
    }

    if (totalUserWithSameUsername != 0) {
      throw new ResponseError(400, "Username already exist");
    }

    registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

    const user = await prismaClient.user.create({
      data: registerRequest,
    });

    const userData = toUserData(user);

    const token = this.createToken(userData);

    return {
      token,
      user: userData,
    };
  }

  static async login(request: UserRequest): Promise<UserResponse> {
    const loginRequest = Validation.validate(UserValidation.login, request);

    const user = await prismaClient.user.findUnique({
      where: {
        email: loginRequest.email,
      },
    });

    if (!user) throw new ResponseError(400, "email or password incorrect");

    const isPasswordValid = await bcrypt.compare(
      loginRequest.password,
      user.password
    );

    if (!isPasswordValid)
      throw new ResponseError(400, "email or password incorrect");

    const userData = toUserData(user);

    const token = this.createToken(userData);

    return {
      token,
      user: userData,
    };
  }

  static createToken(userPayload: UserData): string {
    const jwtSecret = process.env?.JWT_SECRET_KEY;
    return jwt.sign(userPayload, jwtSecret || "hello", {
      expiresIn: "30m",
    });
  }
}
