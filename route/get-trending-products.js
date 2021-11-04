const mongoose = require('mongoose')
const product = require('../models/product')

async function trendingProducts(req,res){
	const result = await product.find().sort({amount_sold:-1}).limit(req.params)
}

module.exports = trendingProducts