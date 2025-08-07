import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Contact.css';

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for any inquiries!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Email: support@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
}

export default Contact;