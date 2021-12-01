const Tracker = require('../models/tracker');
const mongoose = require('mongoose');

async function addTracker(req, res){
    const {
        product_id,
        customer_id
    } = req.body;

    const tracker = new Tracker({
        id : 0,
        product_id : req.body.product_id,
        customer_id : req.body.customer_id,
        event : "click product",
        timestamp : Date.now()
    });

    const{saved, result, error} = await tracker.save()
        .then(res => ({saved : true, result : res}))
        .catch(err => ({saved : false, error : err}))

    if(!saved) return res.status(500).json({status: 'ERROR', code: 'failed-to-save', error: error.name});

    return res.json({status : "ok", code : "clicked", body : {data : result}})
}

module.exports = addTracker;