import axios from "axios";

const API_URL = "http://localhost:5000/api/referral"; // ✅ Ensure this matches your backend

export const submitReferral = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error("❌ API error:", error.response?.data || error.message);
    throw error;
  }
};
