import React, { useState } from 'react';
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
      <div
        className="login-modal"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          zIndex: 999,
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '8px'
        }}
      >
        <div
          className="modal-content"
          style={{
            position: 'relative',
            backgroundColor: '#fefefe',
            padding: '30px',
            borderRadius: '20px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '80%',
            margin: '0 auto'
          }}
        >
        <CloseIcon 
          className="close-icon" 
          style={{ 
          color: '#636363', 
          position: 'absolute', 
          top: '10px', 
          right: '10px',
          cursor: 'pointer',
          zIndex: '1000'
          }} 
          onClick={() => setIsLoginModalOpen(false)} />

          <h2 className="welcome-msg" style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Welcome back to TINKINGTIN!
          </h2>
          <p className="login-msg" style={{ fontSize: '15px', marginTop: '10px', color: '#636363' }}>
            Login to your account
          </p>
          <form className="login-form" style={{ marginBottom: '20px' }} onSubmit={handleLogin}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-password" style={{ marginTop: '20px' }}> {/* Adjusted marginTop here */}
              <a href="#" style={{ color: 'rgb(55, 182, 146)' , marginTop: '1px'}} onClick={() => setIsForgotPasswordOpen(true)}>
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="submit-button transition-colors duration-300 ease-in-out hover:bg-green-600 focus:bg-green-600"
              style={{
                color: 'white',
                border: '1px solid transparent',
                borderRadius: '20px',
                padding: '10px 40px',
                cursor: 'pointer',
                display: 'inline-block',
                textAlign: 'center',
                fontWeight: 'bold',
                outline: 'none',
                transition: 'none',
                marginTop: '15px',
                backgroundColor: '#019673'
              }}
            >
              Login
            </button>
          </form>
          <div className="signup-text" style={{ marginTop: '10px' }}>
            <p style={{ color: '#929292', marginBottom: '5px' }}>Don't have an account yet?</p>
            <button
              onClick={() => setIsSignupOpen(true)}
              style={{ color: '#f34949', textDecoration: 'none', backgroundColor: 'transparent', border: 'none' }}
            >
              Sign up now!
            </button>
          </div>
          {isLoggedIn && (
            <p className="success-message" style={{ color: '#929292', marginTop: '10px', fontSize: '15px' }}>
              Logged in successfully!
            </p>
          )}
        </div>
        {isSignupOpen && (
          <div
            className="signup-modal"
            style={{
              position: 'fixed',
              zIndex: 1000,
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: '#fefefe',
                padding: '20px',
                borderRadius: '40px',
                textAlign: 'center',
                maxWidth: '400px',
                width: '80%'
              }}
            >
              <div
                className="close-icon-container"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '100%',
                  paddingRight: '10px' // Add some padding to separate the icon from the right edge
                }}
              >
                <CloseIcon className="close-icon" onClick={() => setIsSignupOpen(false)} />
              </div>
              <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Sign up for a new account</h2>
              <form className="signup-form" onSubmit={handleSignup}>
                <label htmlFor="new-email" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="new-email"
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                  }}
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <label htmlFor="new-name" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="new-name"
                  placeholder="Enter your name"
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                  }}
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <label htmlFor="new-lastname" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="new-lastname"
                  placeholder="Enter your last name"
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                  }}
                  value={newLastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                />
                <label htmlFor="new-password" style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>
                  Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                  }}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="submit-button"
                  style={{
                    backgroundColor: '#019673',
                    color: 'white',
                    border: '1px solid transparent',
                    borderRadius: '20px',
                    padding: '10px 25px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    outline: 'none',
                    transition: 'none',
                    marginTop: '10px'
                  }}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        )}
        {isForgotPasswordOpen && (
          <div
            className="forgot-password-modal"
            style={{
              position: 'fixed',
              zIndex: 1001,
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '40px',
                textAlign: 'center',
                maxWidth: '400px',
                width: '80%',
                marginBottom: '10px'
              }}
            >
              <div
                className="close-icon-container"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '100%',
                  paddingRight: '10px' // Add some padding to separate the icon from the right edge
                }}
              >
                <CloseIcon 
                  className="close-icon" 
                  style={{ 
                    color: '#636363', 
                    cursor: 'pointer',
                    zIndex: '1000'
                  }} 
                  onClick={() => setIsForgotPasswordOpen(false)} 
                />
              </div>

              <h1 className="forgot-password-title" style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>
                Forgot your password?
              </h1>
              <form className="forgot-password-form" onSubmit={handleForgotPassword}>
                <label htmlFor="forgot-email" style={{ display: 'block', marginBottom: '20px', textAlign: 'left' }}>
                  Enter your email address
                </label>
                <input
                  type="email"
                  id="forgot-email"
                  placeholder="Email"
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                  }}
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="submit-reset-button"
                  style={{
                    backgroundColor: '#019673',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '10px 25px',
                    marginTop: '7px'
                  }}
                >
                  Reset Password
                </button>
                {forgotPasswordError && (
                  <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>
                    {forgotPasswordError}
                  </p>
                )}
                {forgotPasswordSuccess && (
                  <p className="success-message" style={{ color: 'green', marginTop: '10px' }}>
                    Password reset code sent to your email!
                  </p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default LoginReg;
