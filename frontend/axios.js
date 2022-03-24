import axios from "axios";

const axiosInstance = axios.create({
  baseURL: (process.env.NODE_ENV !== 'production')? "http://localhost:5000" : "http://mydomain.com",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  } 
})

export default axiosInstance