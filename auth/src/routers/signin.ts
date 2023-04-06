import express, { Request, Response } from "express";

const signinRouter = express.Router();

signinRouter.post("/api/users/signin", (req: Request, res: Response) => {
  res.send("ok");
});

export default signinRouter;
