import { useState, useEffect } from "react";
import { JOB_API_END_POINT } from "@/utils/constant";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

const useGetSingleJobs = (jobId) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const data = await fetchWithAuth(`${JOB_API_END_POINT}/jobs/${jobId}`);
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
