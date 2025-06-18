const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const ensureAdmin = require('../middleware/admin');

// List Products
router.get('/admin/products', ensureAdmin, async (req, res) => {
  const products = await Product.find();
  res.render('admin/products', { products, user: req.session.user, layout: false });
});

// Add Product Form
router.get('/admin/products/new', ensureAdmin, (req, res) => {
  res.render('admin/product-form', { product: {}, user: req.session.user, action: 'Add', layout: false });
});

// Add Product POST
router.post('/admin/products/new', ensureAdmin, async (req, res) => {
  const { name, price, description, mainImage, hoverImage, sizes, colors } = req.body;
  await Product.create({
    name,
    price,
    description,
    mainImage,
    hoverImage,
    sizes: sizes.split(',').map(s => s.trim()),
    colors: colors.split(',').map(c => c.trim())
  });
  res.redirect('/admin/products');
});

// Edit Product Form
router.get('/admin/products/:id/edit', ensureAdmin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('admin/product-form', { product, user: req.session.user, action: 'Edit', layout: false });
});

// Edit Product POST
router.post('/admin/products/:id/edit', ensureAdmin, async (req, res) => {
  const { name, price, description, mainImage, hoverImage, sizes, colors } = req.body;
  await Product.findByIdAndUpdate(req.params.id, {
    name,
    price,
    description,
    mainImage,
    hoverImage,
    sizes: sizes.split(',').map(s => s.trim()),
    colors: colors.split(',').map(c => c.trim())
  });
  res.redirect('/admin/products');
});

// Delete Product
router.post('/admin/products/:id/delete', ensureAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/admin/products');
});

// View Orders
router.get('/admin/orders', ensureAdmin, async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.render('admin/orders', { orders, user: req.session.user, layout: false });
});

// Update Order Status
router.post('/admin/orders/:id/status', ensureAdmin, async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, { status: req.body.status });
  res.redirect('/admin/orders');
});

module.exports = router; 