const express = require("express");

function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Hello from API" });
  });

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/echo", (req, res) => {
    res.json({ you_sent: req.body });
  });

  return app;
}

module.exports = { createApp };