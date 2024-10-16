import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      { children }
    </ThemeContext.Provider>
  );
};
