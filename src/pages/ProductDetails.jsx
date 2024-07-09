import { useParams } from "react-router-dom";
import products from "../products";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="mt-24">
      {products.map((item) => (item.id == id ? <div></div> : null))}
    </div>
  );
}

export default ProductDetails;
