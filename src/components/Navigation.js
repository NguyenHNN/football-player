import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import './Navigation.css';

function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <nav style={{
      backgroundColor: theme.backgroundColor,
      color: theme.color,
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold', color: theme.color }}>
        🏆 Famous Football Players
      </div>
      
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link
          to="/"
          style={{ 
            color: theme.color, 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = dark ? '#555' : '#ddd'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Home
        </Link>
        <Link
          to="/contact"
          style={{ 
            color: theme.color, 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = dark ? '#555' : '#ddd'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Contact
        </Link>
        <a
          className="switch-mode"
          href="#"
          onClick={toggle}
          style={{
            color: theme.color,
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = dark ? '#555' : '#ddd'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          data-testid="toggle-theme-btn"
        >
          Switch to {!dark ? 'Dark' : 'Light'} mode
        </a>
      </div>
    </nav>
  );
}

export default Navigation;