import React from 'react';
import '../AboutUs/About.css';
import airplaneImg from '../../assets/21.jpeg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to Odyssey Travel Agency!</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          <strong>Empowering Your Travel Dreams:</strong> We are dedicated to making your travel dreams come true.
          Whether you're seeking relaxation on pristine beaches, cultural immersion in vibrant cities, or thrilling
          adventures in exotic destinations, we are here to curate the perfect itinerary tailored to your preferences.
        </p>
      </section>

      <section className="what-sets-us-apart">
        <h2>What Sets Us Apart</h2>
        <div className="feature">
          <h3>Personalized Service</h3>
          <p>
            At Odyssey Travel Agency, we understand that each traveler is unique. Our team of experienced travel
            specialists is committed to providing personalized service, ensuring that every journey is crafted to meet
            your individual desires.
          </p>
        </div>
        {/* Add more features as needed */}
      </section>

      <section className="our-commitment">
        <h2>Our Commitment</h2>
        <div className="commitment-item">
          <h3>Customer Satisfaction</h3>
          <p>
            Your satisfaction is our top priority. We strive to exceed your expectations by delivering exceptional
            service, attention to detail, and a commitment to making every moment of your journey remarkable.
          </p>
        </div>
        {/* Add more commitment items as needed */}
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Ready to embark on your next adventure? Contact Odyssey Travel Agency today to begin planning the journey
          of a lifetime.
        </p>
      </section>
      <img src={airplaneImg} />
    </div>
  );
};

export default AboutUs;
