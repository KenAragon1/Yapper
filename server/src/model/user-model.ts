import { User } from "@prisma/client";

export type UserResponse = {
  token: string;
  user: UserData;
};

export type UserData = {
  id: number;
  email: string;
  username: string;
};

export type UserRequest = {
  email: string;
  password: string;
};

export interface CreateUserRequest extends UserRequest {
  username: string;
}

export function toUserData(user: User): UserData {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
  };
}
