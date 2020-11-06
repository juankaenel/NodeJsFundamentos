const express = require('express');
const router = express.Router();
//importamos el modelo
const Mascota = require('../models/mascota');


router.get('/mascotas', async (req,res)=>{
    try {
        const arrayMascotasDB = await Mascota.find();
        /* console.log(arrayMascotasDB); */
        res.render('mascotas', {
            arrayMascotas : arrayMascotasDB
        })
    } catch (error) {
        console.log(error);
    }
/* 
    res.render('mascotas',{
        arrayMascotas: [
            {id:'1a', nombre:'Tiranosaurio aex', descripcion:'Malo y grande'},
            {id:'1b', nombre:'Tiranosaurio bex', descripcion:'Malo y gordito'},
            {id:'1c', nombre:'Tiranosaurio cex', descripcion:'Malo y flaco'}
        ]
    }) */
})

module.exports = router;