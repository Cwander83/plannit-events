import React from 'react';
import SectionTitle from '../../components/SectionTitle.jsx';
import StepSection from '../../components/StepSection.jsx';

import Image from '../../images/landing_image.jpg';

const HowTo = () => {
	return (
		<div id="how-to-plan" className="py-12">
			<div className=" max-w-full mx-auto px-0">
				<SectionTitle title="How to Create Your Event" />
				<div
					className="w-full h-auto"
					style={{
						background: `linear-gradient(
							rgba(0, 0, 0, 0.5),
							rgba(0, 0, 0, 0.5)
						  ),url(${Image})`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundAttachment: 'fixed',
					}}
				>
					{/* <!-- component --> */}

					<div className="relative wrap overflow-hidden px-4 sm:px-10 py-2 h-full">
						<div
							className="border-2-2 left-1/2 absolute border-opacity-20 bg-gray-lightest border-gray-lightest  border h-5/6 "
							// style={{left: "50%"}}
						></div>
						{/* <!-- right timeline --> */}
						<StepSection
							step="1"
							title="event builder"
							description="Lorem Ipsum is simply dummy text of the printing and
					typesetting industry."
						/>

						{/* <!-- left timeline --> */}

						<StepSection
							reverse
							step="2"
							title="event builder"
							description="Lorem Ipsum is simply dummy text of the printing and
					typesetting industry."
						/>
						{/* <!-- right timeline --> */}
						<StepSection
							step="3"
							title="event builder"
							description="Lorem Ipsum is simply dummy text of the printing and
					typesetting industry."
						/>

						{/* <!-- left timeline --> */}

						<StepSection
							reverse
							step="4"
							title="event builder"
							description="Lorem Ipsum is simply dummy text of the printing and
					typesetting industry."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowTo;
