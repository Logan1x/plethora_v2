import { createContext, useContext, useState } from "react";
import { loginUtility } from "../utils/utilAuthFuncs";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("loginItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currUser, setCurrUser] = useState(localStorageToken?.user);

  const toastStyle = {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  };

  const notify = (msg, status) => {
    status === "success"
      ? toast.success(msg, toastStyle)
      : toast.error(msg, toastStyle);
  };

  const loginHandler = async (email, password) => {
    try {
      const response = await loginUtility(email, password);

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

  const logoutHandler = () => {
    localStorage.removeItem("loginItems");
    setToken(null);
    setCurrUser(null);
    navigate("/");
    notify("Logged out successfully", "success");
  };

  return (
    <AuthContext.Provider
      value={{ loginHandler, logoutHandler, token, currUser, notify }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };