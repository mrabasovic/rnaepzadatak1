import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewStack.css';
import reviewData from '../../data/reviewData';

const ReviewStack = () => {
  return (
    <div className="review-stack">
      {reviewData.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.name}
          grade={review.grade}
          title={review.title}
          comment={review.comment}
        />
      ))}
    </div>
  );
};

export default ReviewStack;
