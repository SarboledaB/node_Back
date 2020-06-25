const express = require('express');
const router = express.Router();
const productos = require('../models/crud');
const cors =       require('cors');


router.get('/Listar', async (req, res) => {
    try {

        const product = await productos.find();
        res.json(product);
    } catch (err) {
        mensaje["tipo"] = "aprobado";
        mensaje["mensaje"] = "error en la conexion con la base de datos";
        return res.json(mensaje);
    }
});

router.post('/crearNuevo', async (req,res) =>{
    console.log("se llamo")
    const producto = new productos(req.body)
    console.log(producto);

    try {
        const guardar = await producto.save();
        res.json(guardar);
        console.log("se guardo");
    } catch (err) {
        console.log({message: err})
        res.json({ message: err });
    }
});

router.delete('/:productoId', async(req, res) => {
    try {
        const borrarProducto = await productos.remove({_id: req.params.productoId});
        res.json(borrarProducto);
    } catch (error) {
        res.json({message: err});
        
    }
});

router.patch('/:productId', (req, res)=> {
    try {
        const actualizarProducto = productos.update({_id: req.params.postId }, {$set: req.body});
        res.json(actualizarProducto);
    } catch (error) {
        res.json({message: err});
    }
});

module.exports = router;