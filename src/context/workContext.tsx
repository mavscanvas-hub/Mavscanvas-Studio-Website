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
  category: string;
  name: string;
  timeline: string;
  problem: string;
  solution: string;
  "project-images": ProjectImage[];
  slug: string;
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

export interface WorkContextType {
  isLoading: boolean;
  isCategoryLoading?: boolean;
  categories?: FieldOption[];
  works: Work[];
  setIsLoading: (loading: boolean) => void;
  getCollectionDetails: (id: string) => Promise<any>;
  getAllWorks: (id: string) => Promise<WorksResponse>;
}

const WorkContext = createContext<WorkContextType | null>(null);

const WorkProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [categories, setCategories] = useState<FieldOption[]>([]);
  const [works, setWorks] = useState<Work[]>([]);

  const getCollectionDetails = async (id: string) => {
    setIsCategoryLoading(true);
    try {
      const res: any = await apiClient.get<CollectionSchema>(
        `/collections/${id}`
      );
      // console.log("Collection Details:", res);
      const optionFields = res.fields.filter(
        (field: Field) => field.type === "Option"
      );
      const categoryOptions = optionFields
        .flatMap((field: Field) => field.validations?.options || [])
        .filter((option: FieldOption) => option.name && option.id);
      setCategories(categoryOptions);
    } catch (error) {
      console.error("Error fetching collection details:", error);
      throw error;
    } finally {
      setIsCategoryLoading(false);
    }
  };

  const getAllWorks = async (id: string): Promise<WorksResponse> => {
    setIsLoading(true);
    try {
      const res = await apiClient.get<WorksResponse>(
        `/collections/${id}/items`
      );
      console.log("All Works:", res);
      setWorks(res.items);
      return res;
    } catch (error) {
      console.error("Error fetching works:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value: WorkContextType = {
    isLoading,
    setIsLoading,
    isCategoryLoading,
    getCollectionDetails,
    getAllWorks,
    categories,
    works,
  };
  return <WorkContext.Provider value={value}>{children}</WorkContext.Provider>;
};

export { WorkProvider, WorkContext };
