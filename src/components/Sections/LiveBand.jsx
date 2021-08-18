import React, { useContext } from 'react';

// context
import { FormContext } from '../../context/formContext.js';

// external stylesheet
import { styles } from '../../styles/styles.js';

const LiveBand = ({ open }) => {
	let { handleEventForm, eventForm } = useContext(FormContext);

	return (
		<div
			className={`${open ? 'opacity-100 px-3 py-2' : 'opacity-0 h-0 hidden'} ${
				styles.divCheckboxStyle
			} transition-all duration-4500 ease-in-out`}
		>
			<label className={styles.labelStyle} htmlFor="liveBandGenre">
				Genre of Band?
				<input
					className={styles.inputStyle}
					type="text"
					name="liveBandGenre"
					value={eventForm.djMusicGenre}
					placeholder="Jazz, Rock, Country.."
					id="liveBandGenre"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>

			<label className={styles.labelStyle} htmlFor="liveBandSize">
				Band Size?
				<input
					className={styles.inputStyle}
					type="text"
					name="liveBandSize"
					value={eventForm.liveBandSize}
					placeholder="Full Band, Single Vocalists.."
					id="liveBandSize"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>

			<label className={styles.labelStyle} htmlFor="liveBandTime">
				How long do you need the Live Band for?
				<input
					className={styles.inputStyle}
					type="text"
					name="liveBandTime"
					value={eventForm.liveBandTime}
					placeholder="2 Hours.."
					id="liveBandTime"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>
		</div>
	);
};

export default LiveBand;
