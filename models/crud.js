const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
        nombre: String,
        descripcion: String,
        precio: String,
});

module.exports = mongoose.model('producto', productoSchema);