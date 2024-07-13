import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import AppContext from "../../context/AppContext";

function CartNav() {
  const { cart } = useContext(AppContext);
  const [scaleNo, setScaleNo] = useState(1);
  const [itemsInCart, setItemsInCart] = useState();

  const navClass = window.location.pathname.includes("/product/")
    ? "lg:bg-[#1e1e1e] lg:text-white sm:hidden lg:flex"
    : "lg:text-black lg:bg-white lg:flex";

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
    <div>
      {window.location.pathname !== "/cart" ? (
        <div className="bg-white p-2 text-bold text-black text-2xl sm:hidden lg:block">
          <Link to={"/"}>
            <IoIosArrowDropleft />
          </Link>
        </div>
      ) : null}
      <div
        className={`lg:py-4 lg:px-10 sm:h-24 lg:h-16 sm:p-2 flex z-10 flex-row flex-wrap sm:items-end lg:items-center sm:bg-[#130985] sm:text-white ${navClass}`}
      >
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
    </div>
  );
}

export default CartNav;
