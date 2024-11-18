import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";
import Head from "next/head";
import localFont from 'next/font/local';

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
          content="/images/logo.jpg"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon32x32.png" />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/images/favicon32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon180x180.png"
        />
        <link rel="apple-touch-startup-image" href="/images/favicon32x32.png" />
      </Head>
      <div className={font.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
