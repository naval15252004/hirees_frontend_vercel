import { useState, useEffect } from "react";
import { api } from "@/utils/api";

const useGetAllSavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        setLoading(true);
        const data = await api.getSavedJobs();
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