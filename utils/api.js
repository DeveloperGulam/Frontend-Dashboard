import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api';
const AUTH_TOKEN = '6e4aa967c0c5df6a1a358b84770af45830a991ae9eb1867ce3c5fcda8b498f94e8e84853025ae38385fe7fc4dadbb39cfbf6d72f427e100af0565e8a13f660e3e2ada4f6b2d5c8c7df116a2a4a29f5f4edd7ed418c6652bddc307ec85ded96bd085884acdec27a0120e080b824ca0a9d7f371d0b89eb0eabadbf4cd689b91763'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept requests to add the Bearer token
axiosInstance.interceptors.request.use((config) => {
    const authToken = process.env.TOKEN;
    if (AUTH_TOKEN) {
      config.headers.Authorization = `Bearer ${AUTH_TOKEN}`;
    }
    return config;
  });

export const getColleges = async () => {
  const response = await axiosInstance.get('/colleges');
  return response.data;
};

export const getCollegeById = async (id) => {
  const response = await axiosInstance.get(`/colleges/${id}`);
  return response.data;
};

export const getStudentByCollege = async (id) => {
  const response = await axiosInstance.get(`/students/byCollege/${id}`);
  return response.data;
};