'use stricts'

var express = require('express');
var PostController = require('../controller/post');
var md_auth = require('../middleware/authenticated')
var md_logs = require('../middleware/writeLog')
var api = express.Router()

var multiparty = require('connect-multiparty')
// var md_upload = multiparty({ uploadDir: './uploads/users' })

api.get('/post/probandoPost', PostController.pruebasPost);

// CRUD

api.post('/post', PostController.createPost);
api.get('/post',  PostController.getPost);
api.get('/post/:id', PostController.getPostId); 
// api.delete('/post/delete/:id', PostController.deletePost); 



module.exports = api;
