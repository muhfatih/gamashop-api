const Transaction = require('../models/transactions');
const mongoose = require('mongoose');

async function addTransaction(req, res){
    const{
        customer_id,
        product_id,
        seller_id,
        courier_id
    } = req.body

    const transaction = new Transaction({
        transaction_id : new mongoose.Types.ObjectId(),
        customer_id : req.body.customer_id,
        product_id : req.body.product_id,
        seller_id : req.body.seller_id,
        courier_id : req.body.courier_id,
        created_at : Date.now()
    });

    const{saved, result, error} = await transaction.save()
        .then(res => ({saved : true, result : res}))
        .catch(err => ({saved : false, error : err}))

    if(!saved) return res.status(500).json({status: 'ERROR', code: 'failed-to-save', error: error.name});

    return res.json({status : "ok", code : "saved", body : {data : result}})
}

module.exports = addTransaction;