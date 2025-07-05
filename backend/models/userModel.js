const pool = require('../config/db');

const findUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

const createUser = async (fullName, email, password) => {
  await pool.query(
    'INSERT INTO tbl_users (full_name, email, password) VALUES ($1, $2, $3)',
    [fullName, email, password]
  );
};

module.exports = { findUserByEmail, createUser };
