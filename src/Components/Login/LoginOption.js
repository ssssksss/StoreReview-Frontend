import React from 'react';
import styled from 'styled-components';

const LoginOption = () => {

	const Container = styled.div`
		height: 40px;
		display: flex;
		padding: 0px; 10px;
		justify-content: space-around;
		align-items: center;
	`;

	return (
		<Container>
			<a href="#"> 아이디 찾기 </a>
			<a href="#"> 비밀번호 찾기 </a>
			<a href="#"> 회원가입 </a>
		</Container>
	);
};

export default LoginOption;