import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/api/products");
      // console.log(response.data);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-aside-layout">
      <aside className="sidebar">
        <div className="sidebar-heading">
          <h4>Filters</h4>
          <p>clear</p>
        </div>
        <div>
          <h4>Color</h4>
          <form className="color-selection-checkbox">
            <div>
              <input type="checkbox" id="red" name="red" />
              <label htmlFor="red">red</label>
            </div>
            <div>
              <input type="checkbox" id="orange" name="orange" />
              <label htmlFor="orange">orange</label>
            </div>
            <div>
              <input type="checkbox" id="blue" name="blue" />
              <label htmlFor="blue">blue</label>
            </div>
            <div>
              <input type="checkbox" id="green" name="green" />
              <label htmlFor="green">green</label>
            </div>
          </form>
        </div>
        <div>
          <h4>Sort By</h4>
          <form action="" className="sort-selection-radio">
            <div>
              <input type="radio" id="priceHigh" name="sort" />
              <label htmlFor="priceHigh">Price: High to Low</label>
            </div>
            <div>
              <input type="radio" id="priceLow" name="sort" />
              <label htmlFor="priceLow">Price: Low to High</label>
            </div>
          </form>
        </div>
      </aside>
      <main className="container-pages">
        <h3 className="product-title-left">Showing All Results...</h3>
        <div className="product-card-parent">
          {/* <div className="product-card">
            <div className="product-img">
              <img src="../assets/productImage1.jpg" alt="" />
            </div>
            <div className="product-details">
              <h3>Adult Leisure MTB Cycle</h3>
              <div className="product-price-rating">
                <div className="product-price">
                  <span>$100</span>
                </div>
                <div className="product-rating">
                  <span>
                    4.2/5{" "}
                    <span>
                      <i className="fas fa-star"></i>
                    </span>
                  </span>
                </div>
              </div>
              <div className="product-btn">
                <button>Add to Wishlist</button>
              </div>
              <div className="product-btn product-go-to-cart">
                <button>Go to Cart</button>
              </div>
            </div>
            <div className="product-wishlist">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
          </div> */}

          {products &&
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <div className="product-price-rating">
                    <div className="product-price">
                      <span>{product.price}Rs.</span>
                    </div>
                    <div className="product-rating">
                      <span>
                        4.2/5{" "}
                        <span>
                          <i className="fas fa-star"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="product-btn">
                    <button>Add to Wishlist</button>
                  </div>
                  <div className="product-btn">
                    <button>Add to cart</button>
                  </div>
                </div>
                <div className="product-wishlist">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
