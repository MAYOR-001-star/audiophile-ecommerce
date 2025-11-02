"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CategoryContextType = {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState("home");

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
