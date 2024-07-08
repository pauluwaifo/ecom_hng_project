import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import CartContext from "./context/CartContext";
import Alert from "./components/utility/Alert";

function App() {
  return (
    <CartContext>
      <NavBar />
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </CartContext>
  );
}

export default App;
