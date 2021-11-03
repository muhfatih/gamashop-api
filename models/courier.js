const mongoose = require('mongoose');
const schema = mongoose.Schema;

const courierSchema = new schema({
    courierID : String,
    courierName : String,
    price : Number,
});

const courier = mongoose.model('courier', courierSchema, 'couriers');
module.exports = courier ;