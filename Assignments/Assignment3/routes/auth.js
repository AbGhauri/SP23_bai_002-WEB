const express = require('express');
const router = express.Router();

// Login page route
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Login form submission
router.post('/login', (req, res) => {
    console.log('Login attempt:', req.body);
    // Add your authentication logic here
    res.redirect('/');
});

// Registration page route
router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

// Registration form submission
router.post('/register', (req, res) => {
    console.log('Registration attempt:', req.body);
    // Add your registration logic here
    res.redirect('/login');
});

module.exports = router; 