const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: Number
})

exports.Category = mongoose.model('Category', categorySchema)