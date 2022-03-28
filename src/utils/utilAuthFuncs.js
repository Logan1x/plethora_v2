import axios from "axios";

export const loginUtility = async (email, password) =>
  axios.post("/api/auth/login/", {
    email,
    password,
  });
