const mongoose = require("mongoose")
const schema = mongoose.Schema

const customerSchema = new schema({
	id: String,
	role: String,
	name: String,
	email: String,
	password: String
})

const customer = mongoose.model("Customer", customerSchema, "customer")
module.exports = customer