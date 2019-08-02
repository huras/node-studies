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

//passando dados para a view
const users = ["Diego Fernandes", "Robson Marques", "Carlão"];
app.get("/user", (req, res) => {
  return res.render("list", { name: "Huras" });
});
app.get("/users", (req, res) => {
  return res.render("list", { users });
});

app.listen(3000);
