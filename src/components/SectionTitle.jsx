import React from 'react';

import Divider from './Divider.jsx';

const SectionTitle = ({ title, subTitle, caption }) => (
	<div className="text-center mb-20">
		<h2 className="text-4xl lg:text-5xl font-semibold tracking-wide ">
			{title}
		</h2>
		<Divider />
		<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
			{subTitle}
		</p>
		<p className="mt-4 max-w-2xl text-xl text-gray-dark lg:mx-auto">
			{caption}
		</p>
	</div>
);

export default React.memo(SectionTitle);
