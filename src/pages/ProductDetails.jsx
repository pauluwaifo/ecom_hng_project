import { useParams } from "react-router-dom";
import { products } from "../products";
function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="mt-32">
      {products.map((item) =>
        item.id == id ? (
          <div className="flex flex-row flex-wrap pb-28 p-5">
            <div className="basis-3/12 border">
              <img className="w-full" src={`/assets/${item.image[0]}`} alt={item.name} />
            </div>
            <div className="basis-9/12 flex flex-col p-5">
            <div className="w-3/5">
              <h1 className="text-4xl font-bold">{item.name}</h1>
              <h2 className="text-2xl font-semibold mt-10">Description</h2>
              <p className="text-lg mt-5">{item.description}</p> 
          
            </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default ProductDetails;
