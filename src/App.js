import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Main from './Components/Templates/Main';
import Header from './Components/Templates/Header';

const App = () => {

	const Container = styled.div`
		display: flex;
		flex-wrap: wrap;
	`;

	return (
		<>
			<BrowserRouter>
				<Container>
					<Header />
					<Main />
				</Container>
			</BrowserRouter>
		</>
	)
}

export default App;
