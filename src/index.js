import React from 'react';
import ReactDOM from 'react-dom';

// components
import Layout from './layout/Layout.jsx';
import Header from './layout/Header.jsx';

// styles
import './styles/tailwind.css';

function Index() {
	return (
		<Layout>
			<Header />
		</Layout>
	);
}

ReactDOM.render(<Index />, document.getElementById('root'));
