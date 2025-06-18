import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = {
  forgotPassword: async (email) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/forgot-password`, { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to send verification code');
    }
  },

  verifyCode: async ({ email, code }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/verify-code`, { email, code });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to verify code');
    }
  },

  resetPassword: async ({ email, code, newPassword }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/reset-password`, {
        email,
        code,
        newPassword
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to reset password');
    }
  }
};

export { api }; 