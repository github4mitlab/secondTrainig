//데이터 스키마 짜기

const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: String
});

module.exports = mongoose.model("Priduct", productsSchema);
