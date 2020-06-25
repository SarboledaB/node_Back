const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
        nombre: String,
        descripcion: String,
        precio: Number,
});

module.exports = mongoose.model('producto', productoSchema);