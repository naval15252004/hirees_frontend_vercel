import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SAVED_JOBS_API_END_POINT } from "@/utils/constant";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

const fetchSavedJobs = async () => {
  try {
    const res = await fetchWithAuth(`${SAVED_JOBS_API_END_POINT}/saved-jobs`);
    const data = await res.json();
    setSavedJobs(data.savedJobs);
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
  }
};

const handleDeleteSavedJob = async (jobId) => {
  try {
    const res = await fetchWithAuth(`${SAVED_JOBS_API_END_POINT}/saved-jobs/${jobId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data.status) {
      setSavedJobs(savedJobs.filter(job => job.jobId !== jobId));
    }
  } catch (error) {
    console.error("Error deleting saved job:", error);
  }
}; 