import React, { createContext, useState, useContext } from "react";
import itemData from "../../data.json";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState(itemData);
  const [cartItems, setCartItems] = useState({});


  // prev is current state before the update
  const addToCart = (id) => {
    setCartItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    setCartItems(prev => {
      if (prev[id] <= 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <AppContext.Provider value={{ data, setData, cartItems, addToCart, decrement, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
