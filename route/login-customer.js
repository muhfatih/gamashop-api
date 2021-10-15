const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs') 
const Customer = require('../models/customer')
require('dotenv').config();

async function loginCustomer(req,res) {
	const{email, password} = req.body
	if(!email||!password) return res.status(400).json({status:'ERROR', code:'bad-request'})
	const isExisted = await Customer.findOne({email: email})
		.then(async (req,res) =>{
			console.log(Customer.password);
			const result = await bcrypt.compareSync(req.body.password, Customer.password)
			if(result) console.log('gas');
			else console.log('jangan');
		})
		.catch(err => console.log(err));
	}


module.exports = loginCustomer