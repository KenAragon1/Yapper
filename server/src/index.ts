import express from "express";
import dotenv from "dotenv";
import { publicRouter } from "./route/public-api";
import { errorMiddleware } from "./middleware/error-middleware";
import { authRouter } from "./route/auth-api";

export const app = express();

dotenv.config();
app.use(
  express.json({
    type: "application/json",
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  console.log("someone made a request");
  next();
});

app.use(publicRouter);
app.use(authRouter);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
