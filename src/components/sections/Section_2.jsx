import Card from "../utility/Card";
import { Link } from "react-router-dom";
import { products } from "../../products";

function Section_2() {
  return (
    <div className="flex wrap flex-col mt-24">
      {/* heading */}
      <div className="flex sm:flex-col lg:flex-row wrap sm:items-center">
        <div className="sm:basis-full basis-1/2">
          <p className="sm:text-2xl text-4xl font-semibold">Top products</p>
        </div>

        <div className="basis-1/2 lg:text-[1.2rem] flex justify-end lg:font-semibold">
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
      <div className="flex flex-row mt-5 flex-wrap sm:justify-center lg:justify-start">
        {products && products.map((item) => <Card key={item.id} url={"src/assets/"} item={item}/>)}
      </div>
    </div>
  );
}

export default Section_2;
