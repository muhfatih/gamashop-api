const mongoose = require('mongoose')
const product = require('../models/product')

async function trendingProducts(req,res){
	const result = await product.find().sort({amount_sold:"desc"}).limit(req.params)
}

module.exports = trendingProducts