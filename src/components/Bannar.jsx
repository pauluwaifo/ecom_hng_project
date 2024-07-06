import background from "../assets/background_image.jpg";

function Bannar() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${background})`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
      className={`flex w-full border mt-24 py-24 px-16 flex-row h-[580px] text-white`}
    >
        <div className="basis-3/5 wrap">

        <p className="text-xl">Free shipping on all orders within Lagos</p>
        <p className="text-6xl mt-2">Free shipping on all order within Lagos</p>
        <button className="bg-[#F31010] px-[27.9px] py-[12px] mt-5">
            Shop now
        </button>
        </div>
    </div>
  );
}

export default Bannar;
