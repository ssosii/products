import axios from "axios";
import { apiUrl } from "config";

const axiosClient = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});


export default axiosClient;
