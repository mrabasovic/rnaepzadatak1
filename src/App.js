import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Home from './screens/Home/Home.js';
// import About from './screens/AboutUs/About';
// import Contact from './screens/Contact/Contact';
// import Login from './screens/Login/Login';
// import Register from './screens/Register/Register';
import NavBar from './components/NavBar';
// import OurTravelers from './screens/OurTravelers';
// import DestinationDetails from './screens/DestinationDetails';


function App() {
  return (
    
    <Router>
      <div>
        <NavBar className="navBar"/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/our-travelers" element={<OurTravelers />} />
          <Route path="/destination-details" element={<DestinationDetails />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;