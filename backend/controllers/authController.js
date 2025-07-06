const bcrypt = require('bcrypt'); // ⬅️ Add this
const pool = require('../config/db');
const { signupSchema } = require('../utils/validation');

const handleSignup = async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log('📦 Received:', req.body);

  // ✅ Validation
  const { error } = signupSchema.validate({ fullName, email, password });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    // ✅ Check for existing user
    const existing = await pool.query('SELECT * FROM tbl_users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // ✅ Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // ✅ Store hashed password
    await pool.query(
      'INSERT INTO tbl_users (full_name, email, password) VALUES ($1, $2, $3)',
      [fullName, email, hashedPassword]
    );

    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    console.error('❌ DB Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { handleSignup };
