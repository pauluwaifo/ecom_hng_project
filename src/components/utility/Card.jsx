import { IoStar, IoStarHalf } from "react-icons/io5";
import { useState } from "react";

function Card({ item }) {
  const [qty, setQty] = useState(1);
  const addToCart = (product) => {
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push({
      id: product.id,
      image: product.image[0],
      name: product.name,
      price: product.price,
      inStock: product.inStock,
      qty,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div
      className="sm:basis-[45%] lg:basis-[32.5%] border-2 m-1 p-2"
    >
      <div className="w-full lg:h-80 sm:h-28 overflow-hidden">
        <img width={"100%"} src={item.image[0]} alt={item.name} />
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
