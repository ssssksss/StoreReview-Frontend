import React, { useEffect } from 'react';
import naverimg from '../../Assets/Images/naverapi_100x100.svg';
import styled from 'styled-components';

const NaverLoginApi = () => {

	const Img = styled.img`
	width: 40px;
	height: 40px;
	margin-bottom: 6px;
	`;

	const LoginButton = styled.a`
	display: flex;
	flex-flow: wrap column;
	align-items: center;
	`;

	return (
		<>
			<LoginButton>
				<Img src={naverimg} />
				<small> 네이버 간편로그인 </small>
			</LoginButton>
		</>
	);
};

export default NaverLoginApi;

//const { naver } = window;

//export default function NaverLoginApi() {

//	const Login = () => {
//		Naver();
//		//UserProfile();
//	}

//	useEffect(Login, []);

//	const Naver = () => {
//		const naverLogin = new naver.LoginWithNaverId({
//			clientId: 'u3Ph4ShKYsXliuKNI0GI',
//			callbackUrl: "http://localhost:3000",
//			isPopup: true,
//			loginButton: { color: "green", type: 1, height: 30 },
//			callbackHandle: true
//		});
//		naverLogin.init();
//	}

	//const UserProfile = () => {
	//	window.location.href.includes('access_token') && GetUser();
	//	function GetUser() {
	//		const location = window.location.href.split('=')[1];
	//		const token = location.split('&')[0];
	//		console.log("token: ", token);
	//		fetch(`${API}/account/sign-in`, {
	//			method: "GET",
	//			headers: {
	//				"Content-type": "application/json",
	//				"Authorization": token
	//			},
	//		})
	//			.then(res => res.json())
	//			.then(res => {
	//				localStorage.setItem("access_token", res.token);
	//				setUserData({
	//					nickname: res.nickname,
	//					image: res.image
	//				})
	//			})
	//			.catch(err => console.log("err : ", err));
	//	}
	//};

//	return (
//		<>
//			<button>
//				<image src={naverimg} />
//				<small> 네이버 간편로그인 </small>
//			</button>
//		</>
//	)
//};
