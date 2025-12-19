const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  console.log('res', res)
  res.json({ status: "ok" });
});

app.get("/hello", (req, res) => {
    console.log('res', res)
  res.json({ message: "Hello from backend" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
