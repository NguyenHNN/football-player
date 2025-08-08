import React, { useContext, useState, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { data } from '../shared/ListOfPlayers';
import ModalCase from './ModalCase';
import './Detail.css';

function Detail() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Memoize player data
  const player = useMemo(() => data.find((obj) => obj.id === id), [id]);

  // Memoize cost calculation
  const cost = useMemo(() => {
    if (!player) return '';
    return player.cost.toLocaleString();
  }, [player]);

  // Memoize image path
  const imagePath = useMemo(() => {
    if (!player) return '';
    // Use absolute path from public folder
    const publicUrl = process.env.PUBLIC_URL || '';
    return publicUrl + '/' + player.img;
  }, [player]);

  // Memoize styles to prevent re-creation on every render
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
    content: {
      display: 'flex',
      justifyContent: 'center'
    },
    cardWrapper: {
      width: '100%',
      maxWidth: '800px'
    },
    card: {
      backgroundColor: theme.backgroundColor === 'black' ? '#333' : 'white',
      color: theme.color,
      border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`,
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    cardContent: {
      padding: '20px'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '300px',
      marginBottom: '20px',
      backgroundColor: theme.backgroundColor === 'black' ? '#444' : '#f8f9fa',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '4px',
      opacity: imageLoading ? 0 : 1,
      transition: 'opacity 0.3s ease'
    },
    loadingSpinner: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: theme.color
    },
    title: {
      marginBottom: '10px'
    },
    subtitle: {
      marginBottom: '15px',
      color: '#666'
    },
    price: {
      marginBottom: '15px'
    },
    description: {
      lineHeight: '1.6',
      marginBottom: '20px'
    },
    button: {
      border: 'none',
      cursor: 'pointer',
      position: 'absolute',
      bottom: '20px',
      right: '20px'
    },
    notFound: {
      color: theme.color,
      backgroundColor: theme.backgroundColor,
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }), [theme, imageLoading]);

  // Memoize event handlers
  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  if (!player) {
    return <div style={styles.notFound}>Player not found</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.content}>
          <div style={styles.cardWrapper}>
            <div style={styles.card}>
              <div style={styles.cardContent}>
                <div style={styles.imageContainer}>
                  {imageLoading && (
                    <div style={styles.loadingSpinner}>
                      <i className="material-icons" style={{ fontSize: '48px' }}>hourglass_empty</i>
                    </div>
                  )}
                  <img 
                    src={imageError ? (process.env.PUBLIC_URL || '') + '/assets/images/m.jpg' : imagePath}
                    alt={player.name} 
                    style={styles.image}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                </div>
                <h4 style={styles.title}>{player.name}</h4>
                <h5 style={styles.subtitle}>{player.club}</h5>
                <p style={styles.price}>
                  <strong>Market value:</strong> € {cost}
                </p>
                <p style={styles.description}>{player.info}</p>
                <button
                  onClick={handleOpenModal}
                  style={{
                    ...styles.button,
                    backgroundColor: '#f44336',
                    color: 'white',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="material-icons">ondemand_video</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
    </div>
  );
}

export default Detail;