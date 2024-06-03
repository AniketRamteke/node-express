import { Router } from "express";
import fs from "fs";
import path from "path";
import { format } from "date-fns";

const webhookRouter = Router();

webhookRouter.post("/", async (req, res) => {
  // res.send({ webhookData: { headers: req.headers, body: req.body } });

  const jsonData = JSON.stringify(
    { webhookData: { headers: req.headers, body: req.body } },
    null,
    2
  );

  const __dirname = path.resolve();

  const directoryPath = path.join(__dirname, "webhook_data");
  const fileName = `${format(new Date(), "yyyy_MM_dd_HH_mm_ss")}.json`;
  const filePath = path.join(directoryPath, fileName);

  // Ensure the directory exists
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  fs.writeFileSync(filePath, jsonData, "utf8");
});

export { webhookRouter };

// http://13.232.59.31:5001/webhook
