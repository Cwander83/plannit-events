import React from 'react';
import Terms from './Terms.jsx';

const PartnersTermsModal = ({ open, handleModal }) => {
	return (
		<div
			className={`${
				open ? '' : 'hidden'
			}  flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-dark`}
		>
			<div className="bg-white rounded-lg w-11/12 sm:w-11/12 md:w-1/2 h-4/5">
				<div className=" h-full flex flex-col items-start p-4">
					<div className="flex items-center w-full">
						<div className="text-gray font-semibold tracking-wide text-lg">
							Terms and Conditions
						</div>
						<svg
							onClick={() => handleModal()}
							className="ml-auto mr-2 sm:mr-8 my-4 fill-current text-gray-darkest w-6 h-6 cursor-pointer"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 18 18"
						>
							<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
						</svg>
					</div>

					<div className=" h-full overflow-auto">
						<Terms />
					</div>

					<div className="ml-auto"></div>
				</div>
			</div>
		</div>
	);
};

export default PartnersTermsModal;
