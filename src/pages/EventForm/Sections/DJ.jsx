import React, { useContext } from 'react';

// context
import { FormContext } from '../../../context/formContext.js';

// external stylesheet
import { styles } from '../../../styles/styles.js';

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
				<textarea
					className={styles.inputStyle}
					type="text"
					name="djMusicGenre"
					value={eventForm.djMusicGenre}
					placeholder="Example: Hip-Hop/Rap, Jazz, Latino, Pop, Reggae, Rock."
					id="djMusicGenre"
					rows="2"
					onChange={(e) => handleEventForm(e)}
				></textarea>
			</label>

			<label className={styles.labelStyle} htmlFor="djExtras">
				Would you like any extra services?
				<textarea
					className={styles.inputStyle}
					type="text"
					name="djExtras"
					placeholder="Lighting Machine, Fog Machine, Microphones..."
					id="djExtras"
					rows="2"
					onChange={(e) => handleEventForm(e)}
				></textarea>
			</label>

			<label className={styles.labelStyle} htmlFor="djTime">
				How time and how long do you need the DJ for?
				<textarea
					className={styles.inputStyle}
					type="text"
					name="djTime"
					placeholder="Maybe only a few hours or the whole event??"
					id="djTime"
					rows="2"
					onChange={(e) => handleEventForm(e)}
				></textarea>
			</label>
		</div>
	);
};

export default DJ;
