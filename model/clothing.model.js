const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
    brand: String,
    piece: String,
    category: String,
    priority: String,
    price: String,
    notes: String,
    url: String,
    }, 
{ timestamps: true });

const Clothing = mongoose.model("Clothing", clothingSchema);


module.exports = Clothing;