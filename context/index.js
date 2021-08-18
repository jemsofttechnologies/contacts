import React from 'react'
import { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import contactsInitialState from "./initialStates/contactsInitialState";
import authReducer from "./reducers/authReducer";
import contactsReducer from "./reducers/contactsReducer";


// create context
const Context = createContext();

// provider
const Provider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, authInitialState);
	const [contactsState, contactsDispatch] = useReducer(contactsReducer, contactsInitialState);
	return (
		<Context.Provider
			value={{
				authState,
				contactsState,
				authDispatch,
				contactsDispatch,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export {Provider, Context}