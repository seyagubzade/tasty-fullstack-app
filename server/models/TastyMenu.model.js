const mongoose = require("mongoose")

const TastyMenu = mongoose.model("TastyMenu", new mongoose.Schema({
    title: String,
    desc: String,
    image: String,
    price: Number,
    category: String
}))

module.exports = {TastyMenu}