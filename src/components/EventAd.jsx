import React, { memo } from 'react';

// react router
import { Link } from 'react-router-dom';

const EventAd = () => (
	<div className="bg-primary mt-6">
		<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
			<h2
				className="text-3xl font-extrabold tracking-tight 
                text-gray-lightest sm:text-4xl"
			>
				<span className="block">Ready to dive in?</span>
				<span className="block text-gray-dark">Build your Event today.</span>
			</h2>
			<div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
				<div className="inline-flex rounded-md shadow">
					<Link
						to="/event-builder"
						className="inline-flex items-center justify-center px-5 py-3 border border-black text-lg tracking-wider font-semibold rounded-md text-primary bg-secondary hover:bg-opacity-80"
					>
						Get started
					</Link>
					<div className="ml-3 inline-flex rounded-md shadow">
						<a
							href="tel:1-407-111-1111"
							className="inline-flex items-center justify-center px-5 py-3 border border-black tracker-wider font-semibold rounded-md text-primary text-lg  bg-white hover:bg-gray-light"
						>
							Call Us
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default memo(EventAd);
