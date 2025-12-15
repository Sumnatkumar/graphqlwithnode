import express, { Application, Request, Response } from "express";
import "dotenv/config";
import { status } from "express/lib/response";
const app: Application = express();

const PORT = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response) => {
  return res.json({ status: 200, message: "App is working" });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
