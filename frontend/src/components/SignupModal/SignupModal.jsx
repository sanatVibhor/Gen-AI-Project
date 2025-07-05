import React, { useState } from 'react';
import './SignupModal.css';

const SignupModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { fullName, email, password, confirmPassword } = formData;
  
    if (!fullName || !email || !password || !confirmPassword) {
      return setError('Please fill all required fields.');
    }
  
    if (password !== confirmPassword) {
      return setError('Passwords do not match.');
    }
  
    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        setError(data.error || 'Signup failed');
      } else {
        alert('Signup successful!');
        setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
        onClose();
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong');
    }
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Sign Up</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Business Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {error && <div className="error-text">{error}</div>}

        <div className="modal-buttons">
          <button onClick={handleSubmit}>Register</button>
          <button className="close-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
