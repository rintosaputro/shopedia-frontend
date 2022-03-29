import axios from 'axios';

const backendUrl = process.env.NEXT_BACKEND_URL;

const http = (token) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: backendUrl,
    headers,
  });
};

export default http;
