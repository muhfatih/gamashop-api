const mongoose = require('mongoose')
const express = require('express')
const app = express()

function connectDB() {
	mongoose
		.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then((res) => {
			app.listen(process.env.PORT)
		})
}

module.exports = connectDB
