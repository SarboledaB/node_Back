const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =       require('cors');
const crudRoute = require('./routes/crud');
require('dotenv/config');

//Uso de cors
app.use(cors());
//Body parser
app.use(bodyParser.json());

//Routes
app.use('/crud', crudRoute);

//Conexion a la DB 
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Conectado con la base de datos')
);

//Server
app.listen(5000);