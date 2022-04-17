import axios from "axios";

export const loginUtility = async (email, password) =>
  axios.post("/api/auth/login/", {
    email,
    password,
  });

export const signupUtility = async (udata) =>
  axios.post("/api/auth/signup/", {
    email: udata.email,
    password: udata.password,
    name: udata.name,
  });
