import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const FormContainer = styled.form`
padding: 10px 20px 0px;
display: flex;
flex-flow: wrap column;
`;

const InputStyle = styled.input`
margin: 0px auto 10px;
width: 100%;
height: 40px;
padding-left: 10px;
border-radius: 4px;
background-color: #dedede;
`;

const SubmitButton = styled.button`
margin: 0px auto 10px;
width: 100%;
height: 40px;
border-radius: 4px;
color: white;
font-size: 16px;
font-weight: 800;
background-color: #009579;
`;

const LoginForm = () => {

	function testAxios() {
		axios(
			{
				url: '/test',
				method: 'get',
				data: {
					email: 'test@naver.com', aaa: 'aaa222'
				},
				baseURL: 'http://localhost:8080',
				//withCredentials: true,
			}
		).then(function (response) {
			console.log(response.data)
		});
	}

	return (
		<FormContainer method='GET' action="http://localhost:8080/test">
			<InputStyle type="text" placeholder='로그인 입력' />
			<InputStyle type="password" placeholder='비밀번호 입력' />
			<SubmitButton type="submit"> 로그인 </SubmitButton>
			<hr size="3" color='#aeaeae' />
			<button onClick={() => { testAxios() }}> 테스트 버튼 </button>
		</FormContainer >
	);
};

export default LoginForm;