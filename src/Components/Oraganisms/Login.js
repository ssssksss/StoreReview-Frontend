import React from 'react';
import LoginLogo from '../Molecules/LoginLogo';
import LoginForm from '../Molecules/LoginForm';
import LoginApis from '../Molecules/LoginApis';
import LoginOption from '../Molecules/LoginOption';

const Login = () => {

	return (
		<>
			<LoginLogo />
			<LoginForm />
			<LoginApis />
			<LoginOption />
		</>
	);
};

export default Login;