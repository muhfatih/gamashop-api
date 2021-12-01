const mongoose = require('mongoose')
const schema = mongoose.Schema

const productSchema = new schema({
	id : String,
	fk_seller : String,
	name : String,
	category : String,
	images : [String],
	price : Number,
	rating : Number,
	amount_stocks : Number,
	amount_sold : Number,
	description : String,
	amount_sold : Number,
	created_at : Date,
	updated_at : Date,
})

const product = mongoose.model("Product", productSchema, "products");
module.exports = product