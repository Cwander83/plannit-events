import React, { useContext } from 'react';

// context
import { FormContext } from '../../context/formContext.js';

// external stylesheet
import { styles } from '../../styles/styles.js';

const Clowns = ({ open }) => {
	let { handleEventForm, eventForm } = useContext(FormContext);

	return (
		<div
			className={`${open ? 'opacity-100 px-3 py-2' : 'opacity-0 h-0 hidden'} ${
				styles.divCheckboxStyle
			} transition-all duration-4500 ease-in-out`}
		>
			<h4 className={`${styles.labelStyle} text-left`}>Clown Activities</h4>
			{/* magic show */}
			<div className={styles.divStyle}>
				<label
					htmlFor="magicShow"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={eventForm.magicShow}
						name="magicShow"
						id="magicShow"
						onChange={(e) => handleEventForm(e)}
					/>
					Magic Show
				</label>
			</div>
			{/* jugglers */}
			<div className={styles.divStyle}>
				<label
					htmlFor="jugglers"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={eventForm.jugglers}
						name="jugglers"
						id="jugglers"
						onChange={(e) => handleEventForm(e)}
					/>
					Jugglers
				</label>
			</div>

			{/* face painting */}
			<div className={styles.divStyle}>
				<label
					htmlFor="facePainting"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={eventForm.facePainting}
						name="facePainting"
						id="facePainting"
						onChange={(e) => handleEventForm(e)}
					/>
					Face Painting
				</label>
			</div>

			{/* balloon twisting */}
			<div className={styles.divStyle}>
				<label
					htmlFor="balloonTwisting"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={eventForm.balloonTwisting}
						name="balloonTwisting"
						id="balloonTwisting"
						onChange={(e) => handleEventForm(e)}
					/>
					Balloon Twisting
				</label>
			</div>

			{/* puppet show */}
			<div className={styles.divStyle}>
				<label
					htmlFor="puppetShow"
					className={`${styles.checkboxLabelStyle} text-left`}
				>
					<input
						className={styles.checkboxStyle}
						type="checkbox"
						checked={eventForm.puppetShow}
						name="puppetShow"
						id="puppetShow"
						onChange={(e) => handleEventForm(e)}
					/>
					Magic Show
				</label>
			</div>

			<label className={styles.labelStyle} htmlFor="clownTime">
				How long do you need the Clown for?
				<input
					className={styles.inputStyle}
					type="text"
					name="clownTime"
					placeholder="2 Hours.."
					id="clownTime"
					onChange={(e) => handleEventForm(e)}
				/>
			</label>
		</div>
	);
};

export default Clowns;
