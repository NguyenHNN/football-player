import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import './Players.css';

export default function PlayersPresentation({ players }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '35px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {players.map((player) => (
          <div key={player.id} style={{
            textAlign: 'center',
            border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#e0e0e0'}`,
            borderRadius: '14px',
            padding: '32px 18px',
            backgroundColor: theme.backgroundColor,
            boxShadow: '0 4px 16px rgba(0,0,0,0.13)',
            transition: 'transform 0.2s',
            minWidth: '260px',
            maxWidth: '340px',
            margin: '0 auto'
          }}>
            <img
              src={player.img}
              alt={player.name}
              style={{ 
                width: '100%', 
                height: '230px', 
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '18px'
              }}
            />
            <h3 style={{ 
              margin: '0 0 12px 0', 
              fontSize: '22px',
              fontWeight: 'bold',
              color: theme.color
            }}>
              {player.name}
            </h3>
            <p style={{ 
              margin: '0 0 16px 0', 
              fontSize: '18px',
              color: theme.color === 'white' ? '#ccc' : '#666'
            }}>
              {player.club}
            </p>
            <Link to={`/detail/${player.id}`}>
              <button style={{
                fontSize: '16px',
                color: '#fff',
                backgroundColor: '#007bff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}