const mongoose = require("mongoose");

const watchSchema = new mongoose.Schema({
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

const Watch = mongoose.model("Watch", watchSchema);


module.exports = Watch;