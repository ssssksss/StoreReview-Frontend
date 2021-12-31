import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {

	const Button = styled.button`
		width: 60px;
		height: 40px;
	`;

	return (
		<>
			<nav className="navbar">
				<Link to="/StoreReview-Frontend/homepage"> <Button> 홈 </Button> </Link>
				<Link to="/StoreReview-Frontend/loginpage"> <Button> 로그인 </Button> </Link>
				<Link to="/StoreReview-Frontend/mappage"> <Button> 지도 </Button> </Link>
			</nav>
		</>
	)

}

export default Navbar;