import { notify } from "./utilToastFuncs";
import axios from "axios";

export const cartCheckoutNotify = () => {
  notify("Paisa laya?", "success", "🤨");
};

export const removeFromCartUtilFunc = (id, token) => {
  return axios.delete(`/api/user/cart/${id}`, {
    headers: {
      authorization: token,
    },
  });
};

export const removeFromWishlistUtilFunc = (id, token) => {
  return axios.delete(`/api/user/wishlist/${id}`, {
    headers: {
      authorization: token,
    },
  });
};

export const increaseCartItemQuantity = (id, token) => {
  return axios({
    method: "POST",
    headers: {
      authorization: token,
    },
    data: {
      action: {
        type: "increment",
      },
    },
    url: `/api/user/cart/${id}`,
  });
};

export const decreaseCartItemQuantity = (id, token) => {
  return axios({
    method: "POST",
    headers: {
      authorization: token,
    },
    data: {
      action: {
        type: "decrement",
      },
    },
    url: `/api/user/cart/${id}`,
  });
};
