require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
	.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((res) => {
		console.log(res);
		app.listen(process.env.PORT)
	});

app.get("/", (req,res) => {
	return res.json({
		message : "gamashop api"
	})
});

