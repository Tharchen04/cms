// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Dashboard view with contact list and (optionally) edit form
router.get('/dashboard', adminController.getDashboard);

// Add new contact
router.post('/add-contact', adminController.postAddContact);

// Load contact info into edit form
router.get('/edit-contact/:id', adminController.getEditContact);

// Submit edited contact
router.post('/edit-contact/:id', adminController.postEditContact);

// Delete contact (use POST for better security)
router.get('/delete-contact/:id', adminController.deleteContact);


module.exports = router;
