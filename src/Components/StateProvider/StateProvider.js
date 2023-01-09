import React, {createContext, useContext, useReducer} from 'react';

/* prepares the dataLayer */
export const StateContext = createContext();

/* //wrappwr oure app and provide the Data layer */
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
     {children} </StateContext.Provider>);


/* push and pull information from the data layer */

export const useStateValue = () => useContext(StateContext);

