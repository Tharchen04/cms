const db = require('../config/db');
const createContactTable = async () => {
 try {
 await db.none(`
    CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 `);
 console.log("✅ contact ensured.");
 } catch (err) {
 console.error("❌ Error creating contact table:", err);
 }
};
module.exports = {
 createContactTable
};
