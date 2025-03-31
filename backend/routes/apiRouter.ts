import express from "express";
const router = express.Router();
import authRouter from "./authRouter";

router.get("/", (req: any, res: any) => {
  res.send("Welcome to the API router");
});

router.use("/auth", authRouter);

export default router;
