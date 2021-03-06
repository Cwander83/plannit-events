import React, { useState } from 'react';

import Container from '../container/Container.jsx';

const EventForm = () => {
	const [locationCheckbox, setLocationCheckbox] = useState(false);

	console.log('checkbox ' + locationCheckbox);

	const handleLocationCheckbox = () => setLocationCheckbox(!locationCheckbox);

	return (
		<Container padded>
			<div className="h-auto w-4/5 border-black border-2 mx-auto text-center flex flex-col">
				{/* type of event */}
				<div className="">
					<label htmlFor="type-of-event">
						type of event
						<input
							required
							type="text"
							name="type-of-event"
							id="type-of-event"
						/>
					</label>
				</div>
				{/* number of guests */}
				<div className="">
					<label htmlFor="number-of-guests">
						# of guests
						<input
							required
							type="text"
							name="number-of-guests"
							id="number-of-guests"
						/>
					</label>
				</div>
				{/* location of event checkbox */}
				<div className="">
					<label htmlFor="event-location-check">
						Do you have somewhere to host event
						<input
							type="checkbox"
							checked={locationCheckbox}
							name="event-location-check"
							id="event-location-check"
							onChange={handleLocationCheckbox}
						/>
					</label>
				</div>
				{/* location of event */}
				<div className={`${locationCheckbox ? ' ' : 'hidden'}`}>
					<label htmlFor="event-location">
						where is event hosted at
						<textarea
							required
							type="text"
							name="event-location"
							id="event-location"
							rows="2"
						></textarea>
					</label>
				</div>
				{/* budget of event */}
				<div>
					<label
						htmlFor="price"
						className="block text-sm font-medium text-gray-700 w-3/6"
					>
						budget
						<div className="mt-1 relative rounded-md shadow-sm">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<span className="text-gray-500 sm:text-sm">$</span>
							</div>
							<input
								type="text"
								name="price"
								id="price"
								className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
								placeholder="0.00"
							/>
							<div className="absolute inset-y-0 right-0 flex items-center"></div>
						</div>
					</label>
				</div>
				{/* date of event */}

				<div className="relative w-1/2 focus-within:text-gray-600 text-gray-400">
					<label htmlFor="date">
						Date:
						<input
							required
							type="text"
							id="date"
							name="date"
							className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
							placeholder="25/02/2020"
						/>
						<div className="absolute left-3 top-7">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								></path>
							</svg>
						</div>
					</label>
				</div>

				{/* time of event */}
				<div className="relative w-1/2 focus-within:text-gray-600 text-gray-400">
					<label htmlFor="time">
						time:
						<input
							required
							type="text"
							id="time"
							name="time"
							className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
							placeholder="01:00PM"
						/>
						<div className="absolute left-3 top-7">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								></path>
							</svg>
						</div>
					</label>
				</div>
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
			</div>
		</Container>
	);
};

export default EventForm;
