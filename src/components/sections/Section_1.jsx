import image from "../../assets/jeroen-den-otter-2b0JeJTEclQ-unsplash.png";

function Section_1() {
  return (
    <div className="flex flex-row justify-center">
      <div className="my-[-100px] basis-80">
        <img src={image} alt={Section_1} width={"100%"} />
      </div>
      <div className="basis mt-[100px] px-14">
        <p className="text-[#10A2F3] text-6xl font-normal">DE CHANEL SPECIALS</p>
        <p className="text-[#10A2F3] text-xl">
          Free shipping on all order within Lagos
        </p>
        <p className="mt-5 text-2xl text-center flex justify-start">
          “You are never fully dressed
          <br /> without a perfume”
        </p>
      </div>
    </div>
  );
}

export default Section_1;
