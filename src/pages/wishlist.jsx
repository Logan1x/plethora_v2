import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDataContext } from "../contexts/dataContext";
import { useAuth } from "../contexts/authContext";
import notFoundImage from "../assets/undraw_refreshing_beverage_td3r.svg";

export default function Wishlist() {
  const { state, dispatch, postCartData, removeFromWishlist } =
    useDataContext();
  const { token } = useAuth();

  const checkInCart = (id) => {
    if (state.cartData.length > 0) {
      return state.cartData.find((item) => item._id === id);
    }
  };

  useEffect(() => {}, [state.WishlistData]);

  return (
    <div>
      {state.wishlistData.length > 0 ? (
        <div className="container-main">
          <main className="container-pages">
            <h3 className="product-title-left">
              <span>Showing All Results</span> (found{" "}
              {state.wishlistData.length} results)
            </h3>
            <div className="product-card-parent">
              {state.wishlistData &&
                state.wishlistData.map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="product-img">
                      <img src={product.imgSrc} alt="product" />
                    </div>
                    <div className="product-details">
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
                      <div className="product-btn">
                        {checkInCart(product._id) ? (
                          <Link to="/cart">
                            <button>Go to cart</button>
                          </Link>
                        ) : (
                          <button
                            onClick={() =>
                              postCartData(product, token, dispatch)
                            }
                          >
                            Move to cart
                          </button>
                        )}
                      </div>
                      <div className="product-btn">
                        <button onClick={() => removeFromWishlist(product._id)}>
                          Remove from Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </main>
        </div>
      ) : (
        <div className="cart-title-center">
          <h3>Your wishlist is empty</h3>
          <img className="notFound-image" src={notFoundImage} alt="" />
        </div>
      )}
    </div>
  );
}
