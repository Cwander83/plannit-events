import React from 'react';

import SplitSection from '../../components/SplitSection.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';

import imageDj from '../../images/dancing-4.jpg';

const Categories = () => {
	return (
		<div id="categories" className="py-12">
			<div className=" max-w-full mx-auto px-4 sm:px-6 lg:px-0 ">
				<SectionTitle
					title="Plannit Services"
					subTitle="Planning an event has never been easy."
					caption="Plannit caters to busy parents, families, young adults &#38;
				everyone in between because we understand how precious your time is."
				/>
				<SplitSection
					primarySlot={
						<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Entertainment
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Our team of enthusiastic marketers will analyse and evaluate how
								your company stacks against the closest competitors
							</p>
						</div>
					}
					secondarySlot={
						<img className=" w-full h-full " src={imageDj} alt="" />
					}
				/>
				<SplitSection
					reverseOrder
					primarySlot={
						<div className="lg:pl-16 xl:pl-40 lg:pr-4 xl:pr-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Entertainment
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Our team of enthusiastic marketers will analyse and evaluate how
								your company stacks against the closest competitors
							</p>
						</div>
					}
					secondarySlot={
						<img className=" w-full h-full shadow-sm" src={imageDj} alt="" />
					}
				/>
				<SplitSection
					primarySlot={
						<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Entertainment
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Our team of enthusiastic marketers will analyse and evaluate how
								your company stacks against the closest competitors
							</p>
						</div>
					}
					secondarySlot={
						<img className=" w-full h-full " src={imageDj} alt="" />
					}
				/>
				<SplitSection
					reverseOrder
					primarySlot={
						<div className="lg:pl-16 xl:pl-40 lg:pr-4 xl:pr-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Entertainment
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Our team of enthusiastic marketers will analyse and evaluate how
								your company stacks against the closest competitors
							</p>
						</div>
					}
					secondarySlot={
						<img className=" w-full h-full " src={imageDj} alt="" />
					}
				/>
			</div>
		</div>
	);
};

export default Categories;
