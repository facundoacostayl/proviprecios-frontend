// REACT ROUTER
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/brand/:brandId" element={<Products />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
