import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CartNav() {
  const [cart, setCart] = useState();
  const [scaleNo, setScaleNo] = useState(1);
  const totalQty =
    cart && cart.reduce((accumulator, item) => accumulator + item.qty, 0);

  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    if (existingCart) {
      const cart = JSON.parse(existingCart);
      setCart(cart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setScaleNo(1);
    }, 200);
    setScaleNo(1.2);
  }, [totalQty]);
  return (
    <div className="p-10 flex z-10 flex-row flex-wrap items-center bg-white">
      <div className="basis-1/2 flex justify-start text-3xl font-bold">
        <Link to="/">Adventure</Link>
      </div>
      <div className="basis-1/2 flex justify-around font-bold">
        <Link className="sm:hidden lg:block" to={"/"}>Shop</Link>
        <Link className="sm:hidden lg:block" to={"/"}>About us</Link>
        <Link className="sm:hidden lg:block" to={"/"}>Contact</Link>
        <div className="flex flex-row items-center text-xl">
            {/* search icon */}
          <button className="mx-5">
            <IoSearch />
          </button>

          {/* cart bag */}
          <Link
            to="/cart"
            className="relative flex flex-row items-center hover:scale-110"
          >
            <div>
              <FaShoppingBag />
            </div>
            <div
              style={{ transform: `scale(${scaleNo})` }}
              className="text-sm px-1 mx-1"
            >
              {totalQty ? totalQty : "0"}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartNav;
