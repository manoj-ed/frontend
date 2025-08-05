import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.API_URL || "https://equipmentsdekho.com/api/",
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accesstoken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized: Access token may be invalid or expired.");
    }
    return Promise.reject(error);
  }
);

export default Axios;
