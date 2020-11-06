const express = require('express');
const router = express.Router();

router.get('/mascotas', (req,res)=>{
    res.render('mascotas',{
        arrayMascotas: [
            {id:'1a', nombre:'Tiranosaurio aex', descripcion:'Malo y grande'},
            {id:'1b', nombre:'Tiranosaurio bex', descripcion:'Malo y gordito'},
            {id:'1c', nombre:'Tiranosaurio cex', descripcion:'Malo y flaco'}
        ]
    })
})

module.exports = router;