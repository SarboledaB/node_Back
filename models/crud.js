//Uso de mongoose para manejar MongoDB
const mongoose = require('mongoose');

//Estructura de la base de datos
const productoSchema = mongoose.Schema({
        nombre: String,
        descripcion: String,
        precio: Number,
});

module.exports = mongoose.model('producto', productoSchema);