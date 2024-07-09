import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import CartContext from "./context/CartContext";
import Alert from "./components/utility/Alert";
import CheckoutMobile from "./pages/CheckoutMobile";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <CartContext>
      <NavBar />
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutMobile />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </CartContext>
  );
}

export default App;
