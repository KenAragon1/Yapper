import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/authRoute.js";
import postRoute from "./routes/postRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("this is the home endpoint");
});

app.use("/auth", authRoute);
app.use("/post", postRoute);

app.listen(port, () => {
  console.log(`the server is now running on port ${port}`);
});
