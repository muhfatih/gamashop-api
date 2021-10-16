require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectDB = require('./connect-db');
const registerCustomer = require('./route/register-customer');
const loginCustomer = require('./route/login-customer');
const getAllItems = require('./route/get-all-products')
const getItemByID = require('./route/get-product-by-id')
const getTrendingItems = require('./route/get-trending-products')

connectDB(app);

// Routing

//route index
app.get("/", (req,res) => {
	return res.json({
		message : "gamashop-api"
	})
});
app.get('/item/:id_item', getItemByID)
app.get('/all-items', getAllItems)
app.get('/trending-items', getTrendingItems)
app.post('/register-customer', registerCustomer)
app.post('/login-customer', loginCustomer)
