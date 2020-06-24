const express = require('express');

const app = express();

//Routes
app.get('/', (req, res) => {
    res.send("hello world");
});

//Server
app.listen(3000);