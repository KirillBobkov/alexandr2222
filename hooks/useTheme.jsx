const THEME = "dark";

export function ThemeProvider({ children }) {
  return children;
}

export function useTheme() {
  return THEME;
}