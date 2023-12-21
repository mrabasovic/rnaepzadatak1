import React from 'react';
import '../Contact/Contact.css';
import { useEffect, useState } from 'react';

const Contact = () => {

  const [mapImageUrl, setMapImageUrl] = useState('');

  useEffect(() => {
    // Function to fetch the map image from Google Maps Static API
    const fetchMapImage = async () => {
      const apiKey = 'AIzaSyBNiesdFIM1xkQcjGE2RxGBudx94OYlc9c';
      const latitude = '44.81830005041111';
      const longitude = '20.462490303084362';

      //const zoom = 10;
      const size = '1000x800'; // Increase the size for a larger image
      const scale = 4; // Increase the scale for higher resolution

      const apiUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&size=${size}&scale=${scale}&markers=color:red%7C${latitude},${longitude}&key=${apiKey}`;


      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const imageUrl = URL.createObjectURL(await response.blob());
          setMapImageUrl(imageUrl);
        } else {
          console.error('Failed to fetch map image:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchMapImage();
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          <strong>Email:</strong> info@odysseytravelagency.com
        </p>
        <p>
          <strong>Phone:</strong> +381 (60) 7273-886
        </p>
        <p>
          <strong>Address:</strong> Dositejeva 11, Belgrade, Serbia
        </p>
      </div>

      <hr />

      <div className="contact-section">
        <h2>Working Hours</h2>
        <ul>
          <li><strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM</li>
          <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
          <li><strong>Sunday:</strong> Closed</li>
        </ul>
      </div>

      <hr />

      <div className="contact-section">
        <h2>License Information</h2>
        <p>
          <strong>License Number:</strong> TA-123456
        </p>
      </div>

      <div className="contact-section">
        <h2 className="locationHeading2">Location</h2>
        {mapImageUrl && <img src={mapImageUrl} alt="Map with marker" />}
      </div>
    </div>
  );
};

export default Contact;
