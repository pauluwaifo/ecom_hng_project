import Bannar from "../components/Bannar";
import Section_1 from "../components/sections/Section_1";
import Section_2 from "../components/sections/Section_2";

function Home() {
  return (
    <div className="flex flex-col">
      {/* banner */}
      <Bannar />
      {/* sections */}
      <div className="px-24">
        <Section_1 />
        <Section_2 />
      </div>
    </div>
  );
}

export default Home;
