import axios from "axios";

export const loginUtility = async (udata) =>
  axios.post("/api/auth/login/", {
    email: udata.email,
    password: udata.password,
  });

export const signupUtility = async (udata) =>
  axios.post("/api/auth/signup/", {
    email: udata.email,
    password: udata.password,
    name: udata.name,
  });
