import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaCreditCard,
  FaShoppingBag,
} from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState, useContext } from "react";
import AppContext from "../../context/AppContext";

function Footer() {
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
      <div className="sm:hidden lg:flex flex-col flex-wrap text-white">
        <div className="bg-[#2b2b2b] lg:px-10 pt-20 pb-32 sm:px-2">
          <div className="flex flex-row flex-wrap items-center">
            {/* COL-1 */}
            <div className="sm:basis-full sm:mt-5 lg:basis-1/4 flex flex-col">
              <Link className="font-bold text-xl" to={"/"}>
                MIKA'S EMPIRE
              </Link>
              <p className="mt-8">
                Subscribe to our mailing list to get the new updates!
              </p>
              {/* social links */}
              <section className="flex flex-row mt-2 text-gray-400">
                <FaFacebookF />
                <FaTwitter className="mx-2" />
                <FaInstagram className="mx-2" />
                <FaWhatsapp className="mx-2" />
              </section>
            </div>
            {/* COL-2 */}
            <div className="sm:basis-full sm:mt-5 lg:basis-1/4 flex flex-col">
              <Link className="font-bold text-xl" to={"/"}>
                INFORMATION
              </Link>
              <div className="flex flex-col mt-8">
                <Link className="mt-2" to={"/"}>
                  About us
                </Link>
                <Link className="mt-2" to={"/"}>
                  Contact
                </Link>
                <Link className="mt-2" to={"/"}>
                  How we source
                </Link>
                <Link className="mt-2" to={"/"}>
                  Identify fake products
                </Link>
              </div>
            </div>
            {/* COL-3 */}
            <div className="sm:basis-full sm:mt-5 lg:basis-1/4 flex flex-col">
              <Link className="font-bold text-xl" to={"/"}>
                OUR SERVICES
              </Link>
              <div className="flex flex-col mt-8">
                <Link className="mt-2" to={"/"}>
                  Shipping and Delivery
                </Link>
                <Link className="mt-2" to={"/"}>
                  Book a consultation
                </Link>
                <Link className="mt-2" to={"/"}>
                  Refunds & Returns
                </Link>
              </div>
            </div>
            {/* COL-4 */}
            <div className="sm:basis-full sm:mt-5 lg:basis-1/4 flex flex-col">
              <Link className="font-bold text-xl" to={"/"}>
                MY ACCOUNT
              </Link>
              <div className="flex flex-col mt-8">
                <Link className="mt-2" to={"/"}>
                  My Cart
                </Link>
                <Link className="mt-2" to={"/"}>
                  Checkout
                </Link>
                <Link className="mt-2" to={"/"}>
                  Track Order
                </Link>
                <Link className="mt-2" to={"/"}>
                  My Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap bg-white px-10 py-0 text-black items-center">
          <div className="basis-1/2 justify-start font-bold flex items-center sm:text-[.8rem] lg:text-lg">
            <section className="text-sm text-white sm:px-[5px] px-[6.5px] bg-black rounded-full mx-2">
              C
            </section>{" "}
            MIKA'S EMPIRE2024
          </div>
          <div className="basis-1/2 justify-end font-semibold flex items-center ">
            <Link className="lg:mx-10 sm:mx-2" to={"/"}>
              privacy
            </Link>
            <Link className="lg:mx-10 sm:mx-2" to={"/"}>
              terms
            </Link>
            <Link className="lg:mx-10 sm:mx-2" to={"/"}>
              sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* mobile footer */}
      <div className="lg:hidden sm:flex flex-row justify-around bg-white bottom-0 left-0 w-full min-h-24 rounded-t-xl shadow-md border fixed  items-center ">
        {/* home */}
        <Link
          className="flex flex-col items-center text-sm text-gray-400"
          to={"/"}
        >
          <GrHomeRounded className="text-xl stroke-gray-400" />
          Home
        </Link>

        {/* payment */}
        <Link
          className="flex flex-col items-center text-sm text-[#4541a2]"
          to={"/checkout"}
        >
          <FaCreditCard className="text-xl fill-[#4541a2]" />
          Payment
        </Link>
        {/* cart */}
        <Link
          className="flex flex-col items-center text-sm text-[#4541a2]"
          to={"/cart"}
        >
          <FaShoppingBag className="text-xl fill-[#4541a2]" />
          <div
            style={{ transform: `scale(${scaleNo})` }}
            className="text-sm px-1 mx-1"
          >
            Cart {itemsInCart ? itemsInCart : "0"}
          </div>
        </Link>
        {/* settings */}
        <Link className="flex flex-col items-center text-sm text-gray-400">
          <IoSettingsOutline className="text-xl stroke-gray-400" />
          Settings
        </Link>
      </div>
    </>
  );
}

export default Footer;
