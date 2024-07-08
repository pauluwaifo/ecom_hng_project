import Card from "../utility/Card";
import { Link } from "react-router-dom";
import { products } from "../../products";

function Section_2() {
  return (
    <div className="flex wrap flex-col lg:mt-24 sm:mt-10 sm:pb-20">
      {/* heading */}
      <div className="flex sm:flex-col lg:flex-row wrap sm:items-start">
        <div className="sm:basis-full basis-1/2">
          <p className="sm:text-2xl lg:text-4xl lg:font-semibold ">Top products</p>
        </div>

        <div className="basis-1/2 lg:text-[1.2rem] flex justify-end lg:font-semibold sm:mt-2 lg:mt-none">
          <Link className="mx-2 sm:border lg:border-none sm:px-1 lg:px-none sm:rounded-lg" to={"/"}>
            LATEST
          </Link>
          <Link className="mx-2 sm:border lg:border-none sm:px-1 lg:px-none sm:rounded-lg" to={"/"}>
            BEST SELLER
          </Link>
          <Link className="mx-2 sm:border lg:border-none sm:px-1 lg:px-none sm:rounded-lg" to={"/"}>
            FEATURED
          </Link>
        </div>
      </div>
      {/* product listing */}
      <div className="flex flex-row mt-5 flex-wrap sm:justify-center lg:justify-start">
        {products && products.map((item) => <Card key={item.id} item={item}/>)}
      </div>
    </div>
  );
}

export default Section_2;
