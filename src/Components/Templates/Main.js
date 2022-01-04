import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import ErrorPage from '../Pages/ErrorPage';
import MapPage from '../Pages/MapPage';

const Container = styled.div`
width: 100%;
height: 100%;
height: calc(100vh - 60px);
background-color: #888888;
`

const Main = () => {


	return (
		<>
			<Container>
				<Routes>
					<Route path={"/StoreReview-Frontend/homepage", "/StoreReview-Frontend/"} element={<HomePage />} />
					<Route path="/StoreReview-Frontend/loginpage" element={<LoginPage />} />
					<Route path="/StoreReview-Frontend/mappage" element={<MapPage />} />
					<Route path="/*" element={<ErrorPage />} />
				</Routes>
			</Container>
		</>
	)
}

export default Main
