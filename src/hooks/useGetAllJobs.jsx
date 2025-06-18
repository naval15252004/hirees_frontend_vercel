import { useState, useEffect } from "react";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const useGetAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        `${JOB_API_END_POINT}/jobs`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError(error.response?.data?.message || "Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return { jobs, loading, error, refetch: fetchJobs };
};

export default useGetAllJobs;