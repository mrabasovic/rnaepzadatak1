import React from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.css';

const ReviewCard = ({ name, grade, title, comment }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <h3>{name}</h3>
        <div className="grade">{`Grade: ${grade}/5`}</div>
      </div>
      <div className="review-content">
        <h4>{title}</h4>
        <p>{comment}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default ReviewCard;
