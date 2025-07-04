    import React from 'react'
    import "./LoginPage.css"
    const LoginPage = () => {
    return (
        <div className='loginpage'>
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
            <button>LOGIN</button>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </div>
        </div>
    )
    }

    export default LoginPage
