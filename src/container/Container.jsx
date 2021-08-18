import React from 'react';

const Container = ({ children, padded, id }) => (
	<>
		<div className="h-24 w-full bg-primary"></div>
		<div className="py-4 sm:py-8 sm:px-8 w-full  max-w-full mx-auto px-0">
			<div className="h-auto w-11/12 md:w-8/12 lg:w-8/12 p-7 rounded-sm shadow-md border-black border-2 mx-auto text-center flex flex-col">
				{children}
			</div>
		</div>
	</>
);

export default Container;
   