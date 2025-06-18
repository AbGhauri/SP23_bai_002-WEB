const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../middleware/auth');
const Order = require('../models/Order');

router.get('/my-orders', ensureLoggedIn, async (req, res) => {
  const orders = await Order.find({ userEmail: req.session.user.email }).sort({ createdAt: -1 });
  res.render('my-orders', { orders, user: req.session.user });
});

module.exports = router; 