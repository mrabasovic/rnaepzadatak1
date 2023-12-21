import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewStack.css';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    grade: 4,
    title: 'Great Experience',
    comment: 'I had a great experience with this service. Highly recommended!',
  },
  // Add more review data as needed
];

const ReviewStack = () => {
  return (
    <div className="review-stack">
      {reviews.map((review) => (
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
