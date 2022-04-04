import axios from "axios";
import { notify } from "./utilToastFuncs";

export const getData = async () => {
  try {
    const response = await axios.get("/api/products");
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCartData = async (token) => {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postCartData = async (
  { _id, title, imgSrc, rating, price },
  token,
  dispatch
) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: "/api/user/cart",
      data: JSON.stringify({
        product: { _id, title, imgSrc, rating, price },
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
      notify("Added to cart!", "success", "🛒");
    }
  } catch (error) {
    console.error(error);
    notify("Make sure you're logged in", "error");
  }
};

export const getWishlistData = async (token) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postWishlistData = async (
  { _id, title, imgSrc, rating, price },
  token,
  dispatch
) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        authorization: token,
      },
      url: "/api/user/wishlist",
      data: JSON.stringify({
        product: { _id, title, imgSrc, rating, price },
      }),
    });

    if (response.status === 200 || response.status === 201) {
      dispatch({
        type: "SET_WISHLIST_DATA",
        payload: response.data.wishlist,
      });
      notify("Added to wishlist!", "success", "❤️");
    }
  } catch (error) {
    console.error(error);
    notify("Make sure you're logged in", "error");
  }
};
