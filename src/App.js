import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Main from './Components/Templates/Main';
import Header from './Components/Templates/Header';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
`

const App = () => {


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
