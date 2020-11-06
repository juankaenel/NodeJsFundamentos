const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Motor de plantilla
app.set('view engine', 'ejs');

// Ubicacion de plantillas
app.set('views', __dirname + '/views')

// Archivos estáticos
app.use(express.static(__dirname + "/public"))

// Traemos las rutas
app.use('/',require('./router/rutas'))
/* app.use('/api',require('./router/rutas')) */
app.use('/',require('./router/mascotas'))

app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404" });
})

app.listen(port, () => {
    console.log('Servidor en el puerto ', port);
});