import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import { dataReducerFunc, initialState } from "../reducer/dataReducer";
import {
  getData,
  getCartData,
  getWishlistData,
  postCartData,
} from "../utils/utilDataFuncs";
import { useAuth } from "../contexts/authContext";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducerFunc, initialState);

  const { token } = useAuth();

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("/api/products");
  //     if (response.status === 200 || response.status === 201) {
  //       return response.data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getCartData = async () => {
  //   try {
  //     const response = await axios.get("/api/user/cart", {
  //       headers: {
  //         authorization: token,
  //       },
  //     });
  //     if (response.status === 200 || response.status === 201) {
  //       console.log(response.data);
  //       return response.data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const postCartData = async ({ _id, title, imgSrc, rating, price }) => {
  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       headers: {
  //         authorization: token,
  //       },
  //       url: "/api/user/cart",
  //       data: JSON.stringify({
  //         product: { _id, title, imgSrc, rating, price },
  //       }),
  //     });

  //     if (response.status === 200 || response.status === 201) {
  //       dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getWishlistData = async () => {
  //   try {
  //     const response = await axios.get("/api/user/wishlist", {
  //       headers: {
  //         authorization: token,
  //       },
  //     });
  //     if (response.status === 200 || response.status === 201) {
  //       console.log(response.data);
  //       return response.data;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(async () => {
    const data = await getData();
    dispatch({ type: "SET_DATA", payload: data.products });

    if (token) {
      const cartData = await getCartData(token);
      dispatch({ type: "SET_CART_DATA", payload: cartData });

      const wishlishData = await getWishlistData(token);
      dispatch({ type: "SET_WISHLIST_DATA", payload: wishlishData });
    }
  }, [token]);

  return (
    <DataContext.Provider value={{ state, dispatch, postCartData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
