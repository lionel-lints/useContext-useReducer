import React, { createContext, useReducer } from "react";

const initialState = { toggleBool: true };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "TOGGLE_BOOL":
        return {
          ...state,
          toggleBool: !state.toggleBool
        };
      default:
        return state;
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
