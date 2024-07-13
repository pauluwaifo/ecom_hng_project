import { useContext, useEffect, useState } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function CheckoutMobile() {
  const [payment, setPayment] = useState(false);
  const { cart, dispatch, setAlert, setMessage, setAlert_bg } =
    useContext(AppContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    const prices = cart.map((item) => item.qty * item.current_price);
    const totalAmount = prices.reduce(
      (accumulator, item) => accumulator + item,
      0
    );
    setTotal(totalAmount);
  }, [cart]);

  const nav = useNavigate();

  const PaymentPage = () => {
    return (
      <div
        className={`${
          payment ? "block" : "hidden"
        } top-0 left-0 w-full h-full bg-white/90 backdrop-blur-sm p-5 justify-center lg:hidden fixed z-10 flex flex-col mt-20`}
      >
        <div className="flex flex-row justify-between items-center mt-16">
          <p className="text-xl font-bold">ADD NEW CARD</p>
          <button
            onClick={() => setPayment(false)}
            className="text-white bg-gray-500 inline-block px-[10px] py-[2px] rounded-full"
          >
            x
          </button>
        </div>
        {/* card name */}
        <div className="mt-5">
          <label>Name on card</label>
          <div className="border w-full p-2 rounded-lg flex flex-row items-center justify-between">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Card name"
            />
            <p className="text-white bg-gray-500 inline-block px-[10px] py-[2px] rounded-full">
              x
            </p>
          </div>
        </div>
        {/* card number */}
        <div className="mt-5">
          <label>Card number</label>
          <div className="border w-full p-2 rounded-lg flex flex-row items-center justify-between">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Card number"
            />
            <p className="text-white bg-gray-500 inline-block px-[10px] py-[2px] rounded-full">
              x
            </p>
          </div>
        </div>
        {/* card expiration date */}
        <div className="flex mt-5 flex-row justify-between">
          <div className="mx-1">
            <label>Exp date</label>
            <input
              className="bg-transparent border w-40 p-2 rounded-lg"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className="mx-2">
            <label>Security code</label>
            <input
              className="bg-transparent border w-36 p-2 rounded-lg"
              type="text"
              placeholder="CVV"
            />
          </div>
        </div>
        {/* make payment button */}
        <div className="lg:hidden sm:basis-full px-5 mt-32">
          <button className="w-full text-white text-semibold rounded-xl bg-[#49a2f5] p-3">
            Save and Proceed
          </button>
        </div>
      </div>
    );
  };

  const handleDelete = (item) => {
    dispatch({ type: "DELETE_CART_ITEM", payload: item.id });
    setAlert(true);
    setMessage("1 ITEM DELETED FROM YOUR CART ");
    setAlert_bg("bg-red-500");
  };

  const handleAddQty = (item) => {
    dispatch({
      type: "UPDATE_ITEM_QTY",
      payload: { id: item.id, qty: item.qty + 1 },
    });
  };

  const handleSubQty = (item) => {
    dispatch({
      type: "UPDATE_ITEM_QTY",
      payload: { id: item.id, qty: item.qty - 1 },
    });
  };

  const totalPrice =
    cart &&
    cart.reduce((accumulator, item) => accumulator + item.current_price, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        nav("/cart");
        console.log("Browser window width:", window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        payment && "overflow-hidden h-[500px]"
      } flex flex-row flex-wrap mt-28 lg:p-10 sm:pb-28`}
    >
      <PaymentPage />
      {/* cart items */}
      <div className="flex flex-col flex-wrap lg:basis-3/4 sm:basis-full p-2">
        {/* heading */}
        <h1 className="text-4xl font-bold sm:hidden lg:block">Shopping Bag</h1>
        {/* divider */}
        <div className="border-b-2 mt-3 sm:hidden lg:block"></div>

        <table className="mt-12">
          <thead>
            <tr className="px-2">
              <th className="text-left " colSpan={2}>
                Products
              </th>
              <th className="text-left lg:table-cell sm:hidden">Size</th>
              <th className="text-left lg:table-cell sm:hidden">Quantity</th>
              <th className="text-left lg:table-cell sm:hidden">Total price</th>
              <th></th>
            </tr>
          </thead>

          {/* cart info */}
          <tbody>
            <tr className="p-5">
              <td className="p-2"></td>
            </tr>
            {/* items */}
            {cart && cart.length > 0 ? (
              cart.map((item) => (
                <>
                  <tr className="items-center lg:border-t-[1.5px] mt-5 lg:p-5 ">
                    {/* image, product info... */}
                    <td className="w-36">
                      {/* image */}
                      <img
                        src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                        alt={item.name}
                        width={"100%"}
                      />
                    </td>

                    {/* item-name */}
                    <td className="flex flex-col justify-center min-h-36 lg:p-2 sm:p-0">
                      {/* text */}
                      <p className="font-semibold">Perfume</p>
                      <p className="lg:hidden bg-gray-200 sm:inline-block text-center mt-2 text-sm px-2">
                        {item.size ? item.size : "NA"}
                      </p>
                      <div className="flex items-center sm:mt-2 lg:mt-none">
                        <IoStar className="text-[#f7cb38]" />
                        <IoStar className="text-[#f7cb38]" />
                        <IoStar className="text-[#f7cb38]" />
                        <IoStar className="text-[#f7cb38]" />
                        <IoStarHalf className="text-[#f7cb38] " />
                      </div>
                      <p className="sm:text-[12px] lg:text-lg sm:hidden lg:block">
                        {item.name}
                      </p>
                    </td>

                    {/* item size */}
                    <td className="sm:hidden lg:table-cell">
                      <p className="bg-gray-200 inline-block text-sm px-2">
                        {item.size ? item.size : "NA"}
                      </p>
                    </td>

                    {/* item qty */}
                    <td>
                      <div className="flex flex-row items-center justify-start">
                        <button
                          className="px-[7px] border rounded-full flex flex-row items-center justify-center"
                          onClick={() => handleSubQty(item)}
                        >
                          -
                        </button>
                        <p className="mx-1"> {item.qty} </p>
                        <button
                          className="px-[6px] border rounded-full flex flex-row items-center justify-center"
                          onClick={() => handleAddQty(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    {/* item price */}
                    <td className="font-bold lg:text-xl sm:px-5 lg:px-0 sm:text-sm">
                      ${(item.current_price * item.qty).toFixed(2)}
                    </td>
                    {/* delete button */}
                    <td className=" text-xl">
                      <button
                        onClick={() => handleDelete(item)}
                        className="px-2 py-1"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td colspan={2}>
                      <p className="sm:text-[12px] lg:text-lg lg:hidden p-0 mt-[-30px]">
                        {item.name}
                      </p>
                    </td>
                  </tr>
                </>
              ))
            ) : (
              <p>No products in cart</p>
            )}
          </tbody>
        </table>

        <section className="items-end sm:hidden lg:flex flex-col px-10">
          <div className="w-42 ">
            <p>
              Subtotal
              <b className="mx-3">${totalPrice && totalPrice.toFixed(2)}</b>
            </p>
            <p>
              Shipping<b className="mx-3">Free</b>
            </p>
            <p className="font-bold text-lg mt-5 flex ">
              Total:
              <span className="mx-3">
                ${totalPrice && totalPrice.toFixed(2)}
              </span>
            </p>
          </div>
        </section>
      </div>
      {/* delivery address */}
      <div className="lg:hidden sm:basis-full px-10 mt-10">
        <div className="flex flex-row justify-between border rounded-xl p-3 items-center">
          <p className="font-semibold text-sm">Delivery address</p>
          <p className="font-semibold flex items-center text-[10px]">
            Plot S24 Atlantic{" "}
            <IoIosArrowDown className="text-sm mx-2 text-red-500" />
          </p>
        </div>
        <div className="flex flex-row justify-end">Add a code</div>
      </div>

      {/* order summary */}
      <div className="lg:hidden sm:basis-full px-10 mt-10">
        <div className="flex flex-col border rounded-xl p-3 ">
          <p className="font-semibold">Order Summary</p>

          <div className="flex flex-row justify-between">
            <p>Order amount</p>
            <p className="text-blue-500">${total}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Sub - total</p>
            <p className="text-blue-500">${total}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Deliver charges</p>
            <p className="text-blue-500">$0</p>
          </div>
          <div className="border-t-2 mt-2"></div>
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Total Amount</p>
            <p className="text-red-500 font-semibold">
              ${cart.length > 0 ? total : "0"}
            </p>
          </div>
        </div>
      </div>

      {/* make payment button */}
      <div className="lg:hidden sm:basis-full px-10 mt-5">
        <button
          onClick={() => setPayment(true)}
          className="w-full text-white text-semibold rounded-xl bg-[#49a2f5] p-3"
        >
          Make payment
        </button>
      </div>
    </div>
  );
}

export default CheckoutMobile;
