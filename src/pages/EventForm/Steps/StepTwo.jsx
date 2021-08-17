import React, { useContext } from 'react';

// components
import Container from '../../../container/Container.jsx';
import EventFormHeader from '../../../components/EventFormHeader.jsx';
import DJ from '../Sections/DJ.jsx';

// context
import { FormContext } from '../../../context/formContext.js';

// external stylesheet
import { styles } from '../../../styles/styles.js';

const StepTwo = ({ prevStep, nextStep }) => {
	let { checkBoxes, checkboxHandler } = useContext(FormContext);

	return (
		<Container padded>
			<EventFormHeader title="Entertainment" />

			{/* dj checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="dj"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={checkBoxes.dj}
						name="dj"
						id="dj"
						onChange={(e) => checkboxHandler(e)}
					/>
					Live DJ
				</label>
			</div>
			<DJ open={checkBoxes.dj} />

			{/* Live Band checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="liveBand"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={checkBoxes.liveBand}
						name="liveBand"
						id="liveBand"
						onChange={(e) => checkboxHandler(e)}
					/>
					Live Band
				</label>
			</div>
			{/* clowns checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="clowns"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={checkBoxes.clowns}
						name="clowns"
						id="clowns"
						onChange={(e) => checkboxHandler(e)}
					/>
					Clowns
				</label>
			</div>
			{/* comedian checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="comedian"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={checkBoxes.comedian}
						name="comedian"
						id="comedian"
						onChange={(e) => checkboxHandler(e)}
					/>
					Comedian
				</label>
			</div>
			{/* other checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="other"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={checkBoxes.other}
						name="other"
						id="other"
						onChange={(e) => checkboxHandler(e)}
					/>
					Other
				</label>
			</div>

			<div className="flex justify-center sm:justify-end">
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
					Next
				</button>
			</div>
		</Container>
	);
};

export default StepTwo;
