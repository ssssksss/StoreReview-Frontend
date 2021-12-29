import ReactDOM from 'react-dom';

const PortalDOM = ({ children }) => {
	//const el = document.getElementById('portaldom');
	const el = document.body;
	return ReactDOM.createPortal(children, el);
};

export default PortalDOM;