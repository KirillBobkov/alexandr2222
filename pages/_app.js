import "../styles/reset.css";
import "../styles/global.css";
import { ThemeProvider } from "../hooks/useTheme";

export default function({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
