'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CommentSchema = Schema({
    text: String,
    date: Date,
    author: {type: Schema.ObjectId, ref: "User"},
    post: {type: Schema.ObjectId, ref: "Post"}
    
});

module.exports = mongoose.model('Comment', CommentSchema)