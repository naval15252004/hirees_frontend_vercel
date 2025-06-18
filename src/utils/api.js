import { USER_API_END_POINT, JOB_API_END_POINT, APPLICATION_API_END_POINT, COMPANY_API_END_POINT, SAVED_JOBS_API_END_POINT } from './constant';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
};

// API functions
export const api = {
  // Auth endpoints
  login: async (credentials) => {
    const response = await fetch(`${USER_API_END_POINT}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    });
    return handleResponse(response);
  },

  register: async (userData) => {
    const response = await fetch(`${USER_API_END_POINT}/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    return handleResponse(response);
  },

  logout: async () => {
    const response = await fetch(`${USER_API_END_POINT}/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  // Job endpoints
  getJobs: async () => {
    const response = await fetch(`${JOB_API_END_POINT}/jobs`, {
      method: 'GET',
      credentials: 'include',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  // Application endpoints
  getApplications: async () => {
    const response = await fetch(`${APPLICATION_API_END_POINT}/applications`, {
      method: 'GET',
      credentials: 'include',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  // Company endpoints
  getCompanies: async () => {
    const response = await fetch(`${COMPANY_API_END_POINT}/companies`, {
      method: 'GET',
      credentials: 'include',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  // Saved jobs endpoints
  getSavedJobs: async () => {
    const response = await fetch(`${SAVED_JOBS_API_END_POINT}/saved-jobs`, {
      method: 'GET',
      credentials: 'include',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
}; 