import React from 'react';

// navigation packages
import { HashLink } from 'react-router-hash-link';

const FloatingIcon = () => {
	return (
		<HashLink
			className="fixed w-10 h-10 bottom-10 right-10 bg-primary rounded-full text-secondary shadow-md"
			smooth
			to="#"
		>
			<svg
            className="mx-auto"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</HashLink>
	);
};

export default FloatingIcon;
