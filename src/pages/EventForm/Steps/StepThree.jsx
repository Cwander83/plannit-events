// import React, { useContext } from 'react';

// // components
// import Container from '../../../container/Container.jsx';
// import EventFormHeader from '../../../components/EventFormHeader.jsx';

// // context
// import { FormContext } from '../../../context/formContext.js';

// // external stylesheet
// import { styles } from '../../../styles/styles.js';

// const StepThree = ({ prevStep, nextStep }) => {
// 	let { handleEntertainment } = useContext(FormContext);

// 	const [dj, setDj] = React.useState(false);

// 	const djHandler = () => setDj(!dj);

// 	return (
// 		<Container padded>
// 			<EventFormHeader title="Entertainment" />

// 			{/* dj checkbox */}
// 			<div className={styles.divStyle}>
// 				<label
// 					htmlFor="dj"
// 					className={`${styles.checkboxLabelStyle} text-left`}
// 				>
// 					<input
// 						className={styles.checkboxStyle}
// 						type="checkbox"
// 						checked={dj}
// 						name="dj"
// 						id="dj"
// 						onChange={djHandler}
// 					/>
// 					Live DJ
// 				</label>
// 			</div>

// 			{/* dj input */}
// 			<div
// 				className={`${dj ? 'opacity-100' : 'opacity-0 h-0'} ${
// 					styles.divStyle
// 				} transition-all duration-4500 ease-in-out`}
// 			>
// 				<label className={styles.labelStyle} htmlFor="djMusicGenre">
// 					What type(s) of music genre would like to have?
// 					<textarea
// 						className={styles.inputStyle}
// 						type="text"
// 						name="djMusicGenre"
// 						placeholder="Example: Hip-Hop/Rap, Jazz, Latino, Pop, Reggae, Rock."
// 						id="djMusicGenre"
// 						rows="2"
// 						onChange={(e) => handleEntertainment(e)}
// 					></textarea>
// 				</label>

// 				<label className={styles.labelStyle} htmlFor="dj">
// 					Would you like any extra services?
// 					<textarea
// 						className={styles.inputStyle}
// 						type="text"
// 						name="dj"
// 						placeholder="Lighting Machine, Fog Machine, Microphones..."
// 						id="dj"
// 						rows="2"
// 						onChange={(e) => handleEntertainment(e)}
// 					></textarea>
// 				</label>

// 				<label className={styles.labelStyle} htmlFor="djTime">
// 					How time and how long do you need the DJ for?
// 					<textarea
// 						className={styles.inputStyle}
// 						type="text"
// 						name="djTime"
// 						placeholder="Maybe only a few hours or the whole event??"
// 						id="djTime"
// 						rows="2"
// 						onChange={(e) => handleEntertainment(e)}
// 					></textarea>
// 				</label>
// 			</div>

// 			<div className="flex justify-end">
// 				<button
// 					onClick={prevStep}
// 					className="mx-2 px-5 py-3 text-gray-lightest bg-primary rounded-sm shadow"
// 				>
// 					Back
// 				</button>
// 				<button
// 					onClick={nextStep}
// 					className="mx-2 px-5 py-3 text-gray-lightest bg-primary rounded-sm shadow"
// 				>
// 					Next
// 				</button>
// 			</div>
// 		</Container>
// 	);
// };

// export default StepThree;
