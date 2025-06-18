import { savedJobsApi } from "@/utils/axios";

const res = await savedJobsApi.get('/saved-jobs'); 