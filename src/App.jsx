import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

// pages
import Nav from "./components/nav";
import Home from "./pages/home";
import Products from "./pages/products";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
