import React from "react";
import LogoImagePath from '../../assets/logo.png';
import './NavBar.css';
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className="Nav">
				{/* <FaBars className="Bars" />
				<div className="NavMenu">
					<img className="LogoImage" src={LogoImagePath} alt="Logo" height={'150px'} width={'150px'}/>
					<Link to="/" className="NavLink">
						Home
					</Link>
					<Link to="/About" className="NavLink" activeClassName="active">
						About us
					</Link>
					<Link to="/Contact" className="NavLink" activeClassName="active">
						Contact
					</Link>
				</div>
				<div className="NavBtn">
					<Link to="/login" className="NavBtnLink">
						Sign In
					</Link>
					<Link to="/register" className="NavBtnLink">
						Sign Up
					</Link>
				</div> */}
			</nav>
		</>
	);
};

export default NavBar;