import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import Head from "next/head";
import localFont from 'next/font/local';
import favicon32x32 from "../../public/images/favicon32x32.png";
import favicon180x180 from "../../public/images/favicon180x180.png";
import logo from "../../public/images/logo.webp";
import favicon from "../../public/images/favicon.ico";

const font = localFont({
  src: '../../fonts/TildaSans-VF.woff2',
  variable: '--font-tilda',
});

export default function Layout({ children, metaConfig }) {
  const { title, description, keywords } = metaConfig;

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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Александр Васильев" />
        <meta name="copyright" content="Александр Васильев" />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:url"
          content={`https://alexandrvasilev.ru`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={logo}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link rel="icon" href={favicon.src} />
        <link rel="apple-touch-icon" href={favicon32x32.src} />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href={favicon32x32.src}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={favicon180x180.src}
        />
        <link rel="apple-touch-startup-image" href={favicon32x32.src} />
      </Head>
      <div className={font.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
