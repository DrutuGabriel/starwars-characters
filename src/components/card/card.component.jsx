import React from 'react';
import './card.styles.css';

export const Card = ({character}) => {
  return (
    <div className="card-container">
      <div 
        className="charImage"
        style={{
          backgroundImage: `url(${character.image})`
        }}
      ></div>
      <h2>{character.name}</h2>
      <p class="charDescription">{character.description}</p>
    </div>  
  );
};