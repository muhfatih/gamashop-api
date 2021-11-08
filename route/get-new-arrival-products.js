const mongoose = require('mongoose')
const product = require('../models/product')

async function newProducts(req,res){
	const {amount = 100} = req.params
	product.find().sort({created_at:-1}).limit(parseInt(amount)).exec((err,product) => {return res.send(product)})
}

module.exports = newProducts