/* const {frutas, dinero} = require('./frutas')

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: 'Hola perro qué onda',
    e: "oO",
    T: "U"
}));

// npx simula instalaciones globales para realizar por ejem
// la instalación de vue cli. en vez de instalar de forma global la simulas

frutas.forEach(fruta=>{
    console.log(fruta);
})

console.log(dinero); */
/* 
const http = require('http');
const server = http.createServer((solicitud,respuesta)=>{
// respuesta
    respuesta.end('Estoy respondiendo a tu solicitud v3');
})

const puerto = 3000;
// solicitud
server.listen(puerto, () => {
    console.log('Escuchando solicitudes');
}) */

/* Implementando express */
const express = require('express');
const app = express();

const port = 3000;

// Middlewares
app.use(express.static(__dirname + "/public")) //__dirname => ruta dinámica, de la app si la subo al hosting debe tomar la nueva ruta. Por eso usamos ruta dinámica.
app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/public/404.html");
})

app.get('/', (req,res)=>{
    console.log(__dirname);
    res.send('Mi respuesta desde express');
})

app.listen(port, ()=>{
    console.log(`Servidor a su servicio ${port}`);
})