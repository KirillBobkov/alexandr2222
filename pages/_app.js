import "../styles/reset.css";
import "../styles/global.css";
import { ThemeProvider } from "../hooks/useTheme";
import MetricsCode from "../components/MetricsCode";

export default function({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider>
      <Component {...pageProps} />
      <MetricsCode />
    </ThemeProvider>
     </>
  );
}
