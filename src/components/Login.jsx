import React, { useState } from 'react';
import './Login.css';

function Login({ onLoginSuccess, navigateTo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      onLoginSuccess(user);
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title" style={{ color: '#1d4ed8' }}>Login to CODE UP</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="form-error">{error}</p>}
        <button
          type="submit"
          className="form-button login-button"
        >
          Login
        </button>
      </form>
      <p className="form-link-text">
        Don't have an account?{' '}
        <button
          onClick={() => navigateTo('signup')}
          className="form-link-button"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;
