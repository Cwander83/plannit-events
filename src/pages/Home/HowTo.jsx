import React from 'react';
import SectionTitle from '../../components/SectionTitle.jsx';
import StepSection from '../../components/StepSection.jsx';

import Image from '../../images/landing_image-min.jpg';

const HowTo = () => {
	return (
		<div id="how-to-plan" className="pt-12 pb-32 bg-gray-lightest">
			<div className=" max-w-full mx-auto px-0">
				<SectionTitle
					title="How Plannit Works"
					caption="Our core goal is to make sure this platform is easy to use and event-planning is made simple. Here’s how it works, step by step."
				/>
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
						{/* step 1 */}
						<StepSection
							step="1"
							title="The Host starts the plan"
							description="The Host clicks on “Start Planning” to take you through the experience of creating your own event."
						/>

						{/* <!-- left timeline --> */}
						{/* step 2 */}
						<StepSection
							reverse
							step="2"
							title="Gathering details for the event"
							description="Enter in the event type, the date &#38; time of the event, the location of your event, how many guests are invited and your estimated budget."
						/>
						{/* <!-- right timeline --> */}
						{/* step 3 */}
						<StepSection
							step="3"
							title="Putting the pieces together"
							description="The host is able to put together all the considerable pieces to make the event stick out. By selecting our top-tier services to cater to your event. "
						/>

						{/* <!-- left timeline --> */}
						{/* step 4 */}
						<StepSection
							reverse
							step="4"
							title="Submit &#38; Kick back"
							description="The host will enter their domestic information, and submit event."
						/>
						{/* <!-- right timeline --> */}
						{/* step 4 */}
						<StepSection
							step="5"
							title="Verify and confirm your event"
							description="An email will be sent for confirmation. In the meanwhile, Plannit will keep in contact with the host and plan and share options based on selected service(s)."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowTo;
