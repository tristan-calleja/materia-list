const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema({
    brand: String,
    piece: String,
    category: String,
    priority: String,
    price: String,
    notes: String,
    website: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    }, 
{ timestamps: true });

const Clothing = mongoose.model("Clothing", clothingSchema);


module.exports = Clothing;