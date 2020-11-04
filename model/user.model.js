const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: String,
    country: String,
    image: {
      type: String,
      default: "images/logo-materia-list.png"
    },
    about: String,
    clothings:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clothings"
  }]
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;