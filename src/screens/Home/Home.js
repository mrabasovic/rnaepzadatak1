// Home.js
import React from 'react';
import './Home.css';
// import ImageStack from '../../components/ImageStack/ImageStack';

// import background1 from '../../assets/6.jpg';
// import background2 from '../../assets/2.jpg';
// import DestinationCard from '../../components/DestinationCard/DestinationCard';
import Earth from '../../components/Earth/Earth';
// import CardStack from '../../components/CardStack/CardStack';
import ReviewStack from '../../components/ReviewStack/ReviewStack';
// import AuthCard from '../../components/AuthCard/AuthCard.tsx';
import NewYearStack from '../../components/NewYearStack/NewYearStack.js';
import PhotoStack from '../../components/PhotoStack/PhotoStack.js';

const Home = () => {

  // const images1 = [background2, '2.jpg', '3.jpg'];
  // const images2 = ['4.jpg', '5.jpg', '6.jpg'];

  // const containerStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // };

  // const imageStyle = {
  //   maxWidth: '100%',
  //   margin: '0 10px',
  // };

  return (
    <body>
      {/* <img class="imgStyle" src={background1} /> */}
      {/* <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div className="underline-title"></div>
          </div>
          <form method="post" className="form">
            <label htmlFor="user-email" style={{ paddingTop: '13px' }}>
              &nbsp;Email
            </label>
            <input
              id="user-email"
              className="form-content"
              type="email"
              name="email"
              autoComplete="on"
              required
            />
            <div className="form-border"></div>
            <label htmlFor="user-password" style={{ paddingTop: '22px' }}>
              &nbsp;Password
            </label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              required
            />
            <div className="form-border"></div>
            <a href="#">
              <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
            <a href="#" id="signup">
              Don't have an account yet?
            </a>
          </form>
        </div>
      </div> */}
      <NewYearStack />
      <ReviewStack/>
      <div className="photo-stack">
        <PhotoStack/>
      </div>
      
      <Earth/>
      {/* <NewYearStack />
      <ReviewStack/>
      <CardStack/>
      <h1>Odyssey Travels</h1>
      <h1>Roam the Earth, Every Destination is New Tale.</h1>
      <Earth />
      <h2>Image Stack 1</h2>
      <ImageStack images={images1} containerStyle={containerStyle} imageStyle={imageStyle} />

      <h2>Image Stack 2</h2>
      <ImageStack images={images2} containerStyle={containerStyle} imageStyle={imageStyle} />

      <h2>Our destinations</h2>
      <DestinationCard
        imageUrl="https://example.com/your-image.jpg"
        title="Card Title 1"
        description="This is a short description for Card 1."
      /> */}
    </body>
  );
};


export default Home;