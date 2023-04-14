import axios from "axios";

const API_URL = "http://localhost:8080/api-docs";

const getAutomobiles = async () => {
  return await axios.get(API_URL + "automobiles");
};

const getAutomobileById = async (id) => {
  return await axios.get(API_URL + "automobiles/" + id);
};

const createAutomobile = async (data) => {
  return await axios.post(API_URL + "automobiles", data);
};

const updateAutomobile = async (id, data) => {
  return await axios.put(API_URL + "automobiles/" + id, data);
};

const deleteAutomobile = async (id) => {
  return await axios.delete(API_URL + "automobiles/" + id);
};

export default {
  getAutomobiles,
  getAutomobileById,
  createAutomobile,
  updateAutomobile,
  deleteAutomobile,
};
