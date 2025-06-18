import { savedJobsApi } from "@/utils/axios";

// Replace axios calls with new configuration
const res = await savedJobsApi.get('/saved-jobs');
const res = await savedJobsApi.delete(`/saved-jobs/${jobId}`); 