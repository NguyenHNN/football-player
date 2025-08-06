import React, { useState } from 'react';
import { Players as playersList } from '../shared/ListOfPlayers';
import '../App.css'; // Import CSS từ App.css

function Players() {
  // Khởi tạo state để lưu thông tin cầu thủ được chọn
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Hàm xử lý khi nhấn "Detail"
  const handleDetailClick = (player) => {
    setSelectedPlayer(player); // Cập nhật state với cầu thủ được chọn
  };

  // Hàm đóng modal
  const handleCloseModal = () => {
    setSelectedPlayer(null); // Đặt lại state để đóng modal
  };

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
          {playersList.map((player) => (
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
              <button
                onClick={() => handleDetailClick(player)}
                style={{
                  fontSize: '16px',
                  color: '#fff',
                  backgroundColor: '#007bff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                <a href="#popup1" style={{ color: 'white', textDecoration: 'none' }}>
                  Detail
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPlayer && (
        <div id="popup1" className="overlay">
          <div className="popup">
            <h2>{selectedPlayer.name}</h2>
            <a className="close" href="#" onClick={handleCloseModal}>
              &times;
            </a>
            <div className="content">
              <img src={selectedPlayer.img} alt={selectedPlayer.name} />
              <p><strong>Club:</strong> {selectedPlayer.club}</p>
              <p><strong>Info:</strong> {selectedPlayer.info}</p>
            </div>
          </div>
        </div>
      )}

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