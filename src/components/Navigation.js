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
      padding: '0 20px'
    }}>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo" style={{ color: theme.color }}>
          🏆 Famous Football Players
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/" style={{ color: theme.color }}>
              <i className="material-icons left">home</i>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: theme.color }}>
              <i className="material-icons left">email</i>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: theme.color }}>
              <i className="material-icons left">info</i>
              About
            </Link>
          </li>
          <li>
            <Link to="/news" style={{ color: theme.color }}>
              <i className="material-icons left">article</i>
              News
            </Link>
          </li>
          <li onClick={toggle}>
            <span style={{ color: theme.color, cursor: 'pointer' }}>
              <i className="material-icons left">{dark ? 'brightness_high' : 'brightness_4'}</i>
              Switch to {dark ? 'Light' : 'Dark'} mode
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;