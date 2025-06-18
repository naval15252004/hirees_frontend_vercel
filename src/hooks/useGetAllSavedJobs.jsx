import { useState, useEffect } from "react";
import { SAVED_JOBS_API_END_POINT } from "@/utils/constant";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

const useGetAllSavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        setLoading(true);
        const data = await fetchWithAuth(`${SAVED_JOBS_API_END_POINT}/saved-jobs`);
        setSavedJobs(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, []);

  return { savedJobs, loading, error };
};

export default useGetAllSavedJobs; 