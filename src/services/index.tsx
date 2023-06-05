import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-clients-a79o.onrender.com/",
  timeout: 6000,
});
