import axios from "axios";
import { WORKSPACE_TOKEN } from "./constant";

const isProduction = import.meta.env.PROD;

export const baseInstance = axios.create({
  baseURL: isProduction ? "/api" : "/api",
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
