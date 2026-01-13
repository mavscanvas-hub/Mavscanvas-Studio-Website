import axios from "axios";
import { WORKSPACE_TOKEN, BASE_URL } from "./constant";

export const baseInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${WORKSPACE_TOKEN}`,
  },
});

class ApiClient {
  async get<T>(endpoint: string): Promise<T> {
    const response = await baseInstance.get<T>(endpoint);
    return response.data;
  }
}

export const apiClient = new ApiClient();
