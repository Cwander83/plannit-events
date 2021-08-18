import React, { useContext, useState } from 'react';

// components
import Container from '../../container/Container.jsx';
import EventFormHeader from '../EventFormHeader.jsx';
import DJ from '../Sections/DJ.jsx';
import LiveBand from '../Sections/LiveBand.jsx';
import Clowns from '../Sections/Clowns.jsx';
import Comedian from '../Sections/Comedian.jsx';

// context
import { FormContext } from '../../context/formContext.js';

// external stylesheet
import { styles } from '../../styles/styles.js';
import Other from '../Sections/Other.jsx';

const StepTwo = ({ prevStep, nextStep }) => {
	// connect to context if they check opens questions on that entertainment
	let { checkBoxes, checkboxHandler } = useContext(FormContext);

	return (
		<Container padded>
			<EventFormHeader title="Entertainment" />

			{/* dj checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="dj"
					className={`${checkBoxes.dj ? 'bg-gray-light' : ''} ${
						styles.checkboxLabelStyle
					} text-left`}
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
			{/* dj questions */}
			<DJ open={checkBoxes.dj} />

			{/* Live Band checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="liveBand"
					className={`${checkBoxes.liveBand ? 'bg-gray-light' : ''} ${
						styles.checkboxLabelStyle
					} text-left`}
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

			{/* live band questions */}
			<LiveBand open={checkBoxes.liveBand} />
			{/* clowns checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="clowns"
					className={`${checkBoxes.clowns ? 'bg-gray-light' : ''} ${
						styles.checkboxLabelStyle
					} text-left`}
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

			<Clowns open={checkBoxes.clowns} />
			{/* comedian checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="comedian"
					className={`${checkBoxes.comedian ? 'bg-gray-light' : ''} ${
						styles.checkboxLabelStyle
					} text-left`}
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
			<Comedian open={checkBoxes.comedian} />
			{/* other checkbox */}
			<div className={styles.divStyle}>
				<label
					htmlFor="other"
					className={`${checkBoxes.other ? 'bg-gray-light' : ''} ${
						styles.checkboxLabelStyle
					} text-left`}
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

			<Other open={checkBoxes.other} />

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
