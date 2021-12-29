import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Navbar = () => {

	const Button = styled.button`
		width: 60px;
		height: 40px;
	`;


	return (
		<>
			<nav className="navbar">
				<Link to="/homepage"> <Button> 홈 </Button> </Link>
				<Link to="/loginpage"> <Button> 로그인 </Button> </Link>
			</nav>
		</>
	)

}

export default Navbar;