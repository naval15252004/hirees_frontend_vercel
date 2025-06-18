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

  // Password reset endpoints
  forgotPassword: async (email) => {
    const response = await fetch(`${USER_API_END_POINT}/forgot-password`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });
    return handleResponse(response);
  },

  verifyCode: async (data) => {
    const response = await fetch(`${USER_API_END_POINT}/verify-code`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  resetPassword: async (data) => {
    const response = await fetch(`${USER_API_END_POINT}/reset-password`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
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

  getJobById: async (jobId) => {
    const response = await fetch(`${JOB_API_END_POINT}/jobs/${jobId}`, {
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

  applyJob: async (jobId) => {
    const response = await fetch(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {
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

  getCompanyById: async (companyId) => {
    const response = await fetch(`${COMPANY_API_END_POINT}/companies/${companyId}`, {
      method: 'GET',
      credentials: 'include',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  },

  getCompanyJobs: async (companyId) => {
    const response = await fetch(`${COMPANY_API_END_POINT}/companies/${companyId}/jobs`, {
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
  },

  saveJob: async (jobId) => {
    const response = await fetch(`${SAVED_JOBS_API_END_POINT}/save`, {
      method: 'POST',
      credentials: 'include',
      headers: getAuthHeaders(),
      body: JSON.stringify({ jobId })
    });
    return handleResponse(response);
  },

  unsaveJob: async (jobId) => {
    const response = await fetch(`${SAVED_JOBS_API_END_POINT}/saved-jobs/${jobId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: getAuthHeaders()
    });
    return handleResponse(response);
  }
}; 