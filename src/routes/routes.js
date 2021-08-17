import React from 'react';
import { Redirect, Route } from 'react-router';

// pages
import Home from '../pages/Home/Home.jsx';
import EventForm from '../pages/EventForm/EventForm.jsx';
import PartnerForm from '../pages/PartnerForm.jsx';

const routes = (
	<>
		
		<Route exact path="/" component={Home} />
		<Route path="/event-builder" component={EventForm} />
		<Route path="/partner-form" component={PartnerForm} />
	</>
);

export default routes;
