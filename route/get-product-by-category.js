const mongoose = require('mongoose')
const product = require('../models/product')

async function getProductByCategory(req,res) {
	product.find({category:req.params.category_product}).limit(req.params.amount).exec((err,product) =>{return res.send(product)})
}

module.exports = getProductByCategory