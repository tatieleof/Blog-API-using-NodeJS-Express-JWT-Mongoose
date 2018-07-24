'use strict'

var Post = require('../models/post');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var Type = require('type-of-is');
var fs = require('fs');
var path = require('path');

function pruebas(req, res) {
    console.log(req.headers);
    console.log(req.body);
    console.log(req.params);

    res.status(200).send({
        messsage: 'probando una accion del controlador de la api rest con mongo'
    })
}

// function payBill(req, res) {
//     let email = req.body.email;
//     let billValue = Number(req.body.billValue);

//     User.findOne({ email: email }, function (err, user) {

//         if (user.balance >= billValue) {
//             let newBalance = user.balance - billValue;

//             User.findByIdAndUpdate(user.id, { balance: newBalance }, function (err, user) {
//                 res.status(200).send("bill paid! well done, your balance is " + newBalance);
//             });
//         } else {
//             res.status(400).send("not enough money buddy!");
//         }
//     })
// }
// function getUser(req, res) {
//     User.find({}, function (err, users) {
//         if (err) {
//             console.log(err.errmsg);
//         } else {
//             res.status(200).send(users)
//         }
//     })
// }
// function createUser(req, res) {
//     var user = new User()
//     user.name = req.body.name;
//     user.surname = req.body.surname;
//     user.email = req.body.email;
//     user.password = req.body.password;
//     bcrypt.hash(req.body.password, null, null, function (err, hash) {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             user.password = hash
//             user.save(function (err, user) {
//                 if (err) {
//                     console.log(err.messsage);
//                 } else {
//                     res.status(200).send(user);
//                 }
//             })
//         }
//     })
// }
// // function getUserId(req, res) {
// //     console.log(req.params.id);
// //     User.findById(req.params.id, function (err, user) {
// //         res.status(200).send(user);
// //     });
// // }
// function login(req, res) {
//     let email = req.body.email
//     let password = req.body.password

//     User.findOne({ email: email }, function (err, user) {
//         if (user) {

//             bcrypt.compare(password, user.password, function (err, check) {
//                 if (check) {
//                     res.status(200).send(jwt.createToken(user));
//                 } else {
//                     res.status(400).send("contrasenha incorrecta");
//                 }
//             });
//         } else {
//             res.status(400).send("no existe el usuario");
//         }
//     })
// }
module.exports = {
    // getUser,
    pruebas,
    // createUser,
    // login,
};