import { useState } from "react";
import Head from "next/head";
import { Nunito, Rubik } from "next/font/google";
import { Form } from "../components/Form/Form";
import { useTheme } from "../hooks/useTheme";
import StarsBackground from "../components/StarsBackground/StarsBackground";

import styles from "../styles/ZapisPage.module.css";

const nunito = Nunito({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["cyrillic"],
});

const rubik = Rubik({
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["cyrillic"],
});

export default function ZapisPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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

        <title>Запись на консультацию | Александр Васильев</title>
        <meta name="description" content="Запишитесь на консультацию к Александру Васильеву — гипнотерапевту и психологу в Казани" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, user-scalable=0"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className={styles.wrapper}>
         <StarsBackground />
        <div className={styles.content}>
          <Form
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
            submitText="Консультация"
            type="Страница телетайп для женщин"
            woman
          />
        </div>
      </div>
    </>
  );
}
