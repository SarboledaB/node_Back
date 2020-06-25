const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =       require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Routes
const crudRoute = require('./routes/crud');

app.use('/crud', crudRoute);




//Db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Conectado con la base de datos')
);


//Server
app.listen(5000);