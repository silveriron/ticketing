import express from "express";
import { json } from "body-parser";
import currentUserRouter from "./routers/current-user";
import signupRouter from "./routers/signup";
import signinRouter from "./routers/signin";
import signoutRouter from "./routers/signout";
import errorHandler from "./middlewares/error-handler";

const app = express();

app.use(json());

app.get("", (req, res) => {
  res.send("ok");
});

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
});
