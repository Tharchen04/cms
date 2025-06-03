const db = require('../config/db');

// Show Dashboard with contacts list and optional edit form
exports.getDashboard = async (req, res) => {
  try {
    const contacts = await db.any('SELECT * FROM contacts ORDER BY created_at DESC');
    res.render('admin/dashboard', {
      contacts,
      contact: null,    // for add form
      message: null
    });
  } catch (err) {
    console.error('❌ Error loading dashboard:', err);
    res.status(500).send('Server Error');
  }
};

// Handle Add Contact
exports.postAddContact = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).send('Name, Email, and Phone are required.');
    }

    await db.none(
      `INSERT INTO contacts (name, email, phone, address) VALUES ($1, $2, $3, $4)`,
      [name, email, phone, address]
    );

    res.redirect('/admin/dashboard');
  } catch (err) {
    console.error('❌ Error inserting contact:', err);
    res.status(500).send('Server Error');
  }
};

// Show Edit Contact in dashboard
exports.getEditContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contacts = await db.any('SELECT * FROM contacts ORDER BY created_at DESC');
    const contact = await db.oneOrNone('SELECT * FROM contacts WHERE id = $1', [id]);

    if (!contact) return res.status(404).send("Contact not found");

    res.render('admin/dashboard', {
      contacts,
      contact,     // pre-filled form data
      message: null
    });
  } catch (err) {
    console.error("Error loading edit form:", err);
    res.status(500).send("Server error");
  }
};

// Handle Edit Contact
exports.postEditContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;

  try {
    await db.none(
      `UPDATE contacts SET name = $1, email = $2, phone = $3, address = $4 WHERE id = $5`,
      [name, email, phone, address, id]
    );
    res.redirect('/admin/dashboard');
  } catch (err) {
    console.error("Error updating contact:", err);
    res.status(500).send("Server error");
  }
};

// Delete Contact
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await db.none('DELETE FROM contacts WHERE id = $1', [id]);
    res.redirect('/admin/dashboard');
  } catch (err) {
    console.error("Error deleting contact:", err);
    res.status(500).send("Server error");
  }
};
