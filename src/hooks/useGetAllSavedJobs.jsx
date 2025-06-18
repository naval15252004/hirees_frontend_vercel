import { useState, useEffect } from "react";
import { SAVED_JOBS_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const useGetAllSavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSavedJobs = async () => {
    try {
      const response = await axios.get(
        `${SAVED_JOBS_API_END_POINT}/saved-jobs`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setSavedJobs(response.data.savedJobs);
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
      setError(error.response?.data?.message || "Failed to fetch saved jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  return { savedJobs, loading, error, refetch: fetchSavedJobs };
};

export default useGetAllSavedJobs; 