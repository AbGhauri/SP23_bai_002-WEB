const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');
const ensureLoggedIn = require('../middleware/auth');
const ensureAdmin = require('../middleware/admin');

let lastUserId = 0;

// Show complaint form
router.get('/complaints', ensureLoggedIn, (req, res) => {
  res.render('complaints/form', { layout: 'layout', user: req.session.user });
});

// Handle complaint submission
router.post('/complaints', ensureLoggedIn, async (req, res) => {
  const { subject, message } = req.body;
  const userId = req.session.user.userId;
  await Complaint.create({
    userId,
    subject,
    message
  });
  req.session.success = 'Your complaint has been submitted successfully.';
  res.redirect('/my-complaints');
});

// User: View own complaints
router.get('/my-complaints', ensureLoggedIn, async (req, res) => {
  const complaints = await Complaint.find({ userId: req.session.user.userId }).sort({ timestamp: -1 });
  const success = req.session.success;
  delete req.session.success;
  res.render('complaints/my-complaints', { complaints, layout: 'layout', success });
});

// Admin: View all complaints
router.get('/admin/complaints', ensureLoggedIn, ensureAdmin, async (req, res) => {
  const complaints = await Complaint.find().populate('userId').sort({ timestamp: -1 });
  res.render('complaints/admin-complaints', { complaints, layout: false });
});

module.exports = router; 