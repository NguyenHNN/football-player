import React, { useContext, useMemo, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';
import './Contact.css';

function Contact() {
  const { theme } = useContext(ThemeContext);

  const styles = useMemo(() => ({
    container: {
      backgroundColor: theme.backgroundColor,
      color: theme.color,
      minHeight: '100vh',
      padding: '40px'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 15px'
    },
    formContainer: {
      maxWidth: '600px',
      margin: '0 auto'
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    form: {
      backgroundColor: theme.backgroundColor === 'black' ? '#333' : 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#ccc'}`,
      borderRadius: '4px',
      backgroundColor: theme.backgroundColor === 'black' ? '#444' : 'white',
      color: theme.color,
      fontSize: '16px'
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#ccc'}`,
      borderRadius: '4px',
      backgroundColor: theme.backgroundColor === 'black' ? '#444' : 'white',
      color: theme.color,
      fontSize: '16px',
      minHeight: '120px',
      resize: 'vertical'
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    contactInfo: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: theme.backgroundColor === 'black' ? '#333' : '#f8f9fa',
      borderRadius: '8px',
      border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '10px'
    }
  }), [theme]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.title}>Contact Us</h2>
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={styles.input}
                placeholder="Enter your name"
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={styles.input}
                placeholder="Enter your email"
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                style={styles.textarea}
                placeholder="Enter your message"
              />
            </div>
            <button type="submit" style={styles.button}>
              Send
              <i className="material-icons">send</i>
            </button>
          </form>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <i className="material-icons">email</i>
              <span>Email: support@example.com</span>
            </div>
            <div style={styles.contactItem}>
              <i className="material-icons">phone</i>
              <span>Phone: +123 456 7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;