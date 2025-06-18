import { useState, useEffect } from "react";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

const useGetAllApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const data = await fetchWithAuth(`${APPLICATION_API_END_POINT}/applications`);
        setApplications(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return { applications, loading, error };
};

export default useGetAllApplications; 