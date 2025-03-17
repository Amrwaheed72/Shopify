import { createContext, useContext, useEffect, useState } from "react";
import { CartData } from "../data/dummy";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  function increment(id, price) {
    setCount((prev) => {
      const newCount = { ...prev, [id]: (prev[id] || 1) + 1 };
      return newCount;
    });
  }

  function decrement(id, price) {
    setCount((prevCounts) => {
      const newCount = {
        ...prevCounts,
        [id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : 1,
      };
      return newCount;
    });
  }

  // Recalculate total price whenever count changes
  useEffect(() => {
    let newTotal = 0;
    Object.entries(count).forEach(([id, qty]) => {
      const product = CartData.find((item) => item.id === Number(id));
      if (product) {
        newTotal += qty * product.price;
      }
    });
    setTotalPrice(newTotal);
  }, [count]);

  function setMode(e) {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  }

  function setColor(mode) {
    setCurrentColor(mode);
    localStorage.setItem("ColorMode", mode);
    setThemeSettings(false);
  }

  function handleClick(clicked) {
    setIsClicked({ ...initialState, [clicked]: true });
  }

  function handleCloseClick(clicked) {
    setIsClicked({ ...initialState, [clicked]: false });
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setMode,
        setColor,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        cart,
        setCart,
        handleCloseClick,
        count,
        increment,
        decrement,
        totalPrice,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

function useStateContext() {
  return useContext(StateContext);
}

export { ContextProvider, useStateContext };