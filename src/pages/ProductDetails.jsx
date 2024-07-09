import { useParams } from "react-router-dom";
import { products } from "../products";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

function ProductDetails() {
  const { id } = useParams();
  const [display_details, setDisplay_details] = useState(false);
  const [display_shipping, setDisplay_shipping] = useState(false);
  const { dispatch, setAlert, setMessage, setAlert_bg } =
    useContext(AppContext);

  const [qty, setQty] = useState(Number(0))
  console.log(qty)

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
            <div className="basis-2/5 border h-[520px] overflow-hidden">
              <img
                className="w-full"
                src={`/assets/${item.image[0]}`}
                alt={item.name}
              />
            </div>
            <div className="basis-3/5 flex flex-col p-5">
              <div >
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
                    <select onClick={(e)=> setQty(e.target.value)}className="border border-black w-32 mx-2">
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
          </div>
        ) : null
      )}
    </div>
  );
}

export default ProductDetails;
