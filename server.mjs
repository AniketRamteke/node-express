import express from "express";
import { webhookRouter } from "./routes/webhook.mjs";

const app = express();

app.use("/webhook", webhookRouter);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Server is up and running",
  });
});
