import { userApi } from "@/utils/axios";

const res = await userApi.post('/reset-password', { email, code, newPassword }); 