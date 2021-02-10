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

const StepOne = ({ nextStep }) => {
	const [locationCheckbox, setLocationCheckbox] = React.useState(false);

	console.log('checkbox ' + locationCheckbox);

	const handleLocationCheckbox = () => setLocationCheckbox(!locationCheckbox);

	return (
		<Container padded>
			{/* type of event */}
			<div className={styles.divStyle}>
				<label className={styles.labelStyle} htmlFor="type-of-event">
					Type of Event
					<input
						className={styles.inputStyle}
						required
						type="text"
						name="type-of-event"
						id="type-of-event"
					/>
				</label>
			</div>
			{/* number of guests */}
			<div className={styles.divStyle}>
				<label className={styles.labelStyle} htmlFor="number-of-guests">
					Number of Guests
					<input
						className={styles.inputStyle}
						required
						type="text"
						name="number-of-guests"
						id="number-of-guests"
					/>
				</label>
			</div>
			{/* location of event checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="event-location-check"
					className={styles.checkboxLabelStyle}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={locationCheckbox}
						name="event-location-check"
						id="event-location-check"
						onChange={handleLocationCheckbox}
					/>
					Do You Have Somewhere to Host Event?
				</label>
			</div>
			{/* location of event */}
			<div
				className={`${locationCheckbox ? 'opacity-100' : 'opacity-0 h-0'} ${
					styles.divStyle
				} transition-all duration-4500 ease-in-out`}
			>
				<label className={styles.labelStyle} htmlFor="event-location">
					Where is Event Hosted At?
					<textarea
						className={styles.inputStyle}
						required
						type="text"
						name="event-location"
						id="event-location"
						rows="2"
					></textarea>
				</label>
			</div>
			{/* budget of event */}
			<div className={styles.divStyle}>
				<label htmlFor="price" className={styles.labelStyle}>
					Event Budget
					<div className="mt-1 relative rounded-md shadow-sm">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="text-gray-dark sm:text-sm">$</span>
						</div>
						<input
							type="text"
							name="price"
							id="price"
							className={styles.inputStyle}
							placeholder="0.00"
						/>
					</div>
				</label>
			</div>
			{/* date of event */}

			<div className={`${styles.divStyle} relative`}>
				<label htmlFor="date" className={styles.labelStyle}>
					Event Date
					<div className="mt-1 relative rounded-md shadow-sm">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="text-gray-dark sm:text-sm">
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
							</span>
						</div>
						<input
							required
							type="text"
							id="date"
							name="date"
							className={styles.inputStyle}
							placeholder="02/20/2020"
						/>
					</div>
				</label>
			</div>

			{/* time of event */}
			<div className={styles.divStyle}>
				<label htmlFor="time" className={styles.labelStyle}>
					Start Time
					<div className="mt-1 relative rounded-md shadow-sm">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="text-gray-dark sm:text-sm">
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
							</span>
						</div>
						<input
							required
							type="text"
							id="time"
							name="time"
							className={styles.inputStyle}
							placeholder="01:00PM"
						/>
					</div>
				</label>
			</div>

			<div className="pt-10 flex justify-center sm:justify-end">
				<button
					onClick={nextStep}
					className="mx-2 px-5 py-3 text-gray-lightest bg-primary rounded-sm shadow"
				>
					Next Services
				</button>
			</div>
		</Container>
	);
};

export default StepOne;
