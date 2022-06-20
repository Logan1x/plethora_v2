import React from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../contexts/dataContext";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function ProductDetail() {
  const { pid } = useParams();
  const { token } = useAuth();
  const { state, dispatch, postCartData, postWishlistData } = useDataContext();
  const product = state.data.find((product) => product._id === pid);

  const checkInCart = (id) => {
    if (state.cartData.length > 0) {
      return state.cartData.find((item) => item._id === id);
    }
  };

  const checkInWishlist = (id) => {
    if (state.wishlistData.length > 0) {
      return state.wishlistData.find((item) => item._id === id);
    }
  };

  return (
    <main className="container-auth">
      <div className="productDetail-card" key={product.id}>
        <div className="productDetail-img">
          <img src={product.imgSrc} alt="product" />
        </div>
        <div className="productDetail-contents">
          <h3>{product.title}</h3>
          <div className="product-price-rating">
            <div className="product-price">
              <span>{product.price}Rs.</span>
            </div>
            <div className="product-rating">
              <span>
                {product.rating}/5{" "}
                <span>
                  <i className="fas fa-star"></i>
                </span>
              </span>
            </div>
          </div>
          <div className="productDetail-btn">
            {checkInCart(product._id) ? (
              <Link to="/cart">
                <button className="productDetail-go-to-btn">Go to Cart</button>
              </Link>
            ) : (
              <button onClick={() => postCartData(product, token, dispatch)}>
                Add to cart
              </button>
            )}
          </div>
          <div className="productDetail-btn">
            {checkInWishlist(product._id) ? (
              <Link to="/wishlist">
                <button className="productDetail-go-to-btn">
                  Added to Wishlist
                </button>
              </Link>
            ) : (
              <button
                onClick={() => postWishlistData(product, token, dispatch)}
              >
                {" "}
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
