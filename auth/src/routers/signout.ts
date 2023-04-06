import express, { Request, Response } from "express";

const signoutRouter = express.Router();

signoutRouter.post("/api/users/signout", (req: Request, res: Response) => {
  res.send("ok");
});

export default signoutRouter;
