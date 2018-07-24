'use stricts'

var express = require('express');
var UserController = require('../controller/user');
var md_auth = require('../middleware/authenticated')
var md_logs = require('../middleware/writeLog')
var api = express.Router()

var multiparty = require('connect-multiparty')
var md_upload = multiparty({ uploadDir: './uploads/users' })

api.get('/probando-controlador', UserController.pruebas);
// CRUD
api.get('/user', [md_logs.writeLog, md_auth.ensureAuth], UserController.getUser);
api.post('/user', UserController.createUser);
// api.get('/user/:id', UserController.getUserId);
// api.post('/user/login', UserController.login);
// api.post('/user/payBill', UserController.payBill);

module.exports = api;
