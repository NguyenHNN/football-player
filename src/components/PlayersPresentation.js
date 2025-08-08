import React, { useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import './Players.css';

export default function PlayersPresentation({ players }) {
  const { theme } = useContext(ThemeContext);
  const [imageStates, setImageStates] = useState({});

  // Initialize loading states for all players
  useEffect(() => {
    if (players && Array.isArray(players)) {
      const initialStates = {};
      players.forEach(player => {
        initialStates[player.id] = { loading: true, error: false };
      });
      setImageStates(initialStates);
    }
  }, [players]);

  const styles = useMemo(() => ({
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 15px',
      backgroundColor: theme.backgroundColor,
      color: theme.color
    },
    row: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      padding: '20px 0'
    },
    card: {
      backgroundColor: theme.backgroundColor === 'black' ? '#333' : 'white',
      color: theme.color,
      border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`,
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    cardContent: {
      padding: '20px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '200px',
      marginBottom: '15px',
      backgroundColor: theme.backgroundColor === 'black' ? '#444' : '#f8f9fa',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '4px',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    loadedImage: {
      opacity: 1
    },
    loadingSpinner: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: theme.color
    },
    title: {
      marginBottom: '10px',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    club: {
      marginBottom: '15px',
      color: '#666',
      fontSize: '14px'
    },
    button: {
      marginTop: 'auto'
    }
  }), [theme]);

  const handleImageLoad = useCallback((playerId) => {
    setImageStates(prev => ({
      ...prev,
      [playerId]: { loading: false, error: false }
    }));
  }, []);

  const handleImageError = useCallback((playerId) => {
    setImageStates(prev => ({
      ...prev,
      [playerId]: { loading: false, error: true }
    }));
  }, []);

  const getImagePath = useCallback((player) => {
    const imageState = imageStates[player.id];
    const publicUrl = process.env.PUBLIC_URL || '';
    if (imageState?.error) {
      return publicUrl + '/assets/images/m.jpg';
    }
    return publicUrl + '/' + player.img;
  }, [imageStates]);

  const isImageLoading = useCallback((playerId) => {
    const state = imageStates[playerId];
    return !state || state.loading;
  }, [imageStates]);

  // Kiểm tra xem players có tồn tại và là array không
  if (!players || !Array.isArray(players)) {
    return (
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 15px',
        backgroundColor: theme.backgroundColor, 
        color: theme.color 
      }}>
        <p>No players data available</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        {players.map((player) => (
          <div key={player.id}>
            <div style={styles.card}>
              <div style={styles.cardContent}>
                <div style={styles.imageContainer}>
                  {isImageLoading(player.id) && (
                    <div style={styles.loadingSpinner}>
                      <i className="material-icons" style={{ fontSize: '32px' }}>hourglass_empty</i>
                    </div>
                  )}
                  <img 
                    src={getImagePath(player)}
                    alt={player.name} 
                    style={{
                      ...styles.image,
                      ...(isImageLoading(player.id) ? {} : styles.loadedImage)
                    }}
                    onLoad={() => handleImageLoad(player.id)}
                    onError={() => handleImageError(player.id)}
                  />
                </div>
                <h5 style={styles.title}>{player.name}</h5>
                <p style={styles.club}>{player.club}</p>
                <Link 
                  to={`/detail/${player.id}`} 
                  style={{
                    ...styles.button,
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="material-icons" style={{ fontSize: '16px' }}>info</i>
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}