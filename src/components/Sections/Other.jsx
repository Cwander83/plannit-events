import React, { useContext } from 'react';

// context
import { FormContext } from '../../context/formContext.js';

// external stylesheet
import { styles } from '../../styles/styles.js';

const Other = ({ open }) => {
	let { handleEventForm, eventForm } = useContext(FormContext);

	return (
		<div
			className={`${open ? 'opacity-100 px-3 py-2' : 'opacity-0 h-0 hidden'} ${
				styles.divCheckboxStyle
			} transition-all duration-4500 ease-in-out`}
		>
			<label className={styles.labelStyle} htmlFor="entertainmentOther">
				What do you have in Mind?
				<textarea
					className={styles.inputStyle}
					type="text"
					name="entertainmentOther"
					value={eventForm.entertainmentOther}
					placeholder=""
					id="entertainmentOther"
					rows="2"
					onChange={(e) => handleEventForm(e)}
				></textarea>
			</label>
		</div>
	);
};

export default Other;
       