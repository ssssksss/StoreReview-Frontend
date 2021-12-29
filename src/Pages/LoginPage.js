import React from 'react';
import styled from 'styled-components';
import Login from '../Components/Login/Login';

const LoginPage = () => {

	const LoginContainer = styled.div`
		margin: auto;
		width: 400px;
		height: 70vh;
		background-color: white;
		margin-top: 40px;
	`;

	return (
		<>
			<LoginContainer>
				<Login />
			</LoginContainer>
		</>
	)
}

export default LoginPage
