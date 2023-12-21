import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import destinationsData from '../../data/destinationsData';
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';
import './Destinations.css';

const Destinations = () => {
  return (
    <div className="destinations-stack-container">
        <h2>New Year</h2>
      {destinationsData.map((card, index) => (
        <>
            {index === 10 && <h2>Other destinations</h2>}
          <Link key={card.id} to={`/destination-details/${card.id}`} className="destinations-link"> 
              <HorizontalCard
                  imageUrl={card.imageUrl}
                  title={card.title}
                  dates={card.dates}
                  price={card.price}
              />
            </Link>
        </>
      ))}
    </div>
  );
};

export default Destinations;
