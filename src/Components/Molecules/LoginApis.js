import React, { useState } from 'react';
import styled from 'styled-components';
import kakaoimg from '../../Assets/Images/kakaoapi_100x100.svg';
import googleimg from '../../Assets/Images/googleapi_100x100.svg';
//import PortalDOM from '../../Oraganisms/Modal/PortalDOM';
//import ModalScreen from '../../Oraganisms/Modal/ModalScreen';
import NaverLoginApi from '../../Api/NaverLogin/NaverLoginApi';
import { KAKAO_AUTH_URL } from "../../Api/KakaoLogin/KakaoLoginUrl";


const LoginApis = () => {

	const Container = styled.div`
		height: 80px;
		display: flex;
		padding: 0px; 10px;
		justify-content: space-around;
		align-items: center;
	`;

	const LoginButton = styled.a`
			display: flex;
			flex-flow: wrap column;
			align-items: center;
	`;

	const Img = styled.img`
		width: 40px;
		height: 40px;
		margin-bottom: 6px;
	`;

	const [modalOpen, setModalOpen] = useState(false);

	const handleCloseModal = () => {
		setModalOpen(false);
	};


	return (
		<Container>

			{/*<NaverLoginApi onClick={() => setModalOpen(true)}> </NaverLoginApi>*/}

			<NaverLoginApi />

			<LoginButton href={KAKAO_AUTH_URL} >
				<Img src={kakaoimg} ></Img>
				<span>카카오계정 로그인</span>
			</LoginButton>
			<LoginButton onClick={() => setModalOpen(true)}>
				<Img src={googleimg} />
				<small> 구글 간편로그인 </small>
			</LoginButton>
			{/*{modalOpen &&
				<PortalDOM>
					<ModalScreen onClose={handleCloseModal}>

					</ModalScreen>
				</PortalDOM>
			}*/}

		</Container>
	);
};

export default LoginApis;