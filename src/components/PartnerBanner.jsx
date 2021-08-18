import React, { useState } from 'react';

// react router
import { NavLink } from 'react-router-dom';

const PartnerBanner = () => {
	const [open, setOpen] = useState(true);
	return (
		<>
			{open && (
				<div className="fixed bottom-0  w-full  mx-0 py-6 flex justify-between px-6 text-base shadow-lg  bg-primary text-gray-light">
					<NavLink
						className="px-4"
						to="/partner-form"
						onClick={() => setOpen(false)}
					>
						Interested in Partnering with Plannit?
						<br />
						Actively seeking new relationships with vendors
					</NavLink>
					<button onClick={() => setOpen(false)}>
						<svg
							className="w-8 h-8 text-black"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			)}
		</>
	);
};

export default PartnerBanner;
