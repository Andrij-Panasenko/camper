import axios from "axios";

axios.defaults.baseURL = "https://65f9eea93909a9a65b19aacf.mockapi.io";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};
