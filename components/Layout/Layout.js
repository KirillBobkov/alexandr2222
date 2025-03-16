import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import Head from "next/head";
import favicon32x32 from "../../images/favicon32x32.png";
import favicon180x180 from "../../images/favicon180x180.png";
import logo from "../../images/logo.png";
import favicon from "../../images/logo.ico";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";

import { Nunito, Rubik } from "next/font/google";

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
  const { title, description, keywords } = metaConfig;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaOrg }}
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Александр Васильев" />
        <meta name="copyright" content="Александр Васильев" />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta property="og:url" content={`https://alexandrvasilev.ru`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
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
      <Navigation />
      <main>{children}</main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
