import { useParams } from "react-router-dom";
import { products } from "../products";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

function ProductDetails() {
  const { id } = useParams();
  const [display_details, setDisplay_details] = useState(false);
  const [display_shipping, setDisplay_shipping] = useState(false);
  const { dispatch, setAlert, setMessage, setAlert_bg } =
    useContext(AppContext);

  const [qty, setQty] = useState(Number(1));
  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decrementQty = () => {
    if (qty <= 1) {
      setQty(1);
    } else {
      setQty((prevQty) => prevQty - 1);
    }
  };
  console.log(qty);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, qty } });
    setAlert(true);
    setMessage("1 ITEM ADDED TO YOUR CART ");
    setAlert_bg("bg-green-500");
  };

  return (
    <div className="mt-32">
      {products.map((item) =>
        item.id == id ? (
          <div key={item.id} className="flex flex-row flex-wrap pb-28 p-5">
            <div className="sm:full flex lg:basis-2/5 lg:border lg:h-[520px] overflow-hidden sm:items-center sm: justify-center">
              <img
                className="lg:w-3/4 sm:w-3/4"
                src={`/assets/${item.image[0]}`}
                alt={item.name}
              />
            </div>

            {/* desktop view */}
            <div className="basis-3/5 sm:hidden lg:flex flex-col p-5">
              <div>
                <h1 className="text-4xl font-bold">{item.name}</h1>
                <h2 className="text-2xl font-semibold mt-10">Description</h2>
                <p className="text-lg mt-5">{item.description}</p>
                {/* product more details button */}
                <>
                  <button
                    onClick={() => setDisplay_details(!display_details)}
                    className="flex flex-row items-center font-semibold mt-5"
                  >
                    Product details{" "}
                    {display_details ? (
                      <IoIosArrowUp className="text-sm mx-2" />
                    ) : (
                      <IoIosArrowDown className="text-sm mx-2" />
                    )}
                  </button>
                  <>
                    {display_details && (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum exercitationem nulla obcaecati. Illum nisi omnis
                        debitis pariatur iste vero sunt nobis repellat optio,
                        adipisci hic reiciendis, provident harum tempora
                        voluptas!
                      </p>
                    )}
                  </>
                </>

                {/* shipping and returns button */}
                <>
                  <button
                    onClick={() => setDisplay_shipping(!display_shipping)}
                    className="flex flex-row items-center font-semibold mt-1"
                  >
                    Shipping & Returns{" "}
                    {display_shipping ? (
                      <IoIosArrowUp className="text-sm mx-2" />
                    ) : (
                      <IoIosArrowDown className="text-sm mx-2" />
                    )}
                  </button>
                  <>
                    {display_shipping && (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum exercitationem nulla obcaecati. Illum nisi omnis
                        debitis pariatur iste vero sunt nobis repellat optio,
                        adipisci hic reiciendis, provident harum tempora
                        voluptas!
                      </p>
                    )}
                  </>
                </>

                {/* size and qty */}
                <div className="flex flex-row flex-wrap mt-5">
                  <section className="flex flex-row ">
                    <label className="font-semibold">Size</label>
                    <select className="border border-black w-32 mx-2">
                      <option disabled={true} value={"size"} selected>
                        Size
                      </option>
                    </select>
                  </section>

                  <section className="flex flex-row ">
                    <label className="font-semibold">Size</label>
                    <select
                      onClick={(e) => setQty(e.target.value)}
                      className="border border-black w-32 mx-2"
                    >
                      <option
                        disabled={true}
                        defaultValue={"quantity"}
                        selected
                      >
                        Quantity
                      </option>
                      {Array.from({ length: item.inStock + 1 }, (_, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </section>
                </div>

                <p className="mt-5 font-semibold text-lg">
                  price:{" "}
                  <b className="mx-5 text-xl">${item.price.toFixed(2)}</b>
                </p>
                <div className="flex items-center justify-center mt-8">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#e31000] px-8 py-2 font-semibold text-white"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>

            {/* mobile view */}
            <div className="sm:flex lg:hidden flex-col basis-full p-2">
              {/* name and price */}
              <div className="flex flex-row justify-between">
                <h1 className="font-semibold">{item.name}</h1>
                <p>${item.price.toFixed(2)}</p>
              </div>

              {/* review and size */}
              <div className="flex flex-row flex-wrap">
                <div className="flex items-center">
                  <IoStar className="text-[#f7cb38]" />
                  <IoStar className="text-[#f7cb38]" />
                  <IoStar className="text-[#f7cb38]" />
                  <IoStar className="text-[#f7cb38]" />
                  <IoStarHalf className="text-[#f7cb38] " />
                </div>
                <p className="text-sm mx-2">4.5 rating</p>
                <div className="basis-full">
                  <p className="px-3 py-1 inline-block rounded-xl bg-gray-200 mt-2">
                    125 ml
                  </p>
                </div>
              </div>
              {/* description */}
              <>
                <p className="mt-5 font-semibold ">Description</p>
                <p className="text-sm mt-2">{item.description}</p>
              </>

              {/* button qty and add to cart*/}
              <div className="flex-row flex mt-24 justify-between items-center">
                <div className="flex flex-row items-center h-12 justify-start bg-gray-200 px-3 py-2 rounded-xl">
                  <button
                    onClick={() => decrementQty()}
                    className="px-[10px] border border-black rounded-full flex flex-row items-center justify-center"
                  >
                    -
                  </button>
                  <p className="mx-5"> {qty} </p>
                  <button
                    onClick={() => incrementQty()}
                    className="px-[8px] border border-black rounded-full flex flex-row items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#49a2f5] text-white rounded-xl px-10 py-4"
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default ProductDetails;
