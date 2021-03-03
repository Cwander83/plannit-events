import React, { useContext } from 'react';
import EventFormHeader from '../../../components/EventFormHeader.jsx';

import Container from '../../../container/Container.jsx';

import { FormContext } from '../../../context/formContext.js';

import { styles } from '../../../styles/styles.js';

const StepTwo = ({ prevStep, nextStep }) => {
	const { service, handleServices } = useContext(FormContext);
	return (
		<Container padded>
			<EventFormHeader title="Services Required" />
			<div className="flex flex-col justify-center text-left my-3.5">
				<div className={styles.divStyle}>
					<label htmlFor="entertainment" className={styles.checkboxLabelStyle}>
						<input
							className={styles.checkboxStyle}
							type="checkbox"
							name="entertainment"
							id="entertainment"
							onChange={(e) => handleServices(e)}
						/>
						Entertainment
					</label>
				</div>
				<div className={styles.divStyle}>
					<label htmlFor="rentals" className={styles.checkboxLabelStyle}>
						<input
							className={styles.checkboxStyle}
							type="checkbox"
							name="rentals"
							id="rentals"
							onChange={(e) => handleServices(e)}
						/>
						Event Rentals
					</label>
				</div>
				<div className={styles.divStyle}>
					<label
						htmlFor="floralArrangements"
						className={styles.checkboxLabelStyle}
					>
						<input
							className={styles.checkboxStyle}
							type="checkbox"
							name="floralArrangements"
							id="floralArrangements"
							onChange={(e) => handleServices(e)}
						/>
						Floral Arrangements
					</label>
				</div>
				<div className={styles.divStyle}>
					<label htmlFor="food" className={styles.checkboxLabelStyle}>
						<input
							className={styles.checkboxStyle}
							type="checkbox"
							name="food"
							id="food"
							onChange={(e) => handleServices(e)}
						/>
						Food
					</label>
				</div>
				<div className={styles.divStyle}>
					<label htmlFor="desserts" className={styles.checkboxLabelStyle}>
						<input
							className={styles.checkboxStyle}
							type="checkbox"
							name="desserts"
							id="desserts"
							onChange={(e) => handleServices(e)}
						/>
						Gourmet Desserts
					</label>
				</div>
				<div className={styles.divStyle}>
					<label htmlFor="photographer" className={styles.checkboxLabelStyle}>
						<input
							className={styles.checkboxStyle}
							type="checkbox"
							name="photographer"
							id="photographer"
							onChange={(e) => handleServices(e)}
						/>
						Photography
					</label>
				</div>
				<div className={styles.divStyle}>
					<label htmlFor="videographer" className={styles.checkboxLabelStyle}>
						<input
							className={styles.checkboxStyle}
							type="checkbox"
							name="videographer"
							id="videographer"
							onChange={(e) => handleServices(e)}
						/>
						Videographer
					</label>
				</div>
				<div className={styles.divStyle}>
					<label htmlFor="theme" className={styles.checkboxLabelStyle}>
						<input
							className={styles.checkboxStyle}
							type="checkbox"
							name="theme"
							id="theme"
							onChange={(e) => handleServices(e)}
						/>
						Theme/Decorations
					</label>
				</div>
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
		</Container>
	);
};

export default StepTwo;
