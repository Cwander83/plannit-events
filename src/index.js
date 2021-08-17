import React from 'react';
import ReactDOM from 'react-dom';

import Aos from 'aos';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

// components
import Layout from './layout/Layout.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import MobileMenu from './layout/MobileMenu.jsx';
//import PartnerBanner from './components/PartnerBanner.jsx';

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
				{/* <Router basename={"/plannit-events/"}>
				 */}
				<Layout>
					<Header />
					<MobileMenu />
					<Switch>{routes}</Switch>
					{/* <PartnerBanner /> */}
					<Footer />
				</Layout>
			</Router>
		</FormContextProvider>
	);
}

ReactDOM.render(<Index />, document.getElementById('root'));
