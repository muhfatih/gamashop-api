const mongoose = require('mongoose')
const product = require('../models/product')

async function getProductByCategory(req,res) {
	async function getProductById(req,res){
		const result = await find({category:req.params.category_product}).limit(req.params.amount).catch(err => {
			return res.status(404).json({status:"ERROR",code:"data-not-found"})
		})
		return res.send(result)
	}
}

module.exports = getProductByCategory