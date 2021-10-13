require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
const registerCustomer = require('./route/register-customer')

mongoose
	.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((res) => {
		app.listen(process.env.PORT)
	});

app.get("/", (req,res) => {
	return res.json({
		message : "gamashop api"
	})
});

// Routing
app.post('/register-customer',registerCustomer);
