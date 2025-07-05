const express = require('express');
const router = express.Router();
const { handleSignup } = require('../controllers/authController');

router.post('/signup', handleSignup);

module.exports = router;
