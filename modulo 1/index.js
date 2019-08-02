const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("xaxax");
});

//Pega parametros
app.get("/view/:id", (req, res) => {
  res.send(`Bem vindo id ${req.params.id}`);
});

//json return
app.get("/json/:nome", (req, res) => {
  return res.json({
    message: `Welcome, ${req.params.nome}`
  });
});

app.listen(3000);
