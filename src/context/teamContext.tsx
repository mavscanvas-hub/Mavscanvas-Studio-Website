/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { apiClient } from "../apiClient";

export interface FieldOption {
  name: string;
  id: string;
}

export interface FieldValidation {
  options?: FieldOption[];
  singleLine?: boolean;
  maxLength?: number;
  pattern?: Record<string, unknown>;
  messages?: Record<string, string>;
}

export interface Field {
  id: string;
  isEditable: boolean;
  isRequired: boolean;
  type: string;
  slug: string;
  displayName: string;
  helpText: string | null;
  validations: FieldValidation | null;
}

export interface CollectionSchema {
  id: string;
  displayName: string;
  singularName: string;
  slug: string;
  createdOn: string;
  lastUpdated: string;
  fields: Field[];
}

export interface ProjectImage {
  fileId: string;
  url: string;
  alt: string | null;
}

export interface WorkFieldData {
  "full-name": string;
  role: string;
  name: string;
  image: ProjectImage;
  slug: string;
  id: string;
  isArchived: boolean;
  isDraft: boolean;
}

export interface Work {
  id: string;
  cmsLocaleId: string;
  lastPublished: string;
  lastUpdated: string;
  createdOn: string;
  isArchived: boolean;
  isDraft: boolean;
  fieldData: WorkFieldData;
}

export interface Pagination {
  limit: number;
  offset: number;
  total: number;
}

export interface WorksResponse {
  items: Work[];
  pagination: Pagination;
}

export interface TeamContextType {
  isLoading: boolean;
  isCategoryLoading?: boolean;
  categories?: FieldOption[];
  team: Work[];
  setIsLoading: (loading: boolean) => void;
  getCollectionDetails: (id: string) => Promise<any>;
  getAllTeamMembers: (id: string) => Promise<WorksResponse>;
}

const TeamContext = createContext<TeamContextType | null>(null);

const TeamProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [categories, setCategories] = useState<FieldOption[]>([]);
  const [team, setTeam] = useState<any[]>([]);

  const getCollectionDetails = async (id: string) => {
    setIsCategoryLoading(true);
    try {
      console.log("Fetching collection details for ID:", id);
      const res = await apiClient.get<CollectionSchema>(`/collections/${id}`);
      console.log("Collection Details:", res);

      if (!res || !res.fields) {
        console.error("Invalid response structure:", res);
        return;
      }

      const optionFields = res.fields.filter(
        (field: Field) => field.type === "Option",
      );
      const categoryOptions = optionFields
        .flatMap((field: Field) => field.validations?.options || [])
        .filter((option: FieldOption) => option.name && option.id);
      setCategories(categoryOptions);
    } catch (error) {
      console.error("Error fetching collection details:", error);
    } finally {
      setIsCategoryLoading(false);
    }
  };

  const getAllTeamMembers = async (id: string): Promise<WorksResponse> => {
    setIsLoading(true);
    try {
      console.log("Fetching all team members for collection ID:", id);
      const res = await apiClient.get<WorksResponse>(
        `/collections/${id}/items`,
      );
      console.log("All Team Members:", res);

      if (res && res.items) {
        setTeam(res.items);
        return res;
      } else {
        console.error("Invalid team members response structure:", res);
        return { items: [], pagination: { limit: 0, offset: 0, total: 0 } };
      }
    } catch (error) {
      console.error("Error fetching team members:", error);
      return { items: [], pagination: { limit: 0, offset: 0, total: 0 } };
    } finally {
      setIsLoading(false);
    }
  };

  const value: TeamContextType = {
    isLoading,
    setIsLoading,
    isCategoryLoading,
    getCollectionDetails,
    getAllTeamMembers,
    categories,
    team,
  };
  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
};

export { TeamProvider, TeamContext };
