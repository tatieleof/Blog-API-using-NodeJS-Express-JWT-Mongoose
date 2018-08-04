'use strict'

var Post = require('../models/post');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
var Type = require('type-of-is');
var fs = require('fs');
var path = require('path');

function pruebasPost(req, res) {
    // console.log(req.headers);
    // console.log(req.body);
    // console.log(req.params);

    res.status(200).send({
        messsage: 'probando una accion del controlador de la api rest con mongo'
    })
}

function createPost(req, res) {
    var post = new Post()
    
    post.title = req.body.title
    post.text = req.body.text
    post.author = req.body.author
    post.save(function (err, data) {
        if (err) throw err;
        return res.status(200).send(data)
        // redirect to home page
    });
} 
function getPost(req, res) {
    Post.find({}, function (err, post) {
        if (err) {
            console.log(err.errmsg);
        } else {
            res.status(200).send(post)
        }
    })
}

function getPostId(req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (err){
            console.log(err.errmsg);
        } else {
            res.status(200).send(post);            
        }
    });
}
// function deletePost(req, res) {
//     // Post.findByIdAndRemove(req.params.id, function (err, post ) {
//         try {
//             Post.findOne({ id: req.params.id }).exec((err, post) => {
//                 if (err) {
//                     res.status(500).send(err);
//                 }

//                 post.remove(() => {
//                     console.log('deleted');

//                     res.status(200).end();
                    
//                 });
//             });
//         }
//         catch (err) {
//             console.log(err);
//         }
//         // if (err){
//         //     console.log(err.errmsg);
//         // } else {
//         //     Post.remove
//         //     res.status(200).remove(post); 
//         //     console.log('deleted');
            
//         // }
//     // })
// }

module.exports = {
    getPost,
    pruebasPost,
    createPost,
    getPostId,
    // deletePost,
    // login,
}; 