import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: false // Changed to false since we're using token-based auth
});

// Add interceptor to add token to requests
api.interceptors.request.use((config) => {
  // Only add Authorization header for login endpoint
  if (!config.url.includes('/api/students')) {
    const token = localStorage.getItem('dummy-auth-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  // Log the request configuration
  console.log('Request Config:', {
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data
  });
  return config;
}, (error) => {
  console.error('Request Error:', error);
  return Promise.reject(error);
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    // Log successful response
    console.log('Response:', response.data);
    return response;
  },
  (error) => {
    // Log error response
    console.error('Response Error:', error.response || error);
    if (error.response?.status === 401) {
      localStorage.removeItem('dummy-auth-token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export const loginUser = async (credentials) => {
  try {
    console.log('Sending login request with credentials:', credentials);
    const response = await api.post('/api/login', credentials);
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response || error);
    throw error;
  }
};

export const getStudents = async () => {
  const response = await api.get('/api/students');
  return response.data;
};

export const getStudent = async (id) => {
  const response = await api.get(`/api/students/${id}`);
  return response.data;
};

export const createStudent = async (studentData) => {
  const response = await api.post('/api/students', studentData);
  return response.data;
};

export const updateStudent = async (id, studentData) => {
  const response = await api.put(`/api/students/${id}`, studentData);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await api.delete(`/api/students/${id}`);
  return response.data;
};

export default api;
