import React, { useEffect } from 'react';
import NaverLogin from 'react-naver-login';
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
			<NaverLogin
				//네이버 로그인 어플리케이션에 있는 ID와 URL을 적어준다.
				clientId='u3Ph4ShKYsXliuKNI0GI'
				callbackUrl='http://127.0.0.1:3000'
				render={(props) =>
					<LoginButton onClick={props.onClick}>
						<Img src={naverimg} />
						<small> 네이버 간편로그인 </small>
					</LoginButton>}
				onSuccess={(naverUser) =>
					console.log(naverUser),
					window.close()
				}
				onFailure={() => console.error("")}
			>
			</NaverLogin>
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
