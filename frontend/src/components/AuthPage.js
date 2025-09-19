import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  
  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  // Signup form state
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      if (response.data.success) {
        showAlert('success', 'Login successful!');
        setLoginData({ email: '', password: '' });
      }
    } catch (error) {
      showAlert('danger', error.response?.data?.message || 'Login failed');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signup', signupData);
      if (response.data.success) {
        showAlert('success', 'Signup successful! Please login.');
        setSignupData({ username: '', email: '', password: '' });
        setIsFlipped(false); // Flip to login form
      }
    } catch (error) {
      showAlert('danger', error.response?.data?.message || 'Signup failed');
    }
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'login') {
      setLoginData(prev => ({ ...prev, [name]: value }));
    } else {
      setSignupData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-buttons">
        <button 
          className={`btn ${!isFlipped ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setIsFlipped(false)}
        >
          Login
        </button>
        <button 
          className={`btn ${isFlipped ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setIsFlipped(true)}
        >
          Sign Up
        </button>
      </div>

      {alert.show && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setAlert({ show: false, type: '', message: '' })}
          ></button>
        </div>
      )}

      <div className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-inner">
          {/* Login Form - Front */}
          <div className="flip-card-front">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Login</h3>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="loginEmail"
                      name="email"
                      value={loginData.email}
                      onChange={(e) => handleInputChange(e, 'login')}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="loginPassword"
                      name="password"
                      value={loginData.password}
                      onChange={(e) => handleInputChange(e, 'login')}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Signup Form - Back */}
          <div className="flip-card-back">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Sign Up</h3>
                <form onSubmit={handleSignup}>
                  <div className="mb-3">
                    <label htmlFor="signupUsername" className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="signupUsername"
                      name="username"
                      value={signupData.username}
                      onChange={(e) => handleInputChange(e, 'signup')}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="signupEmail"
                      name="email"
                      value={signupData.email}
                      onChange={(e) => handleInputChange(e, 'signup')}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="signupPassword"
                      name="password"
                      value={signupData.password}
                      onChange={(e) => handleInputChange(e, 'signup')}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;