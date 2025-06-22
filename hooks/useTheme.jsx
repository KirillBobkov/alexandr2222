import { createContext, useContext, useLayoutEffect } from "react";

// Create a context for theme
const ThemeContext = createContext();

// Provider component that wraps your app and makes theme available to any child component that calls useTheme
export function ThemeProvider({ children }) {
  // Initial theme setup - runs only once
  useLayoutEffect(() => {
    // Always set dark theme
    document.documentElement.removeAttribute("theme");
    localStorage.setItem("theme", "dark");
  }, []);

  const changeTheme = () => {
    // No-op: Theme is always dark
  };

  // Make the theme state and changeTheme function available to any components that use useTheme
  const value = { theme: "dark", changeTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Hook for components to get and update theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
  