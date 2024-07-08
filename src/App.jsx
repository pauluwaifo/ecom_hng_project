import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
