const pool = require('../config/db');
const { signupSchema } = require('../utils/validation');

const handleSignup = async (req, res) => {
  const { fullName, email, password } = req.body;
    console.log("---->",fullName)
  // 1. Validate input
  const { error } = signupSchema.validate({ fullName, email, password });
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    // 2. Check if user exists
    const existingUser = await pool.query('SELECT * FROM tbl_users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // 3. Insert user
    await pool.query(
      'INSERT INTO tbl_users (full_name, email, password) VALUES ($1, $2, $3)',
      [fullName, email, password]
    );
    console.log('✅ INSERT SUCCESS');
    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { handleSignup };
