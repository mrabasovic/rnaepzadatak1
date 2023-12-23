import React from 'react';
import './PhotoStack.css';
import morocco from '../../assets/26.jpeg';
import brasil from '../../assets/30.jpg';
import japan from '../../assets/28.jpeg';

const PhotoStack = () => {
  return (
    <div className="photo-stack-container">
      <div className="row">
      <div className="right">
          <p>Where vibrant souks, ancient medinas, and the mesmerizing Sahara Desert promise an unforgettable travel experience filled with rich cultural encounters and breathtaking landscapes.</p>
        </div>
        <div className="left">
          <img className="stackPhoto" src={morocco} alt="Morocco" />
        </div>
      </div>
      <div className="row">
        <div className="right">
          <img className="stackPhotoRight" src={brasil} alt="Brasil" />
        </div>
        <div className="left">
          <p>Vibrant adventure to Brazil, where the rhythmic beats of samba, pristine beaches along the coast, and the lush Amazon rainforest beckon, creating an immersive travel experience filled with diverse culture.</p>
        </div>
      </div>
      <div className="row">
        <div className="right">
          <p>A land where traditional tea ceremonies, cherry blossoms in bloom, and futuristic cityscapes seamlessly coexist</p>
        </div>
        <div className="left">
          <img className="stackPhoto" src={japan} alt="Japan" />
        </div>
      </div>
    </div>
  );
};

export default PhotoStack;
