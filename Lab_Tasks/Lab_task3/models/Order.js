const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  items: [String], // You can make this more complex if needed
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema); 