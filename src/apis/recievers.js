import axios from "axios";
const BASE_URL = "http://localhost:1337/api/recievers?populate=*";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});
