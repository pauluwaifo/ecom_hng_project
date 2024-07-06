import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";

function Nav() {
  return (
    <div
      className={`${styles.nav_bg} w-full px-28 justify-around text-white flex flex-row items-center text-sm min-h-14`}
    >
      {/* links/navigation */}
      <div className="flex basis-3/5 justify-between items-center ">
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

      <div className="basis-2/5 justify-between items-center flex flex-row">
        {/* search  */}
        <form
          className="text-white mx-20 flex items-center border-b-2 p-1"
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
          <Link className=" hover:scale-110" to={"/"}>
            <FaShoppingBag />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Nav;
