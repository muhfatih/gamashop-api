const mongoose = require('mongoose')
const product = require('../models/product')

async function getProductByCategory(req,res) {
	const {category, amount = 100} = req.params
	product.find({category}).limit(parseInt(amount)).exec((err,product) =>{return res.send(product)})
}

module.exports = getProductByCategory