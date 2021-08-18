import React from 'react';

const Layout = ({ children }) => (
	<div className=" font-body mx-auto w-full min-h-screen flex flex-col justify-between">
		{children}
	</div>
);

export default Layout;
