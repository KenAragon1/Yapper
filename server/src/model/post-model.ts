import { UserData } from "./user-model";

export type PostRequest = {
  title: string;
  body: string;
  user: UserData;
};

export type PostResponse = {
  message: string;
  post: {
    id: number;
    title: string;
    body: string;
    imageUrl: string | null;
    authorId: number;
  };
};
