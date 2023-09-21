import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.34.121:8000",
  withCredentials: true,
});
