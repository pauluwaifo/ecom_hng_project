import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";

function CartNav() {
  const { cart } = useContext(AppContext);
  const [scaleNo, setScaleNo] = useState(1);
  const [itemsInCart, setItemsInCart] = useState();

  useEffect(() => {
    const totalQty =
      cart && cart.reduce((accumulator, item) => accumulator + item.qty, 0);
    setItemsInCart(totalQty);
  }, [cart]);

  useEffect(() => {
    setScaleNo(1.2);
    const timer = setTimeout(() => {
      setScaleNo(1);
    }, 200);

    return () => clearTimeout(timer);
  }, [itemsInCart]);

  return (
    <div className="lg:p-10 sm:h-24 sm:p-2 flex z-10 flex-row flex-wrap sm:items-end lg:items-center lg:bg-white sm:bg-[#130985] lg:text-black sm:text-white">

      <div className="basis-1/2 flex justify-start lg:text-3xl sm:text-sm lg:font-bold sm:font-normal">
        <Link className="sm:hidden lg:block" to="/">
          Adventure
        </Link>
        <Link className="sm:block lg:hidden text-white/70" to="/">
          cancel
        </Link>
      </div>

      <div className="basis-1/2 flex sm:items-end sm:justify-start lg:justify-around font-bold">
        <p className="sm:block lg:hidden text-white text-xl">
          {window.location.pathname == "/cart" ? "Cart" : "Checkout"}
          
        </p>
          <Link className="sm:hidden lg:inline-block" to={"/"}>
            Shop
          </Link>
          <Link className="sm:hidden lg:inline-block" to={"/"}>
            About us
          </Link>
          <Link className="sm:hidden lg:inline-block" to={"/"}>
            Contact
          </Link>
          <div className=" sm:hidden lg:flex flex-row items-center text-xl">
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
                {itemsInCart ? itemsInCart : "0"}
              </div>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default CartNav;
