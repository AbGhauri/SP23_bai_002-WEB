const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  mainImage: String,
  hoverImage: String,
  sizes: [String],
  colors: [String]
});

module.exports = mongoose.model('Product', productSchema); 