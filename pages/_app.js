import { ThemeProvider } from "../hooks/useTheme";
import MetricsCode from "../components/MetricsCode";
import "../styles/global.css";
import "../styles/reset.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
        <MetricsCode />
      </ThemeProvider>
    </>
  );
}
