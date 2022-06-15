import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Mockman from "mockman-js";

// pages
import Nav from "./components/nav";
import Home from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import NotFound from "./pages/notFound";
import Checkout from "./pages/checkout";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* toast notification */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
