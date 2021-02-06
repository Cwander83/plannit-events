import React from 'react';

import SplitSection from '../../components/SplitSection.jsx';
import SectionTitle from '../../components/SectionTitle.jsx';

import Food from '../../images/food.jpg';
import Entertainment from '../../images/entertainment.jpg';
import Venue from '../../images/venue.jpg';
import Theme from '../../images/theme.jpg';

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
					fade="fade-right"
					primarySlot={
						<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Entertainment
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Explore the options Plannit offers to entertain you &#38; your
								guests.
								<br />
								Examples (DJ, live band, clowns, etc.)
							</p>
						</div>
					}
					secondarySlot={
						<img className=" w-full h-full " src={Entertainment} alt="" />
					}
				/>
				<SplitSection
					fade="fade"
					reverseOrder
					primarySlot={
						<div className="lg:pl-16 xl:pl-40 lg:pr-4 xl:pr-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Food &#38; Gourmet Desserts
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Savor your favorite cuisines &#38; desserts that you and your
								guests will enjoy <br />
								Cuisines (American, Italian, Barbecue, Mexican, Latin America,
								Asian, Vegan, etc.) <br />
								Desserts (cakes, cupcakes, cookies)
							</p>
						</div>
					}
					secondarySlot={
						<img className=" w-full h-full shadow-sm" src={Food} alt="" />
					}
				/>
				<SplitSection
					fade="fade-right"
					primarySlot={
						<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Themes &#38; Decorations
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Visualize the type of look you want for your event from charming
								to eclectic and everything in between.
							</p>
						</div>
					}
					secondarySlot={<img className=" w-full h-full " src={Theme} alt="" />}
				/>
				<SplitSection
					fade="fade"
					reverseOrder
					primarySlot={
						<div className="lg:pl-16 xl:pl-40 lg:pr-4 xl:pr-20">
							<h3 className="text-3xl font-semibold leading-tight">
								Venues &#38; Rentals
							</h3>
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
								Discover attractive spaces to accommodate and impress your
								guests by finding all your venue and renting needs.
								<br />
								Event rentals (wide selection of rentals from quality table
								setups, tents, to adventurous bounce houses)
							</p>
						</div>
					}
					secondarySlot={<img className=" w-full h-full " src={Venue} alt="" />}
				/>
				<h1 className="px-6 sm:px-0 md:px-10 lg:px-32  w-full text-center text-2xl font-bold my-8 leading-tight">
					<span className="text-secondary">+ </span>
					Plus more services to accommodate you as you plan your event
				</h1>
				<ul className="flex justify-center flex-col">
					<li className=" w-4/5 md:w-3/5 mx-auto mb-4">
						<h2 className="text-2xl font-semibold leading-tight">
							Floral Arrangements
						</h2>
						<p className="pl-3 mt-4 text-xl text-gray-dark leading-relaxed">
							Come upon garden-fresh floral to provide an aromatic atmosphere
							for your event.
							<br />
							Examples (table arrangements, bouquets, centerpieces, etc.)
						</p>
					</li>
					<li className="w-4/5 md:w-3/5 mx-auto">
						<h2 className="text-2xl font-semibold leading-tight">
							Photography &#38; Videography
						</h2>
						<p className="pl-3 mt-8 text-xl text-gray-dark leading-relaxed">
							Capture every moment to cherish the memories forever.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Categories;
