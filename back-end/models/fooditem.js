const mongoose = require("mongoose")

const FoodItem = new mongoose.Schema({
    id: Number,
    image: String,
    title: String,
    quantity: Number,
    price: String,
});

const FoodItems = mongoose.model('FoodItems', FoodItem);
module.exports = { FoodItems }