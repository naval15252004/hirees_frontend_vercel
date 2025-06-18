import { useState, useEffect } from "react";
import { api } from "@/utils/api";

const useGetSingleJobs = (jobId) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const data = await api.getJobById(jobId);
        setJob(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJob();
    }
  }, [jobId]);

  return { job, loading, error };
};

export default useGetSingleJobs;
