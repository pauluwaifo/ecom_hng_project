import axios from "axios";
import Card from "../utility/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Section_2() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetch = async () => {
      axios
        .get("./public/products.json")
        .then((res) => {
          setProducts(res.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetch();
  }, []);

  return (
    <div className="flex wrap flex-col mt-24">
      {/* heading */}
      <div className="flex flex-row">
        <div className="basis-1/2">
          <p className="text-4xl font-semibold">Top products</p>
        </div>
        <div className="basis-1/2 text-[1.2rem] flex justify-end font-semibold">
          <Link className="mx-2" to={"/"}>
            LATEST
          </Link>
          <Link className="mx-2" to={"/"}>
            BEST SELLER
          </Link>
          <Link className="mx-2" to={"/"}>
            FEATURED
          </Link>
        </div>
      </div>
      {/* product listing */}
      <div className="flex flex-row mt-5">
        {products && products.map((item) => <Card item={item} />)}
      </div>
    </div>
  );
}

export default Section_2;
