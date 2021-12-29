import React, { useEffect } from 'react';
import styled from 'styled-components';
import Testabc from '../../Testabc';

const ModalScreen = ({ onClose }) => {

	const Container = styled.div`
			width: 90vw;
			position: fixed;
			height: 90vh;
			margin: auto;
			background-color: red;
			left: 0;
			top: 0;
			background: rgba(0, 0, 0, 0.25);
			display: flex;
			align-items: center;
			justify-content: center;
		`;

	const Content = styled.div`
		width: 300px;
		height: 300px;
		background-color: white;
	`;

	const Embed = styled.embed`
		width: 500px;
		height: 500px;
	`;

	const Iframe = styled.iframe`
		width: 500px;
		height: 500px;
	`;

	return (
		<Container>
			<Content>
				<Testabc />
				<button onClick={onClose}> 종료 </button>
			</Content>
		</Container>
	);
};

export default ModalScreen;