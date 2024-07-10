"use client";
import { HousesMock } from "@/constants/mock";
import { getRequest } from "@/services/api";
import { Property } from "@/types/house";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface AppContextProps {
  properties: Property[];
  setProperties: (items: Property[]) => void;
  favoriteProperties: Property[];
  setFavoriteProperties: (items: Property[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const favoritePropertiesInCache = JSON.parse(
    localStorage.getItem("favoriteProperties") || "[]"
  );
  const [properties, setProperties] = useState<Property[]>(HousesMock);
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>(
    favoritePropertiesInCache
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest("LA/listings.json");

        const responseData: Property[] = await response.data;
        setProperties(responseData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    // fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favoriteProperties",
      JSON.stringify(favoriteProperties)
    );
  }, [favoriteProperties]);

  const value: AppContextProps = {
    properties,
    setProperties,
    favoriteProperties,
    setFavoriteProperties,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp deve ser usado dentro de um AppProvider");
  }
  return context;
};
