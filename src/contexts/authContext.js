import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";

import { loginUtility, signupUtility } from "../utils/utilAuthFuncs";
import { notify } from "../utils/utilToastFuncs";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currUser, setCurrUser] = useState(localStorageToken?.user);

  const loginHandler = async (udata) => {
    try {
      const response = await loginUtility(udata);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
        );
        navigate("/products");
        setToken(response.data.encodedToken);
        setCurrUser(response.data.foundUser);
        notify("Logged in successfully!", "success");
      }
    } catch (err) {
      console.error(err);
      notify("Please try again", "error");
    }
  };

  const signupHandler = async (udata) => {
    try {
      const response = await signupUtility(udata);

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "loginItems",
          JSON.stringify({
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
        );
        navigate("/products");
        setToken(response.data.encodedToken);
        setCurrUser(response.data.foundUser);
        notify("Signed up successfully!", "success");
      }
    } catch (err) {
      console.error(err);
      notify("Please try again", "error");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginItems");
    setToken(null);
    setCurrUser(null);
    navigate("/");
    notify("Logged out successfully", "success");
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        signupHandler,
        logoutHandler,
        token,
        currUser,
        notify,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
