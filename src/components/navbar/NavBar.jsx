import TopBar from "./Topbar";
import Nav from "./Nav";
import CartNav from "./CartNav";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [path, setPath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/cart" || location.pathname == "/checkout") {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [location]);

  return (
    <div className="w-full fixed flex flex-col top-0 left-0">
      {path ? (
        <CartNav />
      ) : (
        <>
          <TopBar />
          <Nav />
        </>
      )}
    </div>
  );
}

export default NavBar;
