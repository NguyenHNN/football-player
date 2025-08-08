import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { data } from '../shared/ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';
import { Container } from 'react-materialize';

function Players() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color, minHeight: '100vh', padding: '40px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: theme.backgroundColor === 'black' ? '#333' : '#f8f9fa',
        borderBottom: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: theme.color }}>STARS</div>
            <div style={{ fontSize: '12px', color: theme.color === 'white' ? '#ccc' : '#666' }}>★★★</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#28a745' }}>FPT University</div>
            <div style={{ fontSize: '14px', color: '#fd7e14' }}>TRƯỜNG ĐẠI HỌC FPT</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ 
            width: '30px', 
            height: '30px', 
            backgroundColor: '#61dafb', 
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            color: 'white'
          }}>
            ⚛
          </div>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: theme.color }}>React</span>
        </div>
      </div>

      <Container style={{ padding: '40px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          marginBottom: '30px',
          color: theme.color
        }}>
          Final result:
        </h1>
        <PlayersPresentation players={data} />
      </Container>
    </div>
  );
}

export default Players;