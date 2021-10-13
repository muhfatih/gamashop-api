const mongoose = require("mongoose")
const schema = mongoose.Schema

const customerSchema = new schema({
	_id: String,
	role: String,
	name: String,
	email: String,
	password: String
})

const Customer = mongoose.model("Customer", customerSchema, "customer")
module.exports = Customer