'use strict'

var express = require('express')
var bodyparser = require('body-parser')

var app = express()

// cargar rutas
var user_routes = require('./routes/user');
var post_routes = require('./routes/post');
var cors = require('cors');

// use it before all route definitions
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
    // configurar cabeceras

// rutas base
app.use('/api', user_routes)
app.use('/api', post_routes)
//const PORT = process.env.PORT || 8000; app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`); });
module.exports = app;
