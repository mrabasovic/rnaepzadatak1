import React/*, { useState }*/ from 'react';
import AuthCard from '../../components/AuthCard/AuthCard.tsx';
import '../Register/Register.css';
import background1 from '../../assets/22.jpg';

const Register = () => {
  const handleSubmit = (formData) => {
    formData.preventDefault();
    // Perform authentication logic here (e.g., send data to a backend API)
    console.log('Login form submitted:', formData);
  };

  // disable scroll
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="register-container">
      <img src={background1} className="background-image" alt=""/>
      <div className="background-image"></div>
      <AuthCard type="register" onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
