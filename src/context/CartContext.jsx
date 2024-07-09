import { useState, useEffect, useReducer } from "react";
import AppContext from "./AppContext";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

// Initialize the cart in localStorage if it does not exist
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "ADD_TO_CART":
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case "UPDATE_ITEM_QTY":
      const updatedQty = state.cart.map((item) =>
        item.id == action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedQty));
      return { ...state, cart: updatedQty };

    case "DELETE_CART_ITEM":
      const updateCart = state.cart.filter((item) =>
        item.id !== action.payload ? item : null
      );
      localStorage.setItem("cart", JSON.stringify(updateCart));
      return { ...state, cart: updateCart };

    default:
      return state;
  }
};
function CartContext({ children }) {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [alert_bg, setAlert_bg] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  // set alert to false
  setTimeout(
    () => {
      setAlert(false);
    },
    5000,
    [alert]
  );

  return (
    <AppContext.Provider
      value={{
        alert,
        setAlert,
        cart: state.cart,
        dispatch,
        message,
        setMessage,
        alert_bg,
        setAlert_bg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default CartContext;
