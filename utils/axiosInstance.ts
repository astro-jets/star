import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.ROOT_LINK}/api`,
});

export default axiosInstance;
