const mongoose = require("mongoose")
const schema = mongoose.Schema

const sellerSchema = new schema({
	id: String,
	role: String,
	name: String,
	email: String,
	password: String,
	address: String
})

const seller = mongoose.model("Seller", sellerSchema, "seller")
module.exports = customer	