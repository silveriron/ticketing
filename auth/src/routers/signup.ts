import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const signupRouter = express.Router();

signupRouter.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("올바른 이메일을 입력해주세요."),
    body("password")
      .trim()
      .isLength({ min: 5, max: 16 })
      .withMessage("비밀번호는 5자 이상 16자 이하로 입력해주세요."),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new Error("이메일 혹은 비밀번호를 확인해주세요.");
    }

    const { email, password } = req.body;
    res.send({ email, password });
  }
);

export default signupRouter;
