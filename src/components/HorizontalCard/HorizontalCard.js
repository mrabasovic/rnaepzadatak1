import React from 'react';
import PropTypes from 'prop-types';
import './HorizontalCard.css';

const HorizontalCard = ({ id, imageUrl, title, description, dates, price }) => {
  return (
    <div className="horizontal-card">
      <img src={imageUrl} alt={title} className="horizontal-card-image" />
      <div className="horizontal-card-content">
        <h3 className="horizontal-card-title">{title}</h3>
        <p className="horizontal-card-description">{description}</p>
        <p className="horizontal-card-dates">{dates}</p>
        <p className="horizontal-card-price">{price}</p>
      </div>
    </div>
  );
};

HorizontalCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default HorizontalCard;
