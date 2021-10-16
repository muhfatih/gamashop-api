const mongoose = require('mongoose')
const product = require('../models/product')

async function getProductById(req,res){
	const result = await findOne({_id:req.params}).catch(err => {
		return res.status(404).json({status:"ERROR",code:"data-not-found"})
	})
	return res.send(result)
}

module.exports = getProductById