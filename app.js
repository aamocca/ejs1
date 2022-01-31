// Módulos
const express = require("express");
const app = express();
const path = require("path");
// Acá falta uno... 😇

// Configuración
app.use(express.static("public"));
app.set("view engine", "ejs");
// Acá falta el template engine

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.get("/", (req, res) => {
  res.render(
    "index",
    (menu = [
      {
        titulo: "Carpaccio fresco",
        descripcion: " Entrada Carpaccio de salmón con cítricos U$S 65.50",
      },
      {
        titulo: "Risotto de berenjena",
        descripcion: " Risotto de berenjena y queso de cabra U$S 47.00",
      },
      {
        titulo: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar U$S 27.50",
      },
      {
        titulo: "Espárragos blancos",
        descripcion:
          " Espárragos blancos con vinagreta de verduras y jamón ibérico U$37.50",
      },
    ])
  );
});

app.listen(3000, () => {
  console.log("Servidor arriba en el puerto 3000 🤓👌");
});
