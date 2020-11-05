const express = require('express');
const app = express();

const port = 3000;

// Motor de plantilla
app.set('view engine', 'ejs');
// Ubicacion de plantillas
app.set('views', __dirname + '/views')
//Archivos estáticos
app.use(express.static(__dirname + "/public"))

// Rutitas
app.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
  });
  
app.get("/nosotros", (req, res) => {
  res.render("nosotros", { titulo: "Nosotros EJS" });
});

app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404" });
})

app.listen(port, () => {
    console.log('Servidor en el puerto ', port);
});