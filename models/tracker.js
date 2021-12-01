const mongoose = require('mongoose');
const schema = mongoose.Schema;

const trackerSchema = new schema({
    id : Number,
    product_id : String,
    customer_id : String,
    event : String,
    created_at : Date
});

const tracker = mongoose.model('tracker', trackerSchema, 'tracker');
module.exports = tracker;