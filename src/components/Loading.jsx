import React from 'react';

const Loading = () => {
	return (
		<div className="z-10 w-screen h-screen bg-primary">
			<div className=" w-20 h-20 mx-auto my-auto">
				<svg className="animate-spin h-5 w-5 mr-3 text-secondary" viewBox="0 0 24 24"></svg>
				Processing
			</div>
		</div>
	);
};

export default Loading;
