import { userApi } from "@/utils/axios";

const res = await userApi.post('/verify-code', { email, code }); 