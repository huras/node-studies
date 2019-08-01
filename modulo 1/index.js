const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("xaxax");
});

app.get("/login/:id", (req, res) => {
  res.send(`Bem vindo id ${req.params.id}`);
});

app.listen(3000);
