const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');

// Updated product data to match project.html (with correct sizes)
// const products = [
//     {
//         name: "Frankel Dress",
//         price: 695,
//         mainImage: "franke1.png",
//         hoverImage: "franke2.png",
//         sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
//         colors: ["Black", "Pink"],
//         description: "The Frankel Dress is a timeless piece featuring a delicate floral motif and a flattering silhouette. Perfect for both day and evening occasions, its soft fabric and elegant design ensure comfort and sophistication."
//     },
//     {
//         name: "Frankel Strappy Dress",
//         price: 1195,
//         mainImage: "franke3.png",
//         hoverImage: "franke4.png",
//         sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
//         colors: ["Black", "Pink"],
//         description: "The Frankel Strappy Dress exudes modern femininity with its slender straps and flowing skirt. The intricate pattern and lightweight material make it ideal for summer events and special evenings."
//     },
//     {
//         name: "Benoto Mini Dress",
//         price: 695,
//         mainImage: "benoto-mini1.png",
//         hoverImage: "benoto-mini2.png",
//         sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
//         colors: ["Black", "Pink"],
//         description: "The Benoto Mini Dress is playful and chic, featuring tiered ruffles and a cinched waist. Its youthful design and vibrant color options make it a standout choice for daytime outings."
//     },
//     {
//         name: "Benoto Wrap Dress",
//         price: 795,
//         mainImage: "betno.png",
//         hoverImage: "betno1.png",
//         sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
//         colors: ["Black", "Pink"],
//         description: "The Benoto Wrap Dress combines classic wrap styling with contemporary prints. Its adjustable fit and soft drape flatter every figure, making it a versatile wardrobe staple."
//     },
//     {
//         name: "Castell Dress",
//         price: 845,
//         mainImage: "castel.png",
//         hoverImage: "castel1.png",
//         sizes: ["UK6", "UK8", "UK10", "UK12", "UK14"],
//         colors: ["Black", "Pink"],
//         description: "The Castell Dress is the epitome of understated elegance. With clean lines and a minimalist silhouette, it transitions seamlessly from work to evening with effortless grace."
//     }
// ];

// Home page route
router.get('/', async (req, res) => {
    const products = await Product.find();
    const success = req.session.success;
    delete req.session.success; // Clear the message after reading
    const logoutSuccess = req.query.logout ? 'You have been successfully logged out.' : null;
    res.render('index', { 
        title: 'Temperley London',
        products: products,
        success: success || logoutSuccess,
        user: req.session.user, // Pass user info
        cart: req.session.cart || [], // Pass cart
        openCart: req.query.openCart || null // Pass openCart flag
    });
});

// Product detail (cart view) page
router.get('/product/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const product = products[id];
    if (!product) return res.status(404).send('Product not found');
    res.render('product-info', {
        product,
        id, // Pass the product index as 'id'
        products, // for 'You May Also Like'
        user: req.session.user,
        cart: req.session.cart || []
    });
});

// Add to Cart (POST)
router.post('/cart/add', (req, res) => {
    const id = parseInt(req.body.id, 10);
    const product = products[id];
    if (!product) return res.status(404).send('Product not found');
    if (!req.session.cart) req.session.cart = [];
    // Get selected size and color from form
    const selectedSize = req.body.size || product.sizes[0];
    const selectedColor = req.body.color || (product.colors && product.colors[0]);
    console.log('Adding to cart:', { id, productName: product.name, selectedSize, selectedColor });
    // Check if already in cart with same size and color
    const existing = req.session.cart.find(item => item.id === id && item.size === selectedSize && item.color === selectedColor);
    if (existing) {
        existing.quantity += 1;
    } else {
        req.session.cart.push({
            id,
            name: product.name,
            price: product.price,
            mainImage: product.mainImage,
            size: selectedSize,
            color: selectedColor,
            quantity: 1
        });
    }
    if (req.body.openCart === 'checkout') {
        res.redirect('/checkout');
    } else if (req.body.openCart) {
        res.redirect('/?openCart=1');
    } else {
        res.redirect('back');
    }
});

// Update Cart Quantity
router.post('/cart/update', (req, res) => {
    const id = parseInt(req.body.id, 10);
    const action = req.body.action;
    if (!req.session.cart) req.session.cart = [];
    const item = req.session.cart.find(item => item.id === id);
    if (item) {
        if (action === 'increase') {
            item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity -= 1;
        }
    }
    if (req.xhr || req.headers['x-requested-with'] === 'XMLHttpRequest') {
        res.render('partials/cart-sidebar', { cart: req.session.cart }, (err, html) => {
            if (err) return res.status(500).send('Error rendering cart sidebar');
            res.send(html);
        });
    } else {
        res.redirect('/?openCart=1');
    }
});

// Remove Item from Cart
router.post('/cart/remove', (req, res) => {
    const id = parseInt(req.body.id, 10);
    if (!req.session.cart) req.session.cart = [];
    req.session.cart = req.session.cart.filter(item => item.id !== id);
    if (req.xhr || req.headers['x-requested-with'] === 'XMLHttpRequest') {
        res.render('partials/cart-sidebar', { cart: req.session.cart }, (err, html) => {
            if (err) return res.status(500).send('Error rendering cart sidebar');
            res.send(html);
        });
    } else {
        res.redirect('/?openCart=1');
    }
});

// Checkout page
router.get('/checkout', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login?redirect=/checkout');
    }
    res.render('checkout', {
        cart: req.session.cart || []
    });
});

// Checkout form submission
router.post('/checkout', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login?redirect=/checkout');
    }
    const { name, email, phone, address } = req.body;
    const cart = req.session.cart || [];
    console.log('Checkout cart:', cart);
    if (!cart.length) {
        return res.redirect('/checkout');
    }
    try {
        await Order.create({
            userEmail: req.session.user.email,
            name,
            email,
            phone,
            address,
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
            status: 'Pending',
            createdAt: new Date()
        });
        req.session.cart = [];
        res.redirect('/checkout-success');
    } catch (err) {
        console.error('Order save error:', err);
        res.render('checkout', { cart, error: 'Order failed. Please try again.' });
    }
});

// Checkout success page
router.get('/checkout-success', (req, res) => {
    res.render('checkout-success');
});

module.exports = router; 