const mongoose = require('mongoose')

function connectDB(app) {
	mongoose
		.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then((res) => {
			app.listen(process.env.PORT)
		})
}

module.exports = connectDB
