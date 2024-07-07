import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";

function Nav() {
  const [cart, setCart] = useState();
  const totalQty =
  cart && cart.reduce((accumulator, item) => accumulator + item.qty, 0);
  useEffect(() => {
    {totalQty}
  }, [cart])
  useEffect(() => {
    const existingCart = localStorage.getItem("cart");
    if (existingCart) {
      const cart = JSON.parse(existingCart);
      setCart(cart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  

  return (
    <div
      className={`${styles.nav_bg} w-full sm:p-2 lg:px-28 lg:justify-around text-white flex flex-row items-center text-sm min-h-14`}
    >
      {/* links/navigation */}
      <div className=" basis-3/5 justify-between items-center sm:hidden lg:flex">
        <Link className="flex items-center" to={"/about us"}>
          ABOUT US <FaPlus className="text-white inline-block mx-1" />
        </Link>
        <Link className="flex items-center" to={"/about us"}>
          PRODUCT <FaPlus className="text-white inline-block mx-1" />
        </Link>
        <Link className="flex items-center" to={"/about us"}>
          BOOK A CONSULTATION
          <FaPlus className="text-white inline-block mx-1" />
        </Link>
        <Link className="flex items-center" to={"/about us"}>
          CONTACT <FaPlus className="text-white inline-block mx-1" />
        </Link>
      </div>

      <div className="lg:basis-2/5 sm:basis-full justify-between items-center flex flex-row">
        {/* search  */}
        <form
          className="text-white sm:mx-0 lg:mx-20 flex items-center border-b-2 p-1"
          onSubmit={() => something}
        >
          <IoSearch className="text-lg mx-1" />
          <input
            className="bg-transparent border-0 outline-0 placeholder:text-white text-sm items-center flex p-0"
            type="text"
            placeholder="type to search.."
          />
        </form>

        {/* cart/ whishlist btn */}
        <section className="flex flex-row text-2xl items center">
          <Link className="mx-2 hover:scale-110" to={"/"}>
            <FaRegHeart />
          </Link>
          <Link className="relative hover:scale-110" to={"/"}>
            <div>
              <FaShoppingBag />
            </div>
            <div className="absolute bottom-1 left-4 bg-[#1E1E1E] text-sm px-1 rounded-full">
              {totalQty ? totalQty : "0"}
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Nav;
