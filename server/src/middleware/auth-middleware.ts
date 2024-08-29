import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("token");

  if (!token) return res.status(401).json({ errors: "Unauhthorized" }).end();

  jwt.verify(token, process.env.JWT_SECRET_KEY || "test", (err, decoded) => {
    if (err) return res.status(401).json({ errors: err }).end();

    req.body.user = decoded;
    next();
  });
};
