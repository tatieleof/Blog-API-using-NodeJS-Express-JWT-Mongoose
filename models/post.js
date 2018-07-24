'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var PostSchema = Schema({
    text: String,
    date: Date,
    author: {type: Schema.ObjectId, ref: "User"}
});

module.exports = mongoose.model('Post', PostSchema)

