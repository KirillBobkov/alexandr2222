import { createContext, useCallback, useContext, useEffect, useState, useLayoutEffect } from "react";

// Create a context for theme
const ThemeContext = createContext();

// Provider component that wraps your app and makes theme available to any child component that calls useTheme
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(undefined);

  // Initial theme setup - runs only once
  useLayoutEffect(() => {
    if (localStorage.getItem("theme")) {
      // If user has previously set a theme preference, use that
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.setAttribute("theme", "light");
      } else {
        document.documentElement.removeAttribute("theme");
      }
    } else {
      // Default to dark theme if no saved preference
      document.documentElement.removeAttribute("theme");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  // Apply theme changes when theme state changes
  useEffect(() => {
    if (theme === undefined) return;
    
    localStorage.setItem("theme", theme);
    
    if (theme === "light") {
      document.documentElement.setAttribute("theme", "light");
    } else {
      document.documentElement.removeAttribute("theme");
    }
  }, [theme]);

  const changeTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }, [theme]);

  // Make the theme state and changeTheme function available to any components that use useTheme
  const value = { theme, changeTheme };
  
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
  