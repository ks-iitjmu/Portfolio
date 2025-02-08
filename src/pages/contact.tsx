import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f066a341-85c9-4de7-b049-ffadd3fca112',
          ...formData
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="background-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <div className="container">
        <div className="header2">
          <h1>Let's Connect</h1>
          <p>I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
        </div>

        <div className="content-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-wrapper">
                <MapPin />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Ludhiana, Punjab</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <Mail />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>iamkunal.iitjmu@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-wrapper">
                <Phone />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+91 9541712485</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            {success && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={loading}
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <Send />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;