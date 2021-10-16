const bcrypt = require('bcryptjs')
const Customer = require('../models/customer')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
require('dotenv').config();

async function loginCustomer(req,res) {
	const {email,password} = req.body
	if(!email||!password) return res.status(400).json({status:"ERROR", code:"bad-request"})
	const customer = await Customer.findOne({email:email}).catch(err => {
		console.log(err);
		return null
	})
	if(customer === null) return res.status(404).json({status:"ERROR", code:"data-not-found"})
	const isSame = bcrypt.compareSync(password,customer.password)
	if(isSame) {
		const token = jwt.sign({email,_id:customer._id}, process.env.JWT_KEY)
		customer.password = undefined
		return res.json({status:"OK", body:{token, user_data:customer}})
	} else return res.status(401).json({status:"ERROR", code:"unauthorized"})
}

module.exports = loginCustomer