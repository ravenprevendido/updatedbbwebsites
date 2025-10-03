// context/HeaderContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

type HeaderContextType = {
  searchValue: string;
  setSearchValue: (v: string) => void;
  selectedServiceFromHeader: string | null;
  setSelectedServiceFromHeader: (v: string | null) => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedServiceFromHeader, setSelectedServiceFromHeader] = useState<string | null>(null);

  return (
    <HeaderContext.Provider value={{ searchValue, setSearchValue, selectedServiceFromHeader, setSelectedServiceFromHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const ctx = useContext(HeaderContext);
  if (!ctx) throw new Error("useHeaderContext must be used inside HeaderProvider");
  return ctx;
};
