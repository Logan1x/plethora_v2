import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("/api/products");
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
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
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
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
    }
  } catch (error) {
    console.log(error);
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
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
