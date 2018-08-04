'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    post: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

module.exports = mongoose.model('User', UserSchema)