import axios from "axios";

const API_URL = "http://localhost:8080/api-docs";

const login = async (email, password) => {
  const response = await axios.post(API_URL + "auth/login", {
    email,
    password,
  });

  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
  login,
  logout,
  getCurrentUser
};
