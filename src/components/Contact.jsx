import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      console.log({ name, email, message });
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="form-container" style={{ maxWidth: '600px' }}>
      <h2 className="form-title" style={{ color: '#1e40af' }}>Contact CODE UP</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Your Email</label>
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
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            className="form-input"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="form-button login-button"
        >
          Send Message
        </button>
        {status && <p className="form-success" style={{ marginTop: '1rem' }}>{status}</p>}
      </form>
    </div>
  );
}

export default Contact;








