'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CommentSchema = Schema({
    userName: String, //not sure how to connect to user
    text: String,
    //date: Date,
    //how to connect to post

    
});

module.exports = mongoose.model('Comment', CommentSchema)