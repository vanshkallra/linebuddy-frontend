import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Configure axios defaults
// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_URL;
console.log("🌍 Axios base URL:", axios.defaults.baseURL);

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';


// Add request interceptor for debugging
axios.interceptors.request.use(
  (config) => {
    console.log('🚀 Making request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      data: config.data,
      headers: config.headers
    });
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
axios.interceptors.response.use(
  (response) => {
    console.log('✅ Response received:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    });
    return response;
  },
  (error) => {
    console.error('❌ Response interceptor error:', {
      message: error.message,
      code: error.code,
      config: error.config,
      response: error.response?.data
    });
    return Promise.reject(error);
  }
);

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (tokenFromStorage && userData) {
      setUser(JSON.parse(userData));
      setToken(tokenFromStorage);
      axios.defaults.headers.common['Authorization'] = `Bearer ${tokenFromStorage}`;
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      console.log('🔐 Attempting login for:', email);
      
      const response = await axios.post('/api/auth/login', {
        email,
        password
      });
      
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setToken(token);
      setUser(user);
      
      console.log('✅ Login successful');
      return { success: true };
    } catch (error) {
      console.error('❌ Login failed:', error);
      
      // Handle different types of errors
      if (error.code === 'ERR_NETWORK') {
        return { success: false, message: 'Network error - is the server running?' };
      }
      
      return { 
        success: false, 
        message: error.response?.data?.message || error.message || 'Login failed' 
      };
    }
  };

  const register = async (userData) => {
    try {
      console.log('📝 Attempting registration for:', userData.email);
      console.log('Registration data:', userData);
      
      const response = await axios.post('/api/auth/register', userData);
      
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setToken(token);
      setUser(user);
      
      console.log('✅ Registration successful');
      return { success: true };
    } catch (error) {
      console.error('❌ Registration failed:', error);
      
      // Handle different types of errors
      if (error.code === 'ERR_NETWORK') {
        return { success: false, message: 'Network error - is the server running?' };
      }
      
      if (error.code === 'ERR_FAILED') {
        return { success: false, message: 'CORS error - check server configuration' };
      }
      
      return { 
        success: false, 
        message: error.response?.data?.message || error.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    console.log('👋 Logging out user');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};