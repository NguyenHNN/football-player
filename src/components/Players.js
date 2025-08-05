// src/components/Players.js

import React from 'react';
import { Players } from '../shared/ListOfPlayers';

function Players() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #dee2e6'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>STARS</div>
            <div style={{ fontSize: '12px', color: '#666' }}>★★★</div>
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
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>React</span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '40px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          marginBottom: '30px',
          color: '#333'
        }}>
          Final result:
        </h1>

        {/* Player Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '35px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {Players.map((player, index) => (
            <div key={player.id} style={{
              textAlign: 'center',
              border: '1px solid #e0e0e0',
              borderRadius: '14px',
              padding: '32px 18px',
              backgroundColor: '#fff',
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
                color: '#333'
              }}>
                {player.name}
              </h3>
              <p style={{ 
                margin: '0 0 16px 0', 
                fontSize: '18px',
                color: '#666'
              }}>
                {player.club}
              </p>
              <span style={{
                fontSize: '16px',
                color: '#007bff',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Detail
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '3px solid #ffc107',
        padding: '20px 40px',
        backgroundColor: '#f8f9fa'
      }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
          Copyright © 2023
        </p>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
          • Save all changes and do a Git commit with the message "Components Part 1".
        </p>
        <h3 style={{ margin: '10px 0 5px 0', fontSize: '18px', color: '#333' }}>
          Conclusions
        </h3>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
          In this exercise we added a new component to our React application.
        </p>
      </div>
    </div>
  );
}

export default Players;
