import React from 'react';
import SectionTitle from '../../components/SectionTitle.jsx';
import SplitSection from '../../components/SplitSection.jsx';

const HowTo = () => {
	return (
		<div id="how-to-plan" className="py-12">
			<div className=" max-w-full mx-auto px-4 sm:px-6 lg:px-0 ">
				<SectionTitle title="How to Create Your Event" />
				<SplitSection
					primarySlot={
						<div className="w-36 h-36  leading-0 mx-auto relative rounded-full bg-primary">
							<h1 className=" absolute bottom-1/2 w-full text-center text-3xl">
								 1
							</h1>
						</div>
					}
					secondarySlot={
						<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Entertainment
							</h3>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default HowTo;
