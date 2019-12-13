const hbs = require("hbs");

// Helpers
hbs.registerHelper("getYear", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("capitalize", text => {
  let palabras = text.split(" ");
  palabras.forEach((palabra, index) => {
    palabras[index] =
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });

  return palabras.join(" ");
});
