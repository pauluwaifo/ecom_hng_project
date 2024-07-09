import TopBar from "./Topbar";
import Nav from "./Nav";
import CartNav from "./CartNav";


import { useEffect, useState } from "react";
import { useLocation, useMatch } from "react-router-dom";

function NavBar() {
  const matchCart = useMatch("/cart");
  const matchCheckout = useMatch("/checkout");
  const matchProduct = useMatch("/product/:id");
  const [path, setPath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (matchCart || matchCheckout || matchProduct) {
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
