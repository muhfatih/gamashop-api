const products = require('../models/product')
const mongoose = require('mongoose')

async function newProduct(req,res) {
	const {fk_seller, name, price, description, amount, category, image} = req.body
	const Product = new products({
		id : new mongoose.Types.ObjectId(),
		fk_seller,
		name,
		category,
		images : image,
		price,
		rating : 0,
		amount_stocks : amount,
		amount_sold : 0,
		description,
		amount_sold : amount,
		created_at : new Date().getTime()
	})

	return res.send(result)
}

module.exports = newProduct