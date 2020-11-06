const express = require('express');
const router = express.Router();

// Rutitas
router.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
});
  
router.get("/nosotros", (req, res) => {
  res.render("nosotros", { titulo: "Nosotros EJS" });
});


module.exports = router;