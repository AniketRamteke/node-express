import express from "express";
import { webhookRouter } from "./routes/webhook.mjs";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use("/webhook", webhookRouter);
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Server is up and running",
  });
});
