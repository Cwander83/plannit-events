import React, { useState, useContext } from 'react';

// context api
import { StateContext } from '../context/context.js';
const PartnerForm = () => {
	let { handlePartnerForm, partnerForm } = useContext(StateContext);

	return (
		<div className="flex flex-col justify-center">
			<div>
				<h1 className="w-full text-lg lg:text-5xl font-semibold font-title text-center mt-7">
					Partnership Contact Form
				</h1>
				<h1 className=" w-4/6 mx-auto text-lg lg:text-2xl font-medium  text-center mt-7">
					Get Started by telling us about your business.
				</h1>
			</div>
			<div className="text-center mb-6">
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
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full  text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0"
								onChange={(e) => handlePartnerForm(e)}
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
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0"
								onChange={(e) => handlePartnerForm(e)}
							/>
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="email"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Email Address
							</label>
							<input
								required
								type="text"
								name="email"
								id="email"
								autoComplete="email"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0"
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
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0"
								onChange={(e) => handlePartnerForm(e)}
							/>
						</div>
						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="city"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								City
							</label>
							<input
								type="text"
								id="city"
								name="city"
								autoComplete="city"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0"
								onChange={(e) => handlePartnerForm(e)}
							/>
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="company_website"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Website
							</label>

							<input
								type="url"
								name="website"
								id="website"
								autoComplete="url"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0"
								placeholder="www.example.com"
								onChange={(e) => handlePartnerForm(e)}
							/>
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="service"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Business Category
							</label>
							<textarea
								required
								type="text"
								name="service"
								id="service"
								rows="2"
								placeholder="Photographer, Catering, etc.."
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0"
								onChange={(e) => handlePartnerForm(e)}
							></textarea>
						</div>

						<div className="p-3 w-full md:w-1/2">
							<label
								htmlFor="message"
								className="block text-md md:text-xl font-medium text-gray-darkest"
							>
								Additional Information
							</label>
							<textarea
								type="text"
								name="message"
								id="message"
								rows="2"
								className="mt-1 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl block w-full text-center text-xl tracking-wider border-gray-dark border-t-0 border-l-0 border-r-0"
								onChange={(e) => handlePartnerForm(e)}
							></textarea>
						</div>
						<div className="p-3 w-full ">
							<label
								htmlFor="agreement"
								className="block text-md md:text-xl font-medium text-gray-darkest mx-auto w-full md:w-1/2"
							>
								<input
									type="checkbox"
									name="agreement"
									id="agreement"
									checked={partnerForm.agreement}
									required
									className=" w-6 h-6 mr-3 focus:border-primary focus:ring-0 focus:border-3 focus:text-xl   text-center text-xl tracking-wider"
									onChange={(e) => handlePartnerForm(e)}
								/>
								Agree to Plannit business terms and acknowledge our privacy
								rules.
							</label>
						</div>

						<div className="p-3 w-full">
							<button
								type="submit"
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PartnerForm;
