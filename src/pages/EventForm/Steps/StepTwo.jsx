import React from 'react';

import Container from '../../../container/Container.jsx';

const styles = {
	divStyle: 'px-3 py-4 w-full',
	labelStyle: 'block text-md md:text-xl font-medium text-gray-darkest',

	inputStyle:
		'mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full  text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0',
	checkboxStyle:
		'w-6 h-6 mr-3 text-primary focus:border-primary focus:ring-0 focus:border-3 focus:text-xl text-center text-xl tracking-wider',
	checkboxLabelStyle:
		'block text-md md:text-xl font-medium text-gray-darkest mx-auto w-full md:w-1/2',
};

const StepTwo = ({ prevStep, nextStep }) => {
	return (
		<Container padded>
			<div className="h-auto w-11/12 lg:w-10/12 p-7 shadow-md border-black border-2 mx-auto text-center flex flex-col">
				<div className="flex flex-col justify-center">
					<label htmlFor="services-entertainment" className="">
						<input
							type="checkbox"
							name="services-entertainment"
							id="services-entertainment"
						/>{' '}
						Entertainment
					</label>
					<label htmlFor="services-event-rentals" className="">
						<input
							type="checkbox"
							name="services-event-rentals"
							id="services-event-rentals"
						/>{' '}
						Event Rentals
					</label>
					<label htmlFor="services-floral-arrangements" className="">
						<input
							type="checkbox"
							name="services-floral-arrangements"
							id="services-floral-arrangements"
						/>{' '}
						Floral Arrangements
					</label>
					<label htmlFor="services-food" className="">
						<input type="checkbox" name="services-food" id="services-food" />{' '}
						Food
					</label>
					<label htmlFor="services-desserts" className="">
						<input
							type="checkbox"
							name="services-desserts"
							id="services-desserts"
						/>
						Gourmet Desserts
					</label>
					<label htmlFor="services-photographer" className="">
						<input
							type="checkbox"
							name="services-photographer"
							id="services-photographer"
						/>
						Photography
					</label>
					<label htmlFor="services-videographer" className="">
						<input
							type="checkbox"
							name="services-videographer"
							id="services-videographer"
						/>
						Videographer
					</label>
					<label htmlFor="services-theme" className="">
						<input type="checkbox" name="services-theme" id="services-theme" />
						Theme/Decorations
					</label>
				</div>

				<div className="flex justify-end">
					<button
						onClick={prevStep}
						className="mx-2 px-5 py-3 text-gray-lightest bg-primary rounded-sm shadow"
					>
						Back
					</button>
					<button
						onClick={nextStep}
						className="mx-2 px-5 py-3 text-gray-lightest bg-primary rounded-sm shadow"
					>
						Next Services
					</button>
				</div>
			</div>
		</Container>
	);
};

export default StepTwo;
