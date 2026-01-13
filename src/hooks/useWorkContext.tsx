import { use } from "react";
import { WorkContext } from "../context/workContext";

export const useWorkContext = () => {
  const context = use(WorkContext);
  if (!context) {
    throw new Error("useWorkContext must be used within a WorkProvider");
  }
  return context;
};
