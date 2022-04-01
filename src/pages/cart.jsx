import { useState, useEffect } from "react";
import { useDataContext } from "../contexts/dataContext";

export default function Cart() {
  const { state, dispatch } = useDataContext();

  const getCartData = () => state.cartData;

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(getCartData());
  }, []);

  return (
    <main className="container-pages">
      <h1 className="cart-title-center">Your Cart</h1>
      {cartData.length > 0 ? (
        <div className="cart-product-checkout-cards">
          <div className="cart-item-card-parent">
            {cartData &&
              cartData.map((item) => {
                return (
                  <div className="cart-card" key={item.id}>
                    <div className="cart-img">
                      <img src={item.imgSrc} alt="" />
                    </div>
                    <div className="cart-details">
                      <h3 className="cart-title">{item.title}</h3>
                      <div className="cart-price-rating">
                        <div className="cart-price">
                          <p>${item.price}</p>
                          <p className="cart-price-old">${item.price + 20}</p>
                        </div>
                        <div className="cart-price-off">50% off</div>
                      </div>
                      <div className="cart-item-quantity">
                        <p className="cart-item-quantity-title">Quantity :</p>
                        <div className="cart-quantity-btn">
                          <button className="cart-quantity-btn-minus">-</button>
                          <input type="text" value="1" />
                          <button className="cart-quantity-btn-plus">+</button>
                        </div>
                      </div>
                      <div className="cart-btn">
                        <button className="cart-remove-btn">
                          Remove from Cart
                        </button>
                        <button>Move to Wishlist</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="cart-total-checkout">
            <div className="cart-total">
              <div className="cart-total-title">
                <h3>Cart Total</h3>
              </div>
              <div className="cart-total-price">
                <div className="cart-total-row">
                  <p>Price(2 items)</p>
                  <p>$4999</p>
                </div>
                <div className="cart-total-row">
                  <p>Discount</p>
                  <p>-$999</p>
                </div>
                <div className="cart-total-row">
                  <p>Delivary Charges</p>
                  <p>$99</p>
                </div>
                <div className="cart-total-row cart-final-amount">
                  <p>Total Amount</p>
                  <p>$4099</p>
                </div>
              </div>
            </div>
            <div className="cart-btn cart-checkout">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-title-center">
          <h3>Your cart is empty</h3>
        </div>
      )}
    </main>
  );
}
