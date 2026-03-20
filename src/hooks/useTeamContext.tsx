import { use } from "react";
import { TeamContext } from "../context/teamContext";

export const useTeamContext = () => {
  const context = use(TeamContext);
  if (!context) {
    throw new Error("useTeamContext must be used within a TeamProvider");
  }
  return context;
};
