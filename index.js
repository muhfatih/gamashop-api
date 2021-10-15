require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectDB = require('./connect-db');
const registerCustomer = require('./route/register-customer');
const loginCustomer = require('./route/login-customer');

connectDB(app);

// Routing

//route index
app.get("/", (req,res) => {
	return res.json({	
		message : "gamashop api"
	})
});
app.post('/register-customer', registerCustomer);
app.post('/login-customer', loginCustomer);
