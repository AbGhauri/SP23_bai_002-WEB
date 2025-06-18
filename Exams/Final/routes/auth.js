const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Login page route
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

// Login form submission
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = { userId: user.userId, email: user.email, isAdmin: user.isAdmin };
        req.session.success = 'Login successful! Welcome back!';
        if (req.query.redirect) {
            return res.redirect(req.query.redirect);
        }
        res.redirect('/');
    } else {
        res.render('login', { title: 'Login', error: 'Invalid credentials.' });
    }
});

// Registration page route
router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});

// Registration form submission
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render('register', { title: 'Register', error: 'User already exists.' });
        }
        // Hash the password
        const hash = await bcrypt.hash(password, 10);
        // Find the highest userId and increment
        const lastUser = await User.findOne().sort({ userId: -1 });
        const nextUserId = lastUser && lastUser.userId ? lastUser.userId + 1 : 1;
        // Create the user
        await User.create({ email, password: hash, userId: nextUserId });
        req.session.success = 'Registration successful! Welcome!';
        res.redirect('/');
    } catch (err) {
        res.render('register', { title: 'Register', error: 'Registration failed. Please try again.' });
    }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
});

module.exports = router; 