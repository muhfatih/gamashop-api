const mongoose = require('mongoose')
const product = require('../models/product')

async function trendingProducts(req,res){
	const {amount} = req.params
	console.log(req.params)
	product.find().sort({amount_sold:-1}).exec((err,product) => {return res.send(product)})
}

module.exports = trendingProducts