import React from 'react';
import ReactDOM from 'react-dom';

import Aos from 'aos';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

// components
import Layout from './layout/Layout.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

// styles
import './styles/tailwind.css';
import 'aos/dist/aos.css';
// routes
import routes from './routes/routes';

// context api
import FormContextProvider from './context/formContext.js';

function Index() {
	Aos.init({
		easing: 'ease-in-out',
	});

	React.useEffect(() => {
		Aos.refresh();
	}, []);
	return (
		<FormContextProvider>
			<Router>
				<Layout>
					<Header />
					<Switch>{routes}</Switch>
					<Footer />
				</Layout>
			</Router>
		</FormContextProvider>
	);
}

ReactDOM.render(<Index />, document.getElementById('root'));
