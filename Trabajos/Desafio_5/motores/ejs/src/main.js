const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

const Container = require("../../../api/Contenedor.js");
const products = new Container("../../resources/productos.txt");


app.get("/", (req, res) => {
  res.render("inicio", {});
});
app.post("/productos", async (req, res) => {
  let product = req.body;
  if (product) {
    await products.saveProduct(product);
    console.log(`Producto guardado : ${JSON.stringify(product)}`);
    res.redirect("/");
  } else {
    res.sendStatus(400);
  }
});

app.get("/productos", async (req, res) => {
  const productos = await products.getAll();
  res.render("products", { productos });
});

app.listen(8080);
