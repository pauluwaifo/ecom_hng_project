import { IoStar, IoStarHalf } from "react-icons/io5";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

function Card({ item, url }) {
  const qty = 1;
  const { dispatch, setAlert, setMessage, setAlert_bg } = useContext(AppContext);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, qty } });
    setAlert(true)
    setMessage("1 ITEM ADDED TO YOUR CART ")
    setAlert_bg("bg-green-500")
  };

  return (
    <div className="sm:basis-[45%] lg:basis-[32.5%] border-2 m-1 p-2">
      <div className="w-full lg:h-80 sm:h-28 flex justify-center overflow-hidden overflow-clip">
        <img className="h-full" src={`${url}${item.image[0]}`} alt={item.name} />
      </div>

      <div className="flex items-center">
        <IoStar className="text-[#f7cb38]" />
        <IoStar className="text-[#f7cb38]" />
        <IoStar className="text-[#f7cb38]" />
        <IoStar className="text-[#f7cb38]" />
        <IoStarHalf className="text-[#f7cb38] " />
      </div>
      <p>{item.name}</p>
      <div className="flex sm:flex-col lg:flex-row justify-between mt-2 items-center">
        <p className="font-bold lg:text-xl ">${item.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(item)}
          className="text-sm px-2 py-1 h-full bg-[#d9d9d9] font-bold"
        >
          Add to bag
        </button>
      </div>
    </div>
  );
}

export default Card;
