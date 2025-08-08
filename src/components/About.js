import React, { useContext, useState, useMemo, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';
import './About.css';

function About() {
  const { theme } = useContext(ThemeContext);
  const [activeItem, setActiveItem] = useState(0);

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
    title: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    accordion: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    accordionItem: {
      marginBottom: '10px',
      border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`,
      borderRadius: '8px',
      overflow: 'hidden'
    },
    accordionHeader: {
      backgroundColor: theme.backgroundColor === 'black' ? '#333' : '#f8f9fa',
      padding: '15px 20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: 'none',
      width: '100%',
      color: theme.color,
      fontSize: '16px',
      fontWeight: 'bold'
    },
    accordionContent: {
      backgroundColor: theme.backgroundColor === 'black' ? '#444' : 'white',
      padding: '20px',
      borderTop: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`
    },
    icon: {
      transition: 'transform 0.3s ease'
    },
    rotatedIcon: {
      transform: 'rotate(180deg)'
    }
  }), [theme]);

  const accordionData = [
    {
      title: "Our Mission",
      icon: "star",
      content: "To celebrate and showcase the greatest football players in the world, providing fans with detailed information and highlights."
    },
    {
      title: "Our Team",
      icon: "group",
      content: "A passionate group of developers and football enthusiasts from FPT University, dedicated to building this fan page."
    },
    {
      title: "Our Vision",
      icon: "visibility",
      content: "To create an engaging platform for football fans to explore player profiles, news, and more, using modern web technologies."
    }
  ];

  const toggleItem = useCallback((index) => {
    setActiveItem(activeItem === index ? -1 : index);
  }, [activeItem]);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.title}>About Us</h2>
        <div style={styles.accordion}>
          {accordionData.map((item, index) => (
            <div key={index} style={styles.accordionItem}>
              <button
                style={styles.accordionHeader}
                onClick={() => toggleItem(index)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="material-icons">{item.icon}</i>
                  <span>{item.title}</span>
                </div>
                <i 
                  className="material-icons"
                  style={{
                    ...styles.icon,
                    ...(activeItem === index ? styles.rotatedIcon : {})
                  }}
                >
                  expand_more
                </i>
              </button>
              {activeItem === index && (
                <div style={styles.accordionContent}>
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;