import React from 'react';
import SectionTitle from '../../components/SectionTitle.jsx';
import SplitSection from '../../components/SplitSection.jsx';
import Image from '../../images/landing_image.jpg';

const HowTo = () => {
	return (
		<div id="how-to-plan" className="py-12">
			<div className=" max-w-full mx-auto px-4 sm:px-6 lg:px-0 ">
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
					<SplitSection
						fade="fade-up"
						delay="100"
						width="w-1/4"
						primarySlot={
							<div className="w-full h-56   bg-primary ">
								<h1 className="text-center text-3xl">Step 1</h1>
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
					<SplitSection
						fade="fade"
						width="w-1/4"
						primarySlot={
							<div className="w-full h-56   bg-primary ">
								<h1 className="text-center text-3xl">Step 1</h1>
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
					<SplitSection
						fade="fade"
						width="w-1/4"
						primarySlot={
							<div className="w-full h-56   bg-primary ">
								<h1 className="text-center text-3xl">Step 1</h1>
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
		</div>
	);
};

export default HowTo;
