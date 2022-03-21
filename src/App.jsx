import "./App.css";
import { Routes, Route } from "react-router-dom";

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
        <Route path="products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
