import { api } from "@/utils/api";

const verifyCode = async (email, code) => {
  try {
    const data = await api.verifyCode({ email, code });
    return data;
  } catch (error) {
    throw error;
  }
};

export default verifyCode; 