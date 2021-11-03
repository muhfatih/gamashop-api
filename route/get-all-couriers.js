const couriers = require('../models/courier')
const mongoose = require('mongoose')

async function getCouriers(req,res) {
	const result = await couriers.find().catch(err => {
		return res.status(404).json({status:"ERROR", code:"data-not-found"})
	})
	return res.send(result)
}

module.exports = getCouriers