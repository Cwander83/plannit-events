import React, { useContext } from 'react';

// context
import { FormContext } from '../../context/formContext.js';

// external stylesheet
import { styles } from '../../styles/styles.js';

const Comedian = ({ open }) => {
	let { handleEventForm, eventForm } = useContext(FormContext);

	return (
		<div
			className={`${open ? 'opacity-100 px-3 py-2' : 'opacity-0 h-0 hidden'} ${
				styles.divCheckboxStyle
			} transition-all duration-4500 ease-in-out`}
		>
			<label className={styles.labelStyle} htmlFor="idealComedian">
				What is your preference of Comedian?
				<input
					className={styles.inputStyle}
					type="text"
					name="idealComedian"
					value={eventForm.idealComedian}
					placeholder="PG, PG-13, Adult.."
					id="idealComedian"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>

			<label className={styles.labelStyle} htmlFor="comedianTime">
				How long do you need the Comedian for?
				<input
					className={styles.inputStyle}
					type="text"
					name="comedianTime"
					value={eventForm.comedianTime}
					placeholder="2 Hours.."
					id="comedianTime"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>
		</div>
	);
};

export default Comedian;
