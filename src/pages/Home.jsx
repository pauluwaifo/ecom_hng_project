import Bannar from "../components/sections/Bannar";
import Section_1 from "../components/sections/Section_1";
import Section_2 from "../components/sections/Section_2";


function Home() {
  return (
    <div className="flex flex-col">
      {/* banner */}
      <Bannar />
      {/* sections */}
      <div className="sm:p-2 lg:px-24">
        <Section_1 />
        <Section_2 />
      </div>
    </div>
  );
}

export default Home;
