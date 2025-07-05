import React, { useState } from 'react'
import "./LoginPage.css"
import SignupModal from '../SignupModal/SignupModal'

const LoginPage = ({ onLogin }) => {
  const [showModal, setShowModal] = useState(false)

  const handleSignupClick = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className='loginpage'>
      {showModal && <SignupModal onClose={closeModal} />}
      
      <div className='login-page-card'>
        <div className='login-card-text'>
          <div className='login-card-heading'>
            <h1>Gen AI Project Hub</h1>
          </div>
          <div className='login-card-paragraph'>
            <p>Access your dashboard and explore the features.</p>
          </div>
        </div>

        <div className='login-card-form'>
          <h2>USER LOGIN</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={onLogin}>Login</button>
          <p>Don't have an account? <a href="#" onClick={handleSignupClick}>Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
