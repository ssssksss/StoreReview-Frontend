import React from 'react';
import LoginForm from './LoginForm';
import LoginApiButton from './LoginApiButton';
import LoginLogo from './LoginLogo';
import LoginOption from './LoginOption';


const Login = () => {

	return (
		<div>
			<LoginLogo />
			<LoginForm />
			<LoginApiButton />
			<LoginOption />
		</div>
	);
};

export default Login;