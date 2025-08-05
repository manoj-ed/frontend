import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: process.env.API_URL || "https://equipmentsdekho.com/api/", 
  withCredentials: false,
});

export default AxiosPublic;
