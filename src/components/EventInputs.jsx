import React from 'react';

const EventInputs = ({
	name,
	required,
	type,
    label,

	divStyle,
	labelStyle,
	inputStyle,
}) => {
	return (
		<div className={divStyle}>
			<label htmlFor={name}>
				{label}
				<input
					required={required ? true : false}
					type={type}
					name={name}
					id={name}
				/>
			</label>
		</div>
	);
};

export default EventInputs;
