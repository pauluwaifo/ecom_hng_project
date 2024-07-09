import background from "../../assets/img_2829_720.jpg";

function Bannar() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${background})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className={`flex w-full sm:justify-start sm:items-center lg:justify-start lg:text-left border lg:mt-24 sm:mt-32 sm:p-5 lg:py-24 lg:px-16 flex-row lg:h-[580px] sm:h-[200px] text-white sm:rounded-2xl lg:rounded-none`}
    >
      <div className="sm:basis-3/4 lg:basis-3/5 wrap">
        <p className="sm:text-[.6rem] lg:text-xl">
          Free shipping on all orders within Lagos
        </p>
        <p className="sm:text-xl lg:text-6xl lg:mt-2 ">
          Free shipping on all order within Lagos
        </p>
        <button className="bg-[#F31010] lg:px-[27.9px] lg:py-[12px] lg:mt-5 sm:mt-2 sm:text-sm sm:px-[5px] sm:py-[3px]">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Bannar;
