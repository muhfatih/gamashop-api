const mongoose = require('mongoose')
const express = require('express')
const app = express()

function connectDB() {
	mongoose
	//menghubungkan dengan database
	.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
	//menjalankan server pada port
	.then((res) => {
		app.listen(process.env.PORT)
	})
	//penanganan error
	.catch(err => handleError(error));
}

module.exports = connectDB
