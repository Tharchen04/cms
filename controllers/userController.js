// controllers/userController.js
const db = require('../config/db');

exports.getDashboard = async (req, res) => {
  try {
    const contacts = await db.any('SELECT * FROM contacts ORDER BY created_at DESC');
    res.render('user/dashboard', { contacts });
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.render('user/dashboard', { contacts: [], message: 'Failed to load contacts.' });
  }
};
