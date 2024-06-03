import { Router } from "express";
import fs from "fs";

const webhookRouter = Router();

webhookRouter.post("/", async (req, res) => {
  res.send({ webhookData: req.headers });
  fs.writeFileSync("webhookData.json", JSON.stringify(req.headers));
});

export { webhookRouter };
