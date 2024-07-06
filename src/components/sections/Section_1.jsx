import image from "../../assets/jeroen-den-otter-2b0JeJTEclQ-unsplash.png";

function Section_1() {
  return (
    <div className="flex sm:flex-col lg:flex-row justify-center items-center">
      <div className="sm:my-[-25px] lg:my-[-100px] sm:basis-64 lg:basis-80">
        <img className="lg:w-full sm:w-[150px]" src={image} alt={image} />
      </div>
      <div className="sm:items-center lg:text-left sm:text-center sm:mt-[0] lg:mt-[100px] sm:p-0 lg:px-14">
        <p className="text-[#10A2F3] sm:text-2xl lg:text-6xl font-normal">DE CHANEL SPECIALS</p>
        <p className="text-[#10A2F3] text-xl">
          Free shipping on all order within Lagos
        </p>
        <p className="sm:mt-2 mt-5 text-2xl text-center flex lg:justify-start sm:justify-center">
          “You are never fully dressed
          <br /> without a perfume”
        </p>
      </div>
    </div>
  );
}

export default Section_1;
