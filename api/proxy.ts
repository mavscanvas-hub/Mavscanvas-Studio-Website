/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { WORKSPACE_TOKEN } from "../src/constant";
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { path } = req.query;
  const token = WORKSPACE_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Missing WORKSPACE_TOKEN" });
  }

  if (!path || Array.isArray(path)) {
    return res.status(400).json({ error: "Missing path" });
  }

  try {
    const url = `https://api.webflow.com/v2/${path}`;
    console.log("Proxying request to:", url);

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Proxy error:", error.message);
    return res.status(error.response?.status || 500).json({
      error: error.message,
      details: error.response?.data,
    });
  }
}
