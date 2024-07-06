import TopBar from "./Topbar";
import Nav from "./Nav";


function NavBar() {
  return (
    <div className="w-full fixed flex flex-col shadow">
      <TopBar />
      <Nav />
    </div>
  );
}

export default NavBar;
