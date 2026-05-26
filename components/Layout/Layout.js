import { Footer } from "../Footer/Footer";
import { SITE_URL } from "../../consts/site";
import { Navigation } from "../Navigation/Navigation";
import Head from "next/head";
import Script from "next/script";
import { useTheme } from "../../hooks/useTheme";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";
import secondaryPreview36 from "../../images/secondary_preview_36.webp";
import favicon180x180 from "../../images/favicon180x180.png";
import logo_dark from "../../images/logo_dark.webp";
import favicon from "../../images/logo_dark.ico";
import styles from '../../styles/layout.module.css';


export default function Layout({ children, metaConfig, schemaOrg = '', enableParallaxBackground =  true }) {
  const { title, description, keywords, seoContent } = metaConfig;

  useTheme();
  useScrollToLocation();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0"
        />
        <meta name="yandex-verification" content="70b474c1ec62cdcd" />
        <meta name="yapl-verification" content="756182357" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta name="author" content="Александр Васильев" />
        <meta name="copyright" content="Александр Васильев" />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta property="og:url" content={`${SITE_URL}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo_dark.src} />
        <meta property="og:locale" content="ru_RU" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link rel="icon" href={favicon.src} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={favicon180x180.src}
        />

      </Head>
      {schemaOrg && (
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(schemaOrg)}
        </Script>
      )}
      <Navigation />
      {seoContent && (
        <h1 className={styles["sr-only"]}>
          {seoContent}
        </h1>
      )}
      <main className={styles.main}>
        {enableParallaxBackground && (
          <div style={{
            position: 'sticky',
            inset: 0,
            zIndex: 0,
            marginBottom: '-100vh',
            backgroundImage: `url(${secondaryPreview36.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            boxShadow: '0px -3px 15px 0px var(--border-color)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.2)'
            }} />
          </div>
        )}
        {children}
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
