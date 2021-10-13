const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs') 
const Customer = require('../models/customer')
require('dotenv').config();

async function loginCustomer(req,res) {
	const{email, password} = req.body
	if(!email||!password) return res.status(400).json({status:'ERROR', code:'bad-request'})
	const isExisted = await Customer.find({email: email}).exec()
		.then(res => res.length)
		.catch(err => console.log(err))
	console.log(isExisted);
	if(!isExisted) return res.status(403).json({status: 'ERROR', code:'not-registered', email: email})
	const hashedInput = await bcrypt.hash(req.body.password, 15)
	
}

module.exports = loginCustomer