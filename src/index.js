import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

// components
import Layout from './layout/Layout.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

// styles
import './styles/tailwind.css';

// routes
import routes from './routes/routes';

// context api
import StateContextProvider from './store/context.js';

function Index() {
	return (
		<StateContextProvider>
			<Router>
				<Layout>
					<Header />
					<Switch>{routes}</Switch>
					<Footer />
				</Layout>
			</Router>
		</StateContextProvider>
	);
}

ReactDOM.render(<Index />, document.getElementById('root'));
