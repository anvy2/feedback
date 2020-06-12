const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send({ hi: "buddy" });
});

app.listen(PORT);
