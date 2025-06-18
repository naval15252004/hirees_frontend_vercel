import { useState, useEffect } from "react";
import { JOB_API_END_POINT } from "@/utils/constant";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

const useGetAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await fetchWithAuth(`${JOB_API_END_POINT}/jobs`);
        setJobs(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading, error };
};

export default useGetAllJobs;