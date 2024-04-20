// Login.js
import React /*,{ useState }*/ from 'react';
import AuthCard from '../../components/AuthCard/AuthCard.tsx';
import '../Login/Login.css';
import background1 from '../../assets/5.jpg';

const Login = () => {
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
    <div className="login-container">
      <img src={background1} className="background-image" alt=""/>
      <div className="background-image"></div>
      <AuthCard type="login" onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;