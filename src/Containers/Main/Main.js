import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/LoginPage';

const Main = () => {

	return (
		<>
			<div className="main-container">
				<Routes>
					<Route exact path="/homepage" element={<HomePage />} />
					<Route exact path="/loginpage" element={<LoginPage />} />
				</Routes>
			</div>
		</>
	)
}

export default Main
