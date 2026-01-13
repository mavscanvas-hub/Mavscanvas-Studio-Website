import axios from "axios";
import { WORKSPACE_TOKEN } from "./constant";

const isDev = import.meta.env.DEV;

export const baseInstance = axios.create({
  baseURL: isDev ? "/api/v2" : "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(isDev && { Authorization: `Bearer ${WORKSPACE_TOKEN}` }),
  },
});

class ApiClient {
  async get<T>(endpoint: string): Promise<T> {
    let url = endpoint;
    if (!isDev) {
      // In production, use the proxy serverless function
      url = `/api/proxy?path=${encodeURIComponent(
        endpoint.replace(/^\//, "")
      )}`;
    }
    const fullUrl = `${baseInstance.defaults.baseURL}${url}`;
    console.log("API Request:", fullUrl);
    const response = await baseInstance.get<T>(url);
    return response.data;
  }
}

export const apiClient = new ApiClient();
