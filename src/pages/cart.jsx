import { useState, useEffect } from "react";
import { useDataContext } from "../contexts/dataContext";
import { cartCheckoutNotify } from "../utils/utilCartWishFuncs";
import notFoundImage from "../assets/undraw_refreshing_beverage_td3r.svg";

export default function Cart() {
  const { state, removeFromCart, increaseItemQuantity, decreaseItemQuantity } =
    useDataContext();

  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getCartData = () => state.cartData;

  const getTotalPrice = () => {
    if (state.cartData.length > 0) {
      return state.cartData.reduce(
        (acc, curr) => (acc += Number(curr.price) * Number(curr.qty)),
        0
      );
    }
  };

  useEffect(() => {
    setCartData(getCartData());
    setTotalPrice(getTotalPrice());
  }, [state.cartData]);

  return (
    <div>
      {cartData.length > 0 ? (
        <div className="container-main">
          <main className="container-pages">
            <h1 className="cart-title-center">Your Cart</h1>

            <div className="cart-product-checkout-cards">
              <div className="cart-item-card-parent">
                {cartData &&
                  cartData.map((item) => {
                    return (
                      <div className="cart-card" key={item._id}>
                        <div className="cart-img">
                          <img src={item.imgSrc} alt="product in cart" />
                        </div>
                        <div className="cart-details">
                          <h3 className="cart-title">{item.title}</h3>
                          <div className="cart-price-rating">
                            <div className="cart-price">
                              <p>${item.price}</p>
                              <p className="cart-price-old">
                                ${Number(item.price) * 2}
                              </p>
                            </div>
                            <div className="cart-price-off">50% off</div>
                          </div>
                          <div className="cart-item-quantity">
                            <p className="cart-item-quantity-title">
                              Quantity :
                            </p>
                            <div className="cart-quantity-btn">
                              {item.qty > 1 ? (
                                <button
                                  className="cart-quantity-btn-minus"
                                  onClick={() => decreaseItemQuantity(item._id)}
                                >
                                  -
                                </button>
                              ) : (
                                <button
                                  className="cart-quantity-btn-minus"
                                  onClick={() => removeFromCart(item._id)}
                                >
                                  -
                                </button>
                              )}
                              <input type="text" value={item.qty} />
                              <button
                                className="cart-quantity-btn-plus"
                                onClick={() => increaseItemQuantity(item._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="cart-btn">
                            <button
                              className="cart-remove-btn"
                              onClick={() => removeFromCart(item._id)}
                            >
                              Remove from Cart
                            </button>
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
                      <p>Price({cartData.length} items)</p>
                      <p>${totalPrice}</p>
                    </div>
                    <div className="cart-total-row">
                      <p>Discount</p>
                      <p>-$699</p>
                    </div>
                    <div className="cart-total-row">
                      <p>Delivary Charges</p>
                      <p>$99</p>
                    </div>
                    <div className="cart-total-row cart-final-amount">
                      <p>Total Amount</p>
                      <p>${Number(totalPrice) - 600}</p>
                    </div>
                  </div>
                </div>
                <div className="cart-address">
                  <h3>Delivery address</h3>
                <div className="cart-address-area">
                  <input type="radio" name="" id="" checked />
                  <div className="cart-address-content">
                    <p className="cart-address-name">Khushal Sharma</p>
                    <p className="cart-address-full">15 D Block, Sector 9, Udaipur, 313002</p>
                  </div>
                </div>
                </div>
                <div className="cart-btn cart-checkout">
                  <button onClick={cartCheckoutNotify}>Checkout</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="cart-title-center">
          <h3>Your cart is empty</h3>
          <img className="notFound-image" src={notFoundImage} alt="" />
        </div>
      )}
    </div>
  );
}
