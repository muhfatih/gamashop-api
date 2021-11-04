const mongoose = require('mongoose')
const product = require('../models/product')

async function getProductById(req,res){
	const {id_product} = req.params 
	console.log(req.params);
	const result = await product.findOne({_id:id_product}).catch(err =>{
		console.log(err);
	})
	return res.json(result)
}

module.exports = getProductById