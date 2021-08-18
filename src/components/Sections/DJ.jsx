import React, { useContext } from 'react';

// context
import { FormContext } from '../../context/formContext.js';

// external stylesheet
import { styles } from '../../styles/styles.js';

const DJ = ({ open }) => {
	let { handleEventForm, eventForm } = useContext(FormContext);

	return (
		<div
			className={`${open ? 'opacity-100 px-3 py-2' : 'opacity-0 h-0 hidden'} ${
				styles.divCheckboxStyle
			} transition-all duration-4500 ease-in-out`}
		>
			<label className={styles.labelStyle} htmlFor="djMusicGenre">
				What type(s) of music genre would like to have?
				<input
					className={styles.inputStyle}
					type="text"
					name="djMusicGenre"
					value={eventForm.djMusicGenre}
					placeholder="Hip-Hop/Rap, Jazz, Rock."
					id="djMusicGenre"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>

			<label className={styles.labelStyle} htmlFor="djExtras">
				Would you like any extra services?
				<input
					className={styles.inputStyle}
					type="text"
					name="djExtras"
					placeholder="Fog Machine.."
					id="djExtras"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>

			<label className={styles.labelStyle} htmlFor="djTime">
				How long do you need the DJ for?
				<input
					className={styles.inputStyle}
					type="text"
					name="djTime"
					placeholder="2 Hours.."
					id="djTime"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>
		</div>
	);
};

export default DJ;
