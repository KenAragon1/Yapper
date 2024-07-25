import jwt from "jsonwebtoken";

export const storePost = (req, res) => {
  res.json({ message: "this is the post store endpoint", user: req.user });
};

export const updatePost = (req, res) => {
  res.send("this is the post update endpoint");
};

export const deletePost = (req, res) => {
  res.send("this is the post delete endpoint");
};
