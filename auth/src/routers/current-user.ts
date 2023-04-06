import express, { Request, Response } from "express";

const currentUserRouter = express.Router();

currentUserRouter.get(
  "/api/users/currentuser",
  (req: Request, res: Response) => {
    res.send("ok");
  }
);

export default currentUserRouter;
