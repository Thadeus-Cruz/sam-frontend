import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://15.207.251.112:8080/',
  baseURL: 'https://app-backend-crnv.onrender.com',
  // baseURL: 'http://localhost:8080',
});

export default axiosInstance;
