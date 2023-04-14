import axios from "axios";

const API_URL = "http://localhost:8080/api-docs";

const getRoles = async () => {
  return await axios.get(API_URL + "roles");
};

export default {
  getRoles,
};
