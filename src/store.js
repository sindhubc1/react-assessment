import React from 'react';

export const initialState = {
    entities:[], // Products list
    loading:true,
};
export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ACTION":
        console.log("action is called");
        return { ...state, keyProducts: payload };
      case "SET_PRODUCTS":
        return { ...state, entities: payload};
      default:
        console.log("Unknown action");
    }
  };

export const AppContext = React.createContext(initialState);