'use stricts'

var express = require('express');
var CommentController = require('../controller/comment');
var md_auth = require('../middleware/authenticated')
var md_logs = require('../middleware/writeLog')
var api = express.Router()

var multiparty = require('connect-multiparty')
var md_upload = multiparty({ uploadDir: './uploads/users' })

api.get('/probando-controlador', CommentController.pruebas);
// CRUD
// api.get('/user', [md_logs.writeLog, md_auth.ensureAuth], UserController.getUser);
// api.post('/user', UserController.createUser);
// // api.get('/user/:id', UserController.getUserId);
// api.post('/user/login', UserController.login);
// // api.post('/user/payBill', UserController.payBill);


// api.post('/user/post', UserController.createPost);


module.exports = api;
