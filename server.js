const express = require("express");
const app = express();
const hbs = require("hbs");
// Import Helpers
require("./hbs/helpers");

const port = process.env.PORT || 3000;

// Middleware, es una instrucciòn o callback que se va a ejecutar siempre o importa que URL se solicite.
app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// Si no existe una variable en el objeto que se le pasa a la vista la buscará en los Helpers

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "oScAr sAnChEz"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(
  port,
  console.log("App is running in http://localhost:" + port + "/")
);
