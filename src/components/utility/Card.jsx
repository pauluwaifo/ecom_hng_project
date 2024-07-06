import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

function Card({ item }) {
  return (
    <div className="basis-4/12 border-2 mx-1 p-2" key={item.id}>
      <div className="w-full h-80">
          <img  src={item.image[0]} alt={item.name} />
      </div>

      <div className="flex items-center">
        <IoStar className="text-[#f7cb38]" />
        <IoStar className="text-[#f7cb38]" />
        <IoStar className="text-[#f7cb38]" />
        <IoStar className="text-[#f7cb38]" />
        <IoStarHalf className="text-[#f7cb38] " />
      </div>
      <p>{item.name}</p>
      <div className="flex flex-row justify-between mt-2 items-center">
        <p className="font-bold text-xl ">${item.price.toFixed(2)}</p>
        <button className="text-sm px-2 py-1 h-full bg-[#d9d9d9] font-bold">Add to bag</button>
      </div>
    </div>
  );
}

export default Card;
