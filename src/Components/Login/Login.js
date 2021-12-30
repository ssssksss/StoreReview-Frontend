import React from 'react';
import LoginForm from './LoginForm';
import LoginApis from './LoginApis';
import LoginLogo from './LoginLogo';
import LoginOption from './LoginOption';

const Login = () => {

	return (
		<div>
			<LoginLogo />
			<LoginForm />
			<LoginApis />
			<LoginOption />
		</div>
	);
};

export default Login;