import React, { createContext, useReducer, useContext } from 'react';

const ColorContext = createContext();

const initialState = { red: 0, green: 0, blue: 0 };

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RED':
      return { ...state, red: action.payload };
    case 'SET_GREEN':
      return { ...state, green: action.payload };
    case 'SET_BLUE':
      return { ...state, blue: action.payload };
    default:
      return state;
  }
};

export const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
