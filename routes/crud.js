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
    const producto = new productos(req.body)
    try {
        const guardar = await producto.save();
        res.json(guardar);
    } catch (err) {
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

router.patch('/:productoId', async (req, res)=> {
    try {
        const actualizarProducto = await productos.updateOne({_id: req.params.productoId }, {
            $set: {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio
            }
        });
        res.json(actualizarProducto);
    } catch (error) {
        res.json({message: err});
    }
});

module.exports = router;