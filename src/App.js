import React from 'react';
import Header from './Containers/Header/Header';
import Main from './Containers/Main/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import Testabc from './Testabc';
import styled from 'styled-components';

const App = () => {

	const Iframe = styled.iframe`
		width: 800px;
		height: 800px;
	`;

	return (
		<>
			<BrowserRouter>
				<div className="app">
					<Header />
					<Main />
				</div>
			</BrowserRouter>
			{/*<Testabc />*/}
		</>
	)
}

export default App;
