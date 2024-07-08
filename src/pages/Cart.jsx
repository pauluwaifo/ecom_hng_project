import { useContext, useEffect, useState } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import AppContext from "../context/AppContext";

function Cart() {
  const { cart, dispatch, setAlert, setMessage, setAlert_bg } =
    useContext(AppContext);
  const [payMethod, setPayMethod] = useState(1);

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
    cart && cart.reduce((accumulator, item) => accumulator + item.price, 0);
  return (
    <div className="flex flex-row flex-wrap mt-28 p-10">
      {/* cart items */}
      <div className="flex flex-col flex-wrap lg:basis-3/4 sm:basis-full p-2">
        {/* heading */}
        <h1 className="text-4xl font-bold ">Shopping Bag</h1>
        {/* divider */}
        <div className="border-b-2 mt-3"></div>

        <table className="mt-12">
          <thead>
            <tr className="px-2">
              <th className="text-left " colSpan={2}>
                Products
              </th>
              <th className="text-left">Size</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Total price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="p-5">
              <td className="p-2"></td>
            </tr>
            {/* items */}
            {cart && cart.length > 0 ? (
              cart.map((item) => (
                <tr className="items-center border-t-[1.5px] mt-5 p-5">
                  {/* image, product info... */}
                  <td className="w-36">
                    {/* image */}
                    <img
                      src={`/assets/${item.image[0]}`}
                      alt={item.name}
                      width={"100%"}
                    />
                  </td>
                  {/* qty */}
                  <td className="flex flex-col justify-center min-h-36 p-2">
                    {/* text */}
                    <p className="font-semibold">Perfume</p>
                    <div className="flex items-center">
                      <IoStar className="text-[#f7cb38]" />
                      <IoStar className="text-[#f7cb38]" />
                      <IoStar className="text-[#f7cb38]" />
                      <IoStar className="text-[#f7cb38]" />
                      <IoStarHalf className="text-[#f7cb38] " />
                    </div>
                    <p>{item.name}</p>
                  </td>

                  {/* item size */}
                  <td>
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
                  <td className="font-bold text-xl">
                    ${(item.price * item.qty).toFixed(2)}
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
              ))
            ) : (
              <p>No products in cart</p>
            )}
          </tbody>
        </table>

        <section className="items-end flex flex-col px-10">
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

      {/* payment method */}
      <div className="lg:basis-1/4 border-2 bg-[#fafafa] max-h-[560px] mt-16 rounded-lg p-4">
        <h2 className="font-bold text-2xl mt-5">You're almost there!</h2>
        <p className="mt-3 font-semibold">Payment method</p>

        <form>
          {/* radio buttons payment method credit card */}
          <section className="flex items-center mt-2">
            <input
              checked={payMethod == 1 ? true : false}
              type="radio"
              id="payment"
              name="credit-card"
              value="credit-card"
              onClick={() => setPayMethod(1)}
            />
            <label
              htmlFor="payment"
              className="font-semibold flex flex-row text-sm items-center mx-2"
            >
              <FaCreditCard className="mx-2 text-lg" />
              <span className="mx-2">Credit card</span>
            </label>
          </section>

          {/* radio buttons payment method paypal */}
          <section className="flex items-center mt-2">
            <input
              checked={payMethod !== 1 ? true : false}
              type="radio"
              id="payment2"
              name="paypal"
              value="paypal"
              onClick={() => setPayMethod(2)}
            />{" "}
            <label
              htmlFor="payment2"
              className="font-semibold flex flex-row text-sm items-center mx-2"
            >
              <FaPaypal className="mx-2 text-lg" />
              <span className="mx-2">Paypal</span>
            </label>
          </section>

          {/* first and last name */}
          <section className="flex flex-row flex-wrap mt-8">
            <div className="basis-1/2 ">
              <label className="font-semibold" htmlFor="firstname">
                First name
              </label>
              <input
                className="bg-white w-28 mt-2 outline-0 border-0 px-2 mx-1 placeholder:text-gray-600"
                id="firstname"
                type="text"
                placeholder="First name"
              />
            </div>

            <div className="basis-1/2">
              <label className="font-semibold" htmlFor="lastname">
                Last name
              </label>
              <input
                className="bg-white w-28 mt-2 outline-0 border-0 px-1 mx-1 placeholder:text-gray-600"
                id="lastname"
                type="text"
                placeholder="Last name"
              />
            </div>
          </section>

          {/* credit card number */}
          <section className="flex flex-row items-center flex-wrap mt-8">
            <div className="basis-full flex-col flex ">
              <label className="font-semibold" htmlFor="firstname">
                Card number
              </label>
              <div className="bg-white w-full px-2 flex flex-row items-center">
                <FaCreditCard />
                <input
                  className="bg-white w-full outline-0 border-0 mx-1 placeholder:text-gray-600"
                  id="firstname"
                  type="text"
                  autoComplete="cc-number"
                />
              </div>
            </div>
          </section>

          {/* expiration date */}
          <section className="flex flex-row flex-wrap mt-8">
            <div className="basis-[30%] ">
              <label className="font-semibold" htmlFor="firstname">
                Expiration
              </label>

              <input
                className="bg-white w-16 mt-2 outline-0 border-0 px-1 py-1 mx-1 placeholder:text-gray-600"
                id="day"
                type="number"
                placeholder="05"
              />
            </div>

            <div className="basis-[20%] ">
              <label className="font-semibold" htmlFor="firstname">
                date
              </label>
              <input
                className="bg-white w-16 mt-2 outline-0 border-0 px-1 py-1 mx-1 placeholder:text-gray-600"
                id="year"
                type="number"
                placeholder="2026"
              />
            </div>

            <div className="basis-[30%] text-center">
              <label className="" htmlFor="firstname">
                CVV
              </label>
              <input
                className="bg-white w-16 mt-2 outline-0 border-0 px-1 py-1 mx-1 placeholder:text-gray-600"
                id="year"
                type="number"
                placeholder="295"
              />
            </div>
          </section>

          {/* button */}
          <section className="flex items-center flex-row justify-center mt-20">
            <button
              type="button"
              className="bg-[#e64844] text-white font-bold px-5 w-56 rounded-lg py-2"
            >
              check out
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Cart;
