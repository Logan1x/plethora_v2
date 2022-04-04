import { createContext, useContext, useEffect, useReducer } from "react";

import { dataReducerFunc, initialState } from "../reducer/dataReducer";
import {
  getData,
  getCartData,
  getWishlistData,
  postCartData,
  postWishlistData,
} from "../utils/utilDataFuncs";

import {
  removeFromCartUtilFunc,
  removeFromWishlistUtilFunc,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from "../utils/utilCartWishFuncs";

import { notify } from "../utils/utilToastFuncs";
import { useAuth } from "../contexts/authContext";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducerFunc, initialState);

  const { token } = useAuth();

  const removeFromCart = async (id) => {
    try {
      const response = await removeFromCartUtilFunc(id, token);

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
        notify("Removed from cart!", "success", "🛒");
      }
    } catch (err) {
      console.error(err);
      notify("Error removing from cart", "error");
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const response = await removeFromWishlistUtilFunc(id, token);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "SET_WISHLIST_DATA",
          payload: response.data.wishlist,
        });
        notify("Removed from wishlist!", "success", "❤️");
      }
    } catch (err) {
      console.error(err);
      notify("Error removing from wishlist", "error");
    }
  };

  const increaseItemQuantity = async (id) => {
    try {
      const response = await increaseCartItemQuantity(id, token);

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
        notify("Increased quantity!", "success", "🛒");
      }
    } catch (err) {
      console.error(err);
      notify("Error increasing quantity", "error");
    }
  };

  const decreaseItemQuantity = async (id) => {
    try {
      const response = await decreaseCartItemQuantity(id, token);

      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
        notify("Decreased quantity!", "success", "🛒");
      }
    } catch (err) {
      console.error(err);
      notify("Error decreasing quantity", "error");
    }
  };

  useEffect(async () => {
    const data = await getData();
    dispatch({ type: "SET_DATA", payload: data.products });

    if (token) {
      const cartData = await getCartData(token);
      dispatch({ type: "SET_CART_DATA", payload: cartData });

      const wishlishData = await getWishlistData(token);
      dispatch({ type: "SET_WISHLIST_DATA", payload: wishlishData });
    } else {
      dispatch({ type: "SET_CART_DATA", payload: [] });
      dispatch({ type: "SET_WISHLIST_DATA", payload: [] });
    }
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        postCartData,
        postWishlistData,
        removeFromCart,
        removeFromWishlist,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
