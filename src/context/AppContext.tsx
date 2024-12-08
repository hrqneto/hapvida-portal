import React, { createContext, useContext, useState, ReactNode } from "react";

interface Banner {
  id: number;
  title: string;
  image: string;
}

interface AppContextProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  currentIndex: number;
  banners: Banner[];
  handlePrev: () => void;
  handleNext: () => void;
  navigateTo: (path: string) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const banners: Banner[] = [
    {
      id: 1,
      title: "Renovação de receita: o remédio para quem quer economizar tempo.",
      image: "/banner1.png",
    },
    {
      id: 2,
      title: "Consulta médica mais fácil, rápida e segura.",
      image: "/banner2.jpg",
    },
  ];

  const toggleMenu = (): void => setMenuOpen((prev) => !prev);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const navigateTo = (path: string): void => {
    console.log(`Navegando para: ${path}`);
  };

  return (
    <AppContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        currentIndex,
        banners,
        handlePrev,
        handleNext,
        navigateTo,
      }}
    >
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
