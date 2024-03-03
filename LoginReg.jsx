import React, { useState } from 'react';
import './LoginRegis.css';
import CloseIcon from '@mui/icons-material/Close';

function LoginReg() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newName, setNewName] = useState(''); 
  const [newLastName, setNewLastName] = useState(''); 
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false); 
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState(''); 
  const [forgotPasswordError, setForgotPasswordError] = useState('');
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false); 

  const correctEmail = 'ubri@qwe.com';
  const correctPassword = '123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      setIsLoggedIn(true);
      setTimeout(() => {
        setIsLoggedIn(false); 
      }, 2000);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!newEmail || !newName || !newLastName) {
      alert('Please fill in all fields before signing up.');
      return;
    }
    // Add your signup logic here
    alert('Signed up successfully!');
    setIsSignupOpen(false);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!forgotPasswordEmail) {
      setForgotPasswordError('Please enter your email.');
      return;
    }
    if (forgotPasswordEmail !== correctEmail) {
      setForgotPasswordError('Email does not belong to any account.');
      return;
    }
    // Add logic to send reset password code to the email
    setForgotPasswordSuccess(true);
    setForgotPasswordError('');
    setTimeout(() => {
      setIsForgotPasswordOpen(false); // Close the forgot password modal after 2 seconds
      setForgotPasswordSuccess(false); // Clear the success message after 2 seconds
    }, 2000);
  };

  // Open the login modal when the component mounts
  useState(() => {
    setIsLoginModalOpen(true);
  }, []);

  return (
    isLoginModalOpen && (
      <div className="login-modal">
        <div className="modal-content">
          <CloseIcon className="close-icon" onClick={() => setIsLoginModalOpen(false)} />
          <h2 className="welcome-msg">Welcome back to TINKINGTIN!</h2>
          <p className="login-msg">Login to your account</p>
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <div className="forgot-password">
              <a href="#" onClick={() => setIsForgotPasswordOpen(true)}>Forgot your password?</a>
            </div>
            <button
              type="submit"
              className="submit-button"
              style={{backgroundColor: '#019673', color: 'white'}}
            >
              Login
            </button>
          </form>
          <div className="signup-text" style={{ marginTop: '10px' }}>
  <p style={{ color: '#929292', marginBottom: '0px' }}>Don't have an account yet?</p>
  <button 
    onClick={() => setIsSignupOpen(true)} 
    style={{ color: '#f34949', textDecoration: 'none', backgroundColor: 'transparent', border: 'none' }}
  >
    Sign up now!
  </button>
</div>
          {isLoggedIn && <p className="success-message">Logged in successfully!</p>}
        </div>
        {isSignupOpen && (
          <div className="signup-modal">
            <div className="modal-content">
              <CloseIcon className="close-icon" onClick={() => setIsSignupOpen(false)} />
              <h2>Sign up for a new account</h2>
              <form className="signup-form" onSubmit={handleSignup}>
                <label htmlFor="new-email">Email</label>
                <input 
                  type="email" 
                  id="new-email" 
                  placeholder="Enter your email" 
                  value={newEmail} 
                  onChange={(e) => setNewEmail(e.target.value)} 
                />
                <label htmlFor="new-name">Name</label>
                <input 
                  type="text" 
                  id="new-name" 
                  placeholder="Enter your name" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)} 
                />
                <label htmlFor="new-lastname">Last Name</label>
                <input 
                  type="text" 
                  id="new-lastname" 
                  placeholder="Enter your last name" 
                  value={newLastName} 
                  onChange={(e) => setNewLastName(e.target.value)} 
                />
                <label htmlFor="new-password">Password</label>
                <input 
                  type="password" 
                  id="new-password" 
                  placeholder="Enter your password" 
                  value={newPassword} 
                  onChange={(e) => setNewPassword(e.target.value)} 
                />
                <button
                  type="submit"
                  className="submit-button"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        )}
        {isForgotPasswordOpen && (
          <div className="forgot-password-modal">
            <div className="modal-content">
              <CloseIcon className="close-icon" onClick={() => setIsForgotPasswordOpen(false)} />
              <h2 className="forgot-password-title">Forgot your password?</h2>
              <form className="forgot-password-form" onSubmit={handleForgotPassword}>
                <label htmlFor="forgot-email">Enter your email address</label>
                <input 
                  type="email" 
                  id="forgot-email" 
                  placeholder="Email" 
                  value={forgotPasswordEmail} 
                  onChange={(e) => setForgotPasswordEmail(e.target.value)} 
                />
                <button
                  type="submit"
                  className="submit-reset-button"
                  style={{backgroundColor: '#019673', color: 'white'}}
                >
                  Reset Password
                </button>
                {forgotPasswordError && <p className="error-message">{forgotPasswordError}</p>}
                {forgotPasswordSuccess && <p className="success-message">Password reset code sent to your email!</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default LoginReg;
