import { Router } from "express";
const webhookRouter = Router();

webhookRouter.post("/", async (req, res) => {
  res.send({ webhookData: req.headers });
});

export { webhookRouter };
