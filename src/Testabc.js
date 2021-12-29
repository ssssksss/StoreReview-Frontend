import React from 'react';
import ReactDOM from 'react-dom';
import NaverLogin from 'react-naver-login';

const NAVER_CLIENT_ID = 'u3Ph4ShKYsXliuKNI0GI';
const NAVER_CALLBACK_URL = 'http://127.0.0.1:3000/loginpage';

const Testabc = () => {
	return (
		<div>
			<NaverLogin
				clientId='u3Ph4ShKYsXliuKNI0GI'
				callbackUrl='http://127.0.0.1:3000'
				render={(props) => <div onClick={props.onClick}>Naver Login</div>}
				onSuccess={(naverUser) => console.log(naverUser)}
			//onFailure={() => console.error("")}
			/>
		</div>
	);
};

export default Testabc;

//import React, { useEffect } from 'react';
//import ReactDOM from 'react-dom';

//const Testabc = () => {

//	const { naver } = window;

//	function Naver() {
//		const naverLogin = new naver.LoginWithNaverId({
//			clientId: 'u3Ph4ShKYsXliuKNI0GI',
//			callbackUrl: 'http://127.0.0.1:3000',
//			isPopup: false,
//			loginButton: { color: "green", type: 1, height: 30 },
//			callbackHandle: true
//		})
//		naverLogin.init();
//	}

//	const Login = () => {
//		Naver();
//	}

//	useEffect(Login, []);

//	return (
//		<div>
//			<div onClick={Login} id="naverIdLogin"> 1</div>
//			<div onClick={Login} id="NaverIdLogin"> 2</div>
//			<div onClick={Login} id="naver_id_login"> 3</div>
//		</div >
//	);
//};

//export default Testabc;