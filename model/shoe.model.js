const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
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

const Shoe = mongoose.model("Shoe", shoeSchema);


module.exports = Shoe;