import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import destinationsData from '../../data/destinationsData';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import './NewYearStack.css';

const NewYearStack = () => {
  const [visibleCards/*, setVisibleCards*/] = React.useState(3);
  const [startIndex/*, setStartIndex*/] = React.useState(0);

  // const showAllCards = () => {
  //   setVisibleCards(destinationsData.length);
  //   // Navigate to the "OurTravelers" screen using Link
  // };

  // const navigateNext = () => {
  //   setStartIndex(startIndex + 3);
  // };

  // const navigatePrev = () => {
  //   setStartIndex(Math.max(0, startIndex - 3));
  // };

  return (
    <div className="newYearCard-stack-container">
      {destinationsData.slice(startIndex, startIndex + visibleCards).map((card) => (
        // TODO sredi da ne vodi na /destination nego negde drugo, a mozda i treba tu?. TODO NAPRAVI LEPO NAVIGACIJU DA NE IZBACUJE ONAJ ERROR
          <Link key={card.id} to={`/destination-details/${card.id}`} className="newYearCard-link"> 
              <HorizontalCard
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  dates={card.dates}
                  price={card.price}
              />
            </Link>
          
      ))}
      <div className="centeredButtonContainer">
        <Link to="/destinations">
          <button className="seeAllBtn">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default NewYearStack;
