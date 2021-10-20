const Seller = require('../models/seller');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
require('dotenv').config();

async function loginSeller(req, res){
    const{
        email,
        password
    } = req.body;
    
    if(!(email && password)){
        res.status(400).send('All input is required!');
    }
    
    const seller = await Seller.findOne({email : email}).catch(err => {
        console.log(err);
        return null;
    });
    
    if(seller == null) return res.status(400).send("Seller not found");
    const isSame = bcrypt.compareSync(password, seller.password);

    if(isSame){
        const token = jwt.sign({email,_id : seller._id}, process.env.JWT_KEY);
        seller.password = undefined;
        return res.json({status : "Ok", body : {token, user_data : seller}})
    } else{
        return res.status(401).json({status : "ERROR", code : "Unauthorized"})
    }
}

module.exports = loginSeller;