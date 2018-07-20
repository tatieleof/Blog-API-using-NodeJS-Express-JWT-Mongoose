'use strict'

var express = require('express')
var bodyparser = require('body-parser')

var app = express()

// cargar rutas
var user_routes = require('./routes/user')


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

// rutas base
app.use('/api', user_routes)
//const PORT = process.env.PORT || 8000; app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`); });
module.exports = app;
