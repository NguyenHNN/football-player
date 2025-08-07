import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { data } from '../shared/ListOfPlayers';
import './Detail.css';

function Detail() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const player = data.find((obj) => obj.id === id);

  if (!player) {
    return <div style={{ color: theme.color, backgroundColor: theme.backgroundColor, padding: '20px' }}>Player not found</div>;
  }

  let cost = player.cost.toLocaleString();

  return (
    <div className="container" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="product-card">
        <div className="badge">{player.name}</div>
        <div className="product-tumb">
          <img src={`/${player.img}`} alt={player.name} />
        </div>
        <div className="product-details">
          <h4>{player.club}</h4>
          <div className="product-price">Market value: € {cost}</div>
          <p>{player.info}</p>
          <div className="product-bottom-details"></div>
        </div>
      </div>
    </div>
  );
}

export default Detail;