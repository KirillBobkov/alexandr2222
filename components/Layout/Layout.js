import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import Head from "next/head";
import Script from "next/script";
import favicon32x32 from "../../images/favicon32x32.png";
import favicon180x180 from "../../images/favicon180x180.png";
import meta_logo from "../../images/meta_logo.webp";
import favicon from "../../images/logo.ico";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";
import { useTheme } from "../../hooks/useTheme";

import { Nunito, Rubik } from "next/font/google";
import { Html } from "next/document";

const nunito = Nunito({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["cyrillic"],
});

// const popins = Poppins({
//   weight: ['400', '700'],
//   style: ['normal'],
//   display: 'swap',
//   subsets: ['cyrillic']
// })

const rubik = Rubik({
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["cyrillic"],
});

export default function Layout({ children, metaConfig, schemaOrg = '' }) {
  const { title, description, keywords, seoContent } = metaConfig;

  useTheme();

  return (
    <>
      <Head>
        <style jsx global>{`
          :root {
            --heading: ${nunito.style.fontFamily};
            --body-font: ${rubik.style.fontFamily};
          }
        `}</style>

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0"
        />
        <meta name="yandex-verification" content="70b474c1ec62cdcd" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta name="author" content="Александр Васильев" />
        <meta name="copyright" content="Александр Васильев" />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta property="og:url" content={`https://alexandrvasilev.ru`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta_logo.src} />
        <meta property="og:locale" content="ru_RU" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link rel="icon" href={favicon.src} />
        <link rel="apple-touch-icon" href={favicon32x32.src} />
        <link rel="apple-touch-icon" sizes="32x32" href={favicon32x32.src} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={favicon180x180.src}
        />
        <link rel="apple-touch-startup-image" href={favicon32x32.src} />
      
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
        <h1 style={{ 
          visibility: 'hidden', 
          width: '1px', 
          height: '1px', 
          padding: '0', 
          margin: '-1px', 
          overflow: 'hidden', 
          clip: 'rect(0,0,0,0)', 
          whiteSpace: 'nowrap', 
          border: '0' 
        }}>
          {seoContent}
        </h1>
      )}
      <main>{children}</main>
      <Footer />     
      <ScrollTopButton />
    </>
  );
}
