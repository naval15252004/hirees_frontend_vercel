import { useState, useEffect } from "react";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

const useGetAllCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetchWithAuth(`${COMPANY_API_END_POINT}/companies`);
        const data = await res.json();
        setCompanies(data.companies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return { companies, loading, error };
};

export default useGetAllCompanies;
