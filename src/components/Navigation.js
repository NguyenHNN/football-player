// src/components/Navigation.js

import React from 'react';

function Navigation() {
  return (
    <nav style={{
      backgroundColor: '#1e1e1e',
      color: '#fff',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
        🏆 Famous Football Players
      </div>
      
      <div style={{ display: 'flex', gap: '30px' }}>
        <a href="#" style={{ 
          color: '#fff', 
          textDecoration: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#333'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          Home
        </a>
        <a href="#" style={{ 
          color: '#fff', 
          textDecoration: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#333'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          Players
        </a>
        <a href="#" style={{ 
          color: '#fff', 
          textDecoration: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#333'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          Teams
        </a>
        <a href="#" style={{ 
          color: '#fff', 
          textDecoration: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          transition: 'background-color 0.3s'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#333'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
          About
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
