const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Landing page
router.get('/', (req, res) => {
  res.render('pages/landing'); // Match this with the correct view path
});

// Auth - Login
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

// Auth - Signup
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

// Admin dashboard
router.get('/admin/dashboard', authController.getAdminDashboard);

// Logout
router.get('/logout', authController.logout);

// ✅ Email Verification
router.get('/verify-email', authController.verifyEmail);

// ✅ Forgot Password
router.get('/forgot-password', authController.getForgotPassword);
router.post('/forgot-password', authController.forgotPassword);

// ✅ Reset Password
router.get('/reset-password', authController.getResetPassword);
router.post('/reset-password', authController.resetPassword);

module.exports = router;
