const express = require('express');
const app = express();

//Variables de entorno
require('dotenv').config();

// Puerto
const port = process.env.PORT || 3000;

// Conexión a bd
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.uy4r0.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`; // url de conexion

mongoose.connect(uri,
  { useNewUrlParser:true, useUnifiedTopology: true }
)
    .then(()=> console.log('Base de datos conectada'))
    .catch(e => console.log(e))

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