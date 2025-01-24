"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (newMode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("light");

  const handleThemeChange = (newMode: string) => {
    setMode(newMode);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newMode);

    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    document.documentElement.classList.add(mode);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
