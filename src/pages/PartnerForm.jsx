import React from 'react';

// import Image from '../images/pic-food-1.jpg';
// import Image2 from '../images/pic-dancing-1.jpg';
// import Image3 from '../images/pic-dj-1.jpg';

const PartnerForm = () => {
	return (
		<div className="flex flex-col justify-center">
			<div>
				<h1 className="w-full text-lg lg:text-5xl font-semibold font-title text-center mt-7">
					Partnership Contact Form
				</h1>
				<h1 className="w-full text-lg lg:text-2xl font-semibold  text-center mt-7">
					Look Forward to Working With You!
				</h1>
			</div>
			<div className="text-center">
				<div className=" w-11/12 mx-auto">
					<form
						className="w-full  mt-6 mx-auto max-w-4xl border-secondary border-2 p-6 sm:p-8 flex flex-wrap"
						action="#"
						method="POST"
					>
						<div className="p-3 w-full">
							<label
								htmlFor="name"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Contact Name
							</label>
							<input
								required
								type="text"
								name="name"
								id="name"
								autoComplete="name"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full  text-center text-xl tracking-wider border-gray-light border-t-0 border-l-0 border-r-0"
							/>
						</div>

						<div className="p-3 w-full">
							<label
								htmlFor="business_name"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Business Name
							</label>
							<input
								required
								type="text"
								name="business_name"
								id="business_name"
								autoComplete="organization"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-light border-t-0 border-l-0 border-r-0"
							/>
						</div>

						<div className="p-3 w-full">
							<label
								htmlFor="email_address"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Email Address
							</label>
							<input
								required
								type="text"
								name="email_address"
								id="email_address"
								autoComplete="email"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-light border-t-0 border-l-0 border-r-0"
							/>
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="phone"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								autoComplete="phone"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-light border-t-0 border-l-0 border-r-0"
							/>
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="company_website"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Website
							</label>
							{/* <div className="mt-1 flex rounded-md"> */}
							{/* <span className="inline-flex items-center px-3 rounded-l-md border  border-primary bg-secondary text-black text-lg font-medium">
									http://
								</span> */}
							<input
								type="url"
								name="company_website"
								id="company_website"
								autoComplete="url"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-light border-t-0 border-l-0 border-r-0"
								placeholder="www.example.com"
							/>
							{/* //</div> */}
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="service"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Type of Service
							</label>
							<textarea
								required
								type="text"
								name="service"
								id="service"
								rows="2"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-light border-t-0 border-l-0 border-r-0"
							></textarea>
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="service_area"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Service Area
							</label>
							<textarea
								required
								type="text"
								name="service_area"
								id="service_area"
								rows="2"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-light border-t-0 border-l-0 border-r-0"
							></textarea>
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="message"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Additional Info.
							</label>
							<textarea
								type="text"
								name="message"
								id="message"
								rows="2"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-light border-t-0 border-l-0 border-r-0"
							></textarea>
						</div>

						<div className="p-3 w-full">
							<button
								type="submit"
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PartnerForm;
