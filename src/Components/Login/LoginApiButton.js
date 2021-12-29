import React, { useState } from 'react';
import styled from 'styled-components';
//import Modal from 'react-modal';
import naverimg from '../../Assets/Images/naverapi_100x100.svg';
import kakaoimg from '../../Assets/Images/kakaoapi_100x100.svg';
import googleimg from '../../Assets/Images/googleapi_100x100.svg';
import PortalDOM from '../Modal/PortalDOM';
import ModalScreen from '../Modal/ModalScreen';

const LoginApiButton = () => {

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
			background-color: red;
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
			{/*href="https://nid.naver.com/oauth2.0/authorize?response_type=code&
			client_id=u3Ph4ShKYsXliuKNI0GI&state=STATE_STRING&redirect_uri=http://localhost:3000/loginpage"
				target="_blank" rel="noopener noreferrer"*/}
			<LoginButton onClick={() => setModalOpen(true)}>
				<Img src={naverimg} />
				<small> 네이버 간편로그인 </small>
			</LoginButton>
			<LoginButton onClick={() => setModalOpen(true)}>
				<Img src={kakaoimg} />
				<small> 카카오 간편로그인 </small>
			</LoginButton>
			<LoginButton onClick={() => setModalOpen(true)}>
				<Img src={googleimg} />
				<small> 구글 간편로그인 </small>
			</LoginButton>

			<button onClick={() => setModalOpen(true)}> 버튼 </button>
			{modalOpen &&
				<PortalDOM>
					<ModalScreen onClose={handleCloseModal}>
					</ModalScreen>;
				</PortalDOM>
			}


		</Container>
	);
};

export default LoginApiButton;