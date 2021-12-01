const mongoose = require('mongoose');
const schema = mongoose.Schema;

const transactionsSchema = new schema({
    transaction_id : String,
    customer_id : String,
    product_id : String,
    seller_id : String,
    courier_id : String,
    created_at : Date
});

const transaction = mongoose.model('transaction', transactionsSchema, 'transactions');
module.exports = transaction;