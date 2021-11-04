const mongoose = require('mongoose')
const product = require('../models/product')

async function trendingProducts(req,res){
	product.find().sort({amount_sold:-1}).limit(req.params).exec((err,product) => {return res.send(product)})
}

module.exports = trendingProducts