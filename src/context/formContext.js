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
	});
	const [services, setServices] = useState({
		entertainment: false,
		rentals: false,
		floralArrangements: false,
		food: false,
		desserts: false,
		photographer: false,
		videographer: false,
		theme: false,
	});
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
	const handleServices = (e) => {
		let value = e.target.value;

		let name = e.target.name;
		setServices({ ...partnerForm, [name]: value });
	};
	const handleEventForm = (e) => {
		let value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;

		let name = e.target.name;
		setEventForm({ ...partnerForm, [name]: value });
	};

	const partnerFormSubmit = () => {
		event.preventDefault();
	};

	
	// console.log(object);

	console.log(`partner From : ${JSON.stringify(services, null, 2)}`);
	return (
		<FormContext.Provider
			value={{
				partnerForm,
				eventForm,
				handleEventForm,
				services,
				handleServices,
				
			}}
		>
			{props.children}
		</FormContext.Provider>
	);
};

export default FormContextProvider;

// consumer
export const StateConsumer = FormContext.Consumer;
