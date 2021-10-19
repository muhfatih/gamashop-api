require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connectDB = require('./connect-db');
const registerCustomer = require('./route/register-customer');
const loginCustomer = require('./route/login-customer');
const getAllProducts = require('./route/get-all-products');
const getProductByID = require('./route/get-product-by-id');
const getProductByCategory = require('./route/get-product-by-category');
const getTrendingProducts = require('./route/get-trending-products');
const getNewArrivalProducts = require('./route/get-new-arrival-products');
connectDB(app);

// Routing

//route index
app.get("/", (req,res) => {
	return res.json({
		message : "gamashop-api"
	})
});

app.get('/product/list-by-category/:category_product/:amount', getProductByCategory)
app.get('/product/list-trending/:amount', getTrendingProducts)
app.get('/product/list-new-arrival/:amount', getNewArrivalProducts)
app.get('/product/:id_product/', getProductByID)
app.get('/product', getAllProducts)
app.post('/register-customer', registerCustomer)
app.post('/login-customer', loginCustomer)
