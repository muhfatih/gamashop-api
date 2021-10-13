require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const registerCustomer = require('./route/register-customer')
const connectDB = require('./connect-db')

connectDB()

// Routing
//route index
app.get("/", (req,res) => {
	return res.json({	
		message : "gamashop api"
	})
});
//pendaftaran akun customer
app.post('/register-customer',registerCustomer);
