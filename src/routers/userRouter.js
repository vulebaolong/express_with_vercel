import express from "express";

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
    res.json({ message: "user" });
});

export default userRouter;
