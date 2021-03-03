import React, { useState } from 'react';

import ComingSoon from '../../components/ComingSoon.jsx';
import StepOne from './Steps/StepOne.jsx';
import StepTwo from './Steps/StepTwo.jsx';

export default function EventForm() {
	const [step, setStep] = useState(1);

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	// switch (step) {
	// 	case 1:
	// 		return <ComingSoon />;

	// 	default:
	// 		throw new Error('Unknown Step');
	// }
	switch (step) {
		case 1:
			return <StepOne nextStep={nextStep} />;
		case 2:
			return <StepTwo nextStep={nextStep} prevStep={prevStep} />;

		default:
			throw new Error('Unknown Step');
	}
}
