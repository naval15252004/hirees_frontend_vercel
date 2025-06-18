import { useState, useEffect } from "react";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const useGetAllCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(
        `${COMPANY_API_END_POINT}/companies`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setCompanies(response.data.companies);
    } catch (error) {
      console.error("Error fetching companies:", error);
      setError(error.response?.data?.message || "Failed to fetch companies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return { companies, loading, error, refetch: fetchCompanies };
};

export default useGetAllCompanies;
