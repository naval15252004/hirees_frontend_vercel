import { useState, useEffect } from "react";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const useGetAllApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        `${APPLICATION_API_END_POINT}/applications`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setApplications(response.data.applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      setError(error.response?.data?.message || "Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return { applications, loading, error, refetch: fetchApplications };
};

export default useGetAllApplications; 