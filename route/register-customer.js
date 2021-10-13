const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs') 
const Customer = require('../models/customer')
require('dotenv').config();

async function registerCustomer(req,res) {
	//memeriksa input
	const {name, email, password} = req.body;
	
	if(!name||!email||!password) return res.status(400).json({status:'ERROR', code:'bad-request'})
	if(password.length < 8)  return res.status(400).json({status:'ERROR', code:'invalid-password'})
	
	//memeriksa ketersediaan user dengan email
	const isExisted = await Customer.find({email: email}).exec()
		.then(res => res.length)
		.catch(err => console.log(err))
	
	if(isExisted) return res.status(403).json({status: 'ERROR', code:'already-registered', email: email})

	//hash password dengan bcrypt
	const hashedPassword = await bcrypt.hash(password, 15)

	//menyimpan data registrasi pada database
	const customer = new Customer({
		_id : new mongoose.Types.ObjectId(), 
		role : 'customer',
		name : req.body.name,
		email : req.body.email,
		password : hashedPassword
	})
	const {saved, result, error} = await customer.save()
		.then(res => ({saved: true, result: res, }))
		.catch(err => ({saved: false, error: err}))
	if(!saved) return res.status(500).json({status: 'ERROR', code: 'failed-to-save', error: error.name})

	//membuat JWT
	const token = jwt.sign({email: result.email, _id: result._id}, process.env.JWT_KEY)

	//hapus properti password karena result akan dikirimkan lagi
	result.password = undefined

	return res.status(200).json({status:'OK', code:'successfully-registered', body:{token, user_data:result}})
}

module.exports = registerCustomer