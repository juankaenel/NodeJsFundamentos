const express = require('express');
const router = express.Router();
//importamos el modelo
const Mascota = require('../models/mascota');


router.get('/', async (req,res)=>{ // localhost:3000/mascotas
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

router.get('/crear', (req, res) => {  // localhost:3000/mascotas/crear
    res.render('crear')
})  

router.post('/', async (req,res) => {
    const body = req.body;
    /* console.log(body); */
    try {
        // primer método
        /* const mascotaDB = new Mascota(body);
        await mascotaDB.save();  */
        /* console.log(mascotaDB); */
        //segundo método
        await Mascota.create(body); 
        res.redirect('/mascotas');
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req,res)=>{
    const id = req.params.id 

    try {
        const mascotaDB = await Mascota.findOne({_id:id}) // id viene de params, _id viene de mongodb
        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })

    } catch (error) {
        console.log(error);
        res.render('detalle', {
            mensaje: 'No se encuentra la mascota',
            error: true
        })
    }
})

router.delete('/:id', async (req,res) => {
    const id = req.params.id 
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id:id})
        if (mascotaDB){
            res.json({
                estado: true,
                mensaje: 'Mascota eliminada'
            })
        }
        else{
            res.json({
                estado: true,
                mensaje: 'Mascota eliminada'
            })
        }
    } catch (error) {
        
    }
})

module.exports = router;