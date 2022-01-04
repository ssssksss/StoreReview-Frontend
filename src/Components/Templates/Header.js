import React from 'react';
import styled from 'styled-components';
import Navbar from '../Oraganisms/Navbar';

const HeaderContainer = styled.div`
width: 100%;
height: 60px;
background-color: #aeaeae;
`

const Header = () => {


	return (
		<>
			<HeaderContainer>
				<Navbar />
			</HeaderContainer>
		</>
	)
}

export default Header
