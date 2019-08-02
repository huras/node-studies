const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

// Rota principal
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
