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

	const handlePartnerForm = (e) => {
		let value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;

		let name = e.target.name;
		setPartnerForm({ ...partnerForm, [name]: value });
	};

	const partnerFormSubmit = ()=>{
		event.preventDefault()
	}

	console.log(`partner From : ${JSON.stringify(partnerForm, null, 2)}`);
	return (
		<FormContext.Provider
			value={{
				partnerForm,
				handlePartnerForm,
			}}
		>
			{props.children}
		</FormContext.Provider>
	);
};

export default FormContextProvider;

// consumer
export const StateConsumer = FormContext.Consumer;
