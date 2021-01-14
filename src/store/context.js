import React, { useState } from 'react';

// store default value
export const StateContext = React.createContext();

// Provider
const StateContextProvider = (props) => {
	return (
		<StateContext.Provider value={{}}>{props.children}</StateContext.Provider>
	);
};

export default StateContextProvider;

// consumer
export const StateConsumer = StateContext.Consumer;
