import React, { useState, useEffect } from "react";
import { useDataContext } from "../contexts/dataContext";
import { useFilterHook } from "../hooks/filterHook";

export default function Products() {
  const { state, dispatch } = useDataContext();
  const { filteredData } = useFilterHook();

  const maxValue = state.data.reduce(
    (acc, curr) => (Number(curr.price) > acc ? (acc = curr.price) : acc),
    0
  );

  return (
    <div className="container-aside-layout">
      <aside className="sidebar">
        <div className="sidebar-heading">
          <h4>Filters</h4>
          <p
            className="clear-btn"
            onClick={() => dispatch({ type: "CLEAR_FILTER" })}
          >
            clear
          </p>
        </div>

        <div>
          <h4>Price</h4>
          <div className="price-range-slider">
            <p>1</p>
            {state.filterByPriceRange === 15000 ? (
              ""
            ) : (
              <p>{state.filterByPriceRange}</p>
            )}
            <p>{maxValue}</p>
          </div>
          <input
            type="range"
            min="1"
            value={state.filterByPriceRange}
            max="15000"
            className="slider"
            id="myRange"
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_PRICE_RANGE",
                payload: e.target.value,
              })
            }
          ></input>
        </div>
        <div>
          <h4>Rating</h4>
          <form action="">
            <div>
              <input
                type="radio"
                id="rating-1"
                name="rating"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_RATING", payload: "4_AND_ABOVE" })
                }
                checked={state.filterByRating === "4_AND_ABOVE"}
              />
              <label htmlFor="rating-1"> 4 star and above</label>
            </div>
            <div>
              <input
                type="radio"
                id="rating-2"
                name="rating"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_RATING", payload: "3_AND_ABOVE" })
                }
                checked={state.filterByRating === "3_AND_ABOVE"}
              />
              <label htmlFor="rating-2"> 3 star and above</label>
            </div>
            <div>
              <input
                type="radio"
                id="rating-3"
                name="rating"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_RATING", payload: "2_AND_ABOVE" })
                }
                checked={state.filterByRating === "2_AND_ABOVE"}
              />
              <label htmlFor="rating-3"> 2 star and above</label>
            </div>
            <div>
              <input
                type="radio"
                id="rating-4"
                name="rating"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_RATING", payload: "1_AND_ABOVE" })
                }
                checked={state.filterByRating === "1_AND_ABOVE"}
              />
              <label htmlFor="rating-4"> 1 star and above</label>
            </div>
          </form>
        </div>
        <div>
          <h4>Sort By</h4>
          <form action="" className="sort-selection-radio">
            <div>
              <input
                type="radio"
                id="priceHigh"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
                }
                checked={state.sortBy === "HIGH_TO_LOW"}
              />
              <label htmlFor="priceHigh">Price: High to Low</label>
            </div>
            <div>
              <input
                type="radio"
                id="priceLow"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
                }
                checked={state.sortBy === "LOW_TO_HIGH"}
              />
              <label htmlFor="priceLow">Price: Low to High</label>
            </div>
          </form>
        </div>
      </aside>
      <main className="container-pages">
        <h3 className="product-title-left">
          <span>Showing All Results</span> (found {filteredData.length} results)
        </h3>
        <div className="product-card-parent">
          {filteredData &&
            filteredData.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-img">
                  <img src={product.imgSrc} alt="" />
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
