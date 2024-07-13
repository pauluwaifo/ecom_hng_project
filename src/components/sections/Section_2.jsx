import Card from "../utility/Card";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import React, { useContext, useState } from "react";

function Section_2() {
  const { products } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate total pages based on total products and items per page
  const totalPages = Math.ceil(products && products.length / itemsPerPage);

  // Slice products to display based on current page
  const displayProducts = products && products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col lg:mt-24 sm:mt-10 sm:pb-32">
      {/* heading */}
      <div className="flex sm:flex-col lg:flex-row wrap sm:items-start">
        <div className="sm:basis-full basis-1/2">
          <p className="sm:text-2xl lg:text-4xl lg:font-semibold">
            Top products
          </p>
        </div>

        <div className="basis-1/2 lg:text-[1.2rem] flex justify-end lg:font-semibold sm:mt-2 lg:mt-none">
          <Link
            className="mx-2 sm:border lg:border-none sm:px-1 lg:px-none sm:rounded-lg"
            to={"/"}
          >
            LATEST
          </Link>
          <Link
            className="mx-2 sm:border lg:border-none sm:px-1 lg:px-none sm:rounded-lg"
            to={"/"}
          >
            BEST SELLER
          </Link>
          <Link
            className="mx-2 sm:border lg:border-none sm:px-1 lg:px-none sm:rounded-lg"
            to={"/"}
          >
            FEATURED
          </Link>
        </div>
      </div>

      {/* product listing */}
      <div className="flex flex-row mt-5 flex-wrap sm:justify-center lg:justify-start">
        {displayProducts && displayProducts.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {/* pagination controls */}
      <div className="p-5 flex justify-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          {"<"}
        </button>
        <div className="mx-4 text-gray-800 font-bold py-2 px-4">
          {currentPage} of {totalPages}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Section_2;
