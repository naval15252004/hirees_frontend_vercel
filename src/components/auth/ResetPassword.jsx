import { api } from "@/utils/api";

const resetPassword = async (email, code, newPassword) => {
  const data = await api.resetPassword({ email, code, newPassword });
  return data;
};

export default resetPassword; 