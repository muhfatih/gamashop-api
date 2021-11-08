const mongoose = require('mongoose')
const product = require('../models/product')

async function trendingProducts(req,res){
	const {amount = 100} = req.params
	product.find().sort({amount_sold:-1}).limit(parseInt(amount)).exec((err,product) => {return res.send(product)})
}

module.exports = trendingProducts