import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authenticate from "./auth";

const app = express();

app.get("/", (_req, res) => {
  res.send("API running");
});

app.get("/api/hello", authenticate, (req, res) => {
  res.json({
    message: "Hello from the protected API",
    tokenInfo: (req as any).user,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
