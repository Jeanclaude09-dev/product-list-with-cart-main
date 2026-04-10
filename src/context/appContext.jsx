import React, { createContext, useState, useContext } from "react";
import itemData from "../../data.json";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(itemData);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
