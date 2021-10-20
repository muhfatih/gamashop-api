const dbConnect = require('../dbConnection');
const Seller = require('../models/seller');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
require('dotenv').config();

async function registerSeller(req, res){
    dbConnect();
    const {
        name,
        email,
        password,
        address
    } = req.body;

    if(!(name && email && password && address)){
        res.status(400).send('All input is required!');
    }
    if(password.length < 8){
        res.status(400).send('Password length is too short')
    }

    const oldSeller = await Seller.findOne({ email });
    if (oldSeller){
        return res.status(400).send("Email already exist. Please login");
    }

    const hashedPassword = await bcrypt.hash(password, 15)

    const seller = new Seller({
        _id : new mongoose.Types.ObjectId(),
        role : 'Seller',
        name : req.body.name,
        email : req.body.email.toLowerCase(),
        password : hashedPassword,
        address : req.body.address
    });

    const {saved, result, error} = await seller.save()
		.then(res => ({saved: true, result: res, }))
		.catch(err => ({saved: false, error: err}))
	if(!saved) return res.status(500).json({status: 'ERROR', code: 'failed-to-save', error: error.name})
    
    const token = jwt.sign(
        {email : result.email, _id : result._id},
        process.env.JWT_KEY,
    );

    result.password = undefined;
    return res.status(200).json({
        status : 'OK',
        code : 'Successfully-registered',
        body : {token, user_data:result}
    });
}

module.exports = registerSeller;