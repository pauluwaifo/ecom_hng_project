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
          ? { ...item, qty: Number(action.payload.qty) }
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

const fetchProducts = async ({ organization_id, reverse_sort, page, size, Appid, Apikey }) => {
  const url = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
  url.searchParams.append('organization_id', organization_id);
  url.searchParams.append('reverse_sort', reverse_sort);
  url.searchParams.append('page', page);
  url.searchParams.append('size', size);
  url.searchParams.append('Appid', Appid);
  url.searchParams.append('Apikey', Apikey);

  const response = await fetch(url.toString());

  if (!response.ok) {
      throw new Error('Network response was not ok');
  }

  return response.json();
};

function CartContext({ children }) {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [alert_bg, setAlert_bg] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const org = import.meta.env.VITE_REACT_APP_ORGANIZATION_ID;
  const appid = import.meta.env.VITE_REACT_APP_APP_ID;
  const apikey = import.meta.env.VITE_REACT_APP_API_KEY;

  const apiBaseURL = "/api"; // Base URL for the API proxy
  const endpoint = "/products";
  const queryParams = new URLSearchParams({
    organization_id: org,
    reverse_sort: "false",
    page: "1",
    Appid: appid,
    Apikey: apikey,
  }).toString();

  const fullURL = `${apiBaseURL}${endpoint}?${queryParams}`;

  useEffect(() => {
    fetch(fullURL, {
      method: "GET",
      credentials: "include", // Ensures cookies are included in the request
      withCredentials: true, // Some libraries use this, but it might not be necessary for Fetch API
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse response as JSON
      })
      .then((data) => {
        setProducts(data.items); // Assuming 'items' is the array of products in the API response
        setLoading(false); // Update loading state
        console.log(data.items)
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle fetch errors
      });
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
