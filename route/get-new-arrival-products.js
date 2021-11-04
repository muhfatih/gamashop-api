const mongoose = require('mongoose')
const product = require('../models/product')

async function trendingProducts(req,res){
	const {amount} = req.params
	product.find().sort({created_at:-1}).limit(amount).exec((err,product) => {return res.send(product)})
}

module.exports = trendingProducts