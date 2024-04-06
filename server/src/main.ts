import compression from "compression";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import userRouter from "./user/router";

const app: Application = express();
const PORT = process.env.PORT || 1911;

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(morgan("dev"));

app.use("/auth", userRouter);

app.get("/", (_req: Request, res: Response) => {
  res.send("IAMCODING is Live");
});

const start = () => {
  app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
  });
};

start();
