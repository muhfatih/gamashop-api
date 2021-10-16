const products = require('../models/product')
const mongoose = require('mongoose')

async function getItems(req,res) {
	const result = await products.find().catch(err => {
		return res.status(404).json({status:"ERROR", code:"data-not-found"})
	})
	return res.send(result)
}

module.exports = getItems