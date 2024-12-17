import axios from "axios";

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1/",

});

export default api;