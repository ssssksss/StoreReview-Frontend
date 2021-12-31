import React from 'react';
import styled from 'styled-components';
import Navbar from '../Oraganisms/Navbar';

const Header = () => {

	const HeaderContainer = styled.div`
	width: 100%;
	height: 60px;
	background-color: #aeaeae;
`;
	return (
		<>
			<HeaderContainer>
				<Navbar />
			</HeaderContainer>
		</>
	)
}

export default Header
