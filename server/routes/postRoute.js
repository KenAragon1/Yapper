import express from "express";
import {
  storePost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  res.send("test");
});

router.post("/", authenticateToken, storePost);
router.patch("/", updatePost);
router.delete("/", deletePost);

export default router;
