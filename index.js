'use strict'

var mongoose = require('mongoose');
var app = require('./app.js')
var port = 3977;

mongoose.connect('mongodb://admin1234:admin1234@ds139341.mlab.com:39341/blogdb', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("base de datos lanzada con exito");
        app.listen(process.env.PORT || 3977, function () {
            console.log("servidor del api rest corriendo.")
        })
    }
})
