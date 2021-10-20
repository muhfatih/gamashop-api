const mongoose = require('mongoose');
const schema = mongoose.Schema;

const sellerSchema = new schema({
    role : String,
    name : String,
    email : String,
    password : String,
    address : String
});

const seller = mongoose.model('seller', sellerSchema, 'sellers');
module.exports = seller ;