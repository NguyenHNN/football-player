import React, { useContext, useState, useMemo, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';
import './News.css';

function News() {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState(0);

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
    tabsContainer: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    tabsHeader: {
      display: 'flex',
      borderBottom: `2px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`,
      marginBottom: '20px'
    },
    tabButton: {
      flex: 1,
      padding: '15px 20px',
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.color,
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      borderBottom: '3px solid transparent'
    },
    activeTabButton: {
      borderBottom: '3px solid #007bff',
      backgroundColor: theme.backgroundColor === 'black' ? '#333' : '#f8f9fa'
    },
    tabContent: {
      backgroundColor: theme.backgroundColor === 'black' ? '#333' : 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: `1px solid ${theme.backgroundColor === 'black' ? '#555' : '#dee2e6'}`
    },
    tabTitle: {
      marginBottom: '15px',
      color: theme.color
    },
    tabText: {
      lineHeight: '1.6',
      color: theme.color
    }
  }), [theme]);

  const tabsData = [
    {
      title: "Latest News",
      content: {
        title: "Latest Updates",
        text: "Stay tuned for the latest football news, including match results and player transfers."
      }
    },
    {
      title: "Player Highlights",
      content: {
        title: "Player Highlights",
        text: "Watch highlight videos of your favorite players in action."
      }
    },
    {
      title: "Team Updates",
      content: {
        title: "Team Updates",
        text: "Get the latest updates on your favorite teams and their performances."
      }
    }
  ];

  const handleTabClick = useCallback((index) => {
    setActiveTab(index);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.title}>Football News</h2>
        <div style={styles.tabsContainer}>
          <div style={styles.tabsHeader}>
            {tabsData.map((tab, index) => (
              <button
                key={index}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === index ? styles.activeTabButton : {})
                }}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div style={styles.tabContent}>
            <h4 style={styles.tabTitle}>{tabsData[activeTab].content.title}</h4>
            <p style={styles.tabText}>{tabsData[activeTab].content.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;