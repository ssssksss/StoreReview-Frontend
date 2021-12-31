import React from 'react';
import styled from 'styled-components';
import Login from '../Oraganisms/Login'

const LoginPage = () => {

	const Container = styled.div`
		margin: auto;
		width: 400px;
		height: 70vh;
		background-color: white;
		margin-top: 40px;
	`;

	return (
		<>
			<Container>
				<Login />
			</Container>
		</>
	)
}

export default LoginPage
