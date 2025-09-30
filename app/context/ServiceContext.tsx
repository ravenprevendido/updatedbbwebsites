"use client";

import React, { createContext, useContext, useState } from "react";

type ServiceContextType = {
  hoveredService: string | null;
  setHoveredService: (service: string | null) => void;
};

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <ServiceContext.Provider value={{ hoveredService, setHoveredService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServiceContext must be used within ServiceProvider");
  }
  return context;
};
