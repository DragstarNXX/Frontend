import axios from "axios";

const API_URL = "http://localhost:8080/api-docs";

const getUsers = async () => {
  return await axios.get(API_URL + "users");
};

const getUserById = async (id) => {
  return await axios.get(API_URL + "users/" + id);
};

const createUser = async (data) => {
  return await axios.post(API_URL + "users", data);
};

const updateUser = async (id, data) => {
  return await axios.put(API_URL + "users/" + id, data);
};

const deleteUser = async (id) => {
  return await axios.delete(API_URL + "users/" + id);
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
