import React, { useState } from 'react';
import './index.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>📧 Email</h3>
            <p>support@lestertravelguide.com</p>
          </div>
          <div className="info-card">
            <h3>💬 Chat Support</h3>
            <p>Available 24/7 on our website</p>
          </div>
          <div className="info-card">
            <h3>📱 Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-card">
            <h3>🌐 Social Media</h3>
            <p>Follow us on Facebook, Instagram, and Twitter</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          
          {submitted && (
            <div className="success-message">
              ✓ Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h4>How does the AI travel guide work?</h4>
            <p>Our AI uses advanced algorithms and comprehensive travel data to provide personalized recommendations based on your preferences, budget, and travel style.</p>
          </div>
          <div className="faq-item">
            <h4>Is the service free?</h4>
            <p>Yes! Our basic AI travel guide service is completely free. Premium features may be available in the future.</p>
          </div>
          <div className="faq-item">
            <h4>How long does it take to get recommendations?</h4>
            <p>Recommendations are generated instantly through our AI chat interface. You'll get responses within seconds.</p>
          </div>
          <div className="faq-item">
            <h4>Can I save my travel plans?</h4>
            <p>Currently, you can take screenshots or copy-paste your plans. Saved profiles feature coming soon!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
