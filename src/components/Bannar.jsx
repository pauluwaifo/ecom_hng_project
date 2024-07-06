import background from "../assets/img_2829_720.jpg";

function Bannar() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${background})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className={`flex w-full sm:justify-center sm:items-end sm:text-center lg:justify-start lg:text-left border mt-24 sm:p-5 lg:py-24 lg:px-16 flex-row h-[580px] text-white`}
    >
      <div className="sm:basis-full lg:basis-3/5 wrap">
        <p className="sm:text-sm lg:text-xl">
          Free shipping on all orders within Lagos
        </p>
        <p className="sm:text-4xl lg:text-6xl mt-2">
          Free shipping on all order within Lagos
        </p>
        <button className="bg-[#F31010] px-[27.9px] py-[12px] mt-5">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Bannar;
