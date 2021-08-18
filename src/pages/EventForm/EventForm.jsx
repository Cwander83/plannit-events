import React, { useState } from 'react';

//import ComingSoon from '../../components/ComingSoon.jsx';
import StepOne from '../../components/Steps/StepOne.jsx';
import StepTwo from '../../components/Steps/StepTwo.jsx';
import StepThree from '../../components/Steps/StepThree.jsx';

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
		case 3:
			return <StepThree nextStep={nextStep} prevStep={prevStep} />;

		default:
			throw new Error('Unknown Step');
	}
}
