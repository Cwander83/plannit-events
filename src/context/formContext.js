import React, { useState } from 'react';

// store default value
export const FormContext = React.createContext();

// Provider
const FormContextProvider = (props) => {
	const [partnerForm, setPartnerForm] = useState({
		name: '',
		business_name: '',
		email: '',
		phone: '',
		website: '',
		city: '',
		service: '',
		message: '',
		agreement: false,
		errors: [],
	});

	const [eventForm, setEventForm] = useState({
		typeEvent: '',
		numberGuests: '',
		eventLocation: '',
		price: '',
		date: '',
		time: '',
		djMusicGenre: '',
		djExtras: '',
		djTime: '',
		liveBandGenre: '',
		liveBandSize: '',
		liveBandTime: '',
		clownTime: '',

		magicShow: false,
		jugglers: false,
		facePainting: false,
		balloonTwisting: false,
		puppetShow: false,
		idealComedian: '',
		comedianTime: '',
		entertainmentOther: ''
	});

	const [checkBoxes, setCheckBoxes] = useState({
		dj: false,
		liveBand: false,
		clowns: false,
		comedian: false,
		other: false,
	});

	const checkboxHandler = (e) => {
		let value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;

		setCheckBoxes({ ...checkBoxes, [e.target.name]: value });
	};
	// ** do you want to add a stepper icons colors at top ???
	// const [icons, setIcons] = useState({
	// 	eventDetails: false,
	// 	services: false,
	// })

	const handlePartnerForm = (e) => {
		let value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;

		let name = e.target.name;
		setPartnerForm({ ...partnerForm, [name]: value });
	};

	const handleEventForm = (e) => {
		let value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;

		let name = e.target.name;
		console.log('name: ' + name);
		setEventForm({ ...eventForm, [name]: value });
	};

	const partnerFormSubmit = () => {
		event.preventDefault();
	};

	console.log(`Event Form: ${JSON.stringify(eventForm, null, 2)}`);
	return (
		<FormContext.Provider
			value={{
				partnerForm,
				handlePartnerForm,
				eventForm,
				handleEventForm,
				checkBoxes,
				checkboxHandler,
			}}
		>
			{props.children}
		</FormContext.Provider>
	);
};

export default FormContextProvider;

// consumer
export const StateConsumer = FormContext.Consumer;
