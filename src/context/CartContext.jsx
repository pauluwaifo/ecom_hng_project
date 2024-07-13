import { useState, useEffect, useReducer } from "react";
import AppContext from "./AppContext";
import axios from "axios";

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
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  

  const apiBaseURL = '/api'; // Base URL for the API proxy
  const endpoint = "/products";
  const queryParams = new URLSearchParams({
    organization_id: "8969b1dc6ae44595935014ca6f99653c",
    reverse_sort: "false",
    page: "1",
    Appid: "6P776V6VBS6NEVA",
    Apikey: "3b29b951ceb343359b58619708d36cd320240712131333265006",
  }).toString();

  const fullURL = `${apiBaseURL}${endpoint}?${queryParams}`;


  useEffect(() => {
  
    fetch(fullURL, {
      method: "GET",
      credentials: "include", // Ensures cookies are included in the request
      withCredentials: true, // Some libraries use this, but it might not be necessary for Fetch API
    })
      .then((response) => response.json())
      .then((data) => {setProducts(data.items), setLoading(false), console.log(data)})
      .catch((error) => console.error("Error:", error));
  }, []);

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
        products,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default CartContext;
