import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";

function Nav() {
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
    <>
      <div
        className={`lg:bg-[#1E1E1E] w-full sm:p-2 sm:bg-white lg:px-28 lg:justify-around text-white flex flex-row items-center text-sm min-h-14`}
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

        <div className=" sm:p-5 lg:p-0 lg:basis-2/5 sm:basis-full justify-between items-center flex flex-row">
          {/* search  */}
          <form
            className="sm:hidden text-white sm:mx-0 lg:mx-20 lg:flex items-center border-b-2 p-1"
            onSubmit={() => something}
          >
            <IoSearch className="text-lg mx-1" />
            <input
              className="bg-transparent border-0 outline-0 placeholder:text-white text-sm items-center flex p-0"
              type="text"
              placeholder="type to search.."
            />
          </form>
          <div className="lg:hidden sm:flex flex-col text-black">
            welcome back,
            <p className="font-semibold text-lg">Sonia</p>
          </div>

          <div className="lg:hidden sm:flex flex-col text-black">
           <IoSearch className="font-semibold text-lg"/>
          </div>

          {/* cart/ whishlist btn */}
          <section className="sm:hidden lg:flex flex-row text-2xl items center">
            <Link className="mx-2 hover:scale-110" to={"/"}>
              <FaRegHeart />
            </Link>
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
          </section>
        </div>
      </div>
    </>
  );
}

export default Nav;
