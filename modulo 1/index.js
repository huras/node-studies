const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("xaxax");
});

//Pega parametros
app.get("/view/:id", (req, res) => {
  res.send(`Bem vindo id ${req.params.id}`);
});

app.listen(3000);
