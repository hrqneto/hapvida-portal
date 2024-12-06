import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  currentIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
  navigateTo: (path: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const navigateTo = (path: string) => {
    console.log(`navegando para: ${path}`);
  };

  const banners = [
    { id: 1, title: "Renovação de receita: o remédio para quem quer economizar tempo.", image: "/src/assets/banner1.png" },
    { id: 2, title: "Consulta médica mais fácil, rápida e segura.", image: "/src/assets/banner2.jpg" },
  ];

  return (
    <AppContext.Provider value={{ menuOpen, toggleMenu, currentIndex, handlePrev, handleNext, navigateTo}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider.");
  }
  return context;
};
