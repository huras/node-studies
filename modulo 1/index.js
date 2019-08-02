const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
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

//Formulario de criação de usuários
app.get("/new", (req, res) => {
  return res.render("new");
});

//Formulario de criação de usuários
app.post("/create", (req, res) => {
  console.log(req.body);
  users.push(req.body.user);
  return res.redirect("/users");
});

app.listen(3000);
