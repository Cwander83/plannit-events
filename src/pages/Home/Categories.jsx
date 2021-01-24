import React from 'react';

import Divider from '../../components/Divider.jsx';
import SplitSection from '../../components/SplitSection.jsx';
import imageDj from '../../images/dancing-4.jpg';

const Categories = () => {
	return (
		<div id="categories" className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-4xl lg:text-5xl font-semibold tracking-wide ">
						Plannit Services
					</h2>
					<Divider />
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
						Planning an event has never been easy.
					</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-dark lg:mx-auto">
						Plannit caters to busy parents, families, young adults &#38;
						everyone in between because we understand how precious your time is.
					</p>
				</div>
				{/* <div className="flex flex-row justify-center h-96">
					<div className="w-2/3 flex items-center justify-center">
						<h2>DJ Entertainment</h2>
					</div>
					<div className="w-1/3 flex items-center justify-center">
						<img
							className="rounded-full shadow-lg w-60 h-60"
							src={imageDj}
							alt=""
						/>
					</div>
				</div> */}
				<SplitSection
					primarySlot={
						<div className="lg:pr-28 xl:pr-36">
							<h3 className="text-3xl font-semibold leading-tight">
								Entertainment
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Our team of enthusiastic marketers will analyse and evaluate how
								your company stacks against the closest competitors
							</p>
						</div>
					}
					secondarySlot={<img className=" w-auto" src={imageDj} alt="" />}
				/>

				{/* <div className="mt-10">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
									
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
										/>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<dt className="text-lg leading-6 font-medium text-gray-darkest">
									Entertainment
								</dt>
								<dd className="mt-2 text-base text-gray-500">
									Explore the options Plannit offers to entertain you &#38; your
									guests. <br />
									Examples: DJ, live band, clown, etc.
								</dd>
							</div>
						</div> */}
				{/* <div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
									
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
										/>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<dt className="text-lg leading-6 font-medium text-gray-darkest">
									Event Rentals
								</dt>
								<dd className="mt-2 text-base text-gray-500">
									Choose from a wide selection of rentals from quality table
									setups, tents, to adventurous bounce houses.
								</dd>
							</div>
						</div> */}

				{/* <div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
									
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<dt className="text-lg leading-6 font-medium text-gray-darkest">
									Floral Arrangements
								</dt>
								<dd className="mt-2 text-base text-gray-500">
									Come upon garden-fresh arrangements to provide an aromatic
									atmosphere for your event.
									<br /> Examples: table arrangements, bouquets, centerpieces,
									etc.
								</dd>
							</div>
						</div> */}

				{/* <div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
									
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
										/>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<dt className="text-lg leading-6 font-medium text-gray-darkest">
									Mobile notifications
								</dt>
								<dd className="mt-2 text-base text-gray-500">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Maiores impedit perferendis suscipit eaque, iste dolor
									cupiditate blanditiis ratione.
								</dd>
							</div>
						</div> */}
				{/* </dl> */}
				{/* </div> */}
			</div>
		</div>
	);
};

export default Categories;
