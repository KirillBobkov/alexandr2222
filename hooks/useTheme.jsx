import { createContext, useContext, useLayoutEffect } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  useLayoutEffect(() => {
    document.documentElement.removeAttribute("theme");
    localStorage.setItem("theme", "dark");
  }, []);

  const value = { theme: "dark", changeTheme: () => {} };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}