'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var PostSchema = Schema({
    text: String,
    date: Date,
    // add comments here
});

module.exports = mongoose.model('Post', PostSchema)