import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import { Button } from "../../components/shared/Button/Button";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_34 from "../../images/secondary_preview_34.webp";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Гипнопроработка для женщин: обретение уверенности, спокойствия и радости через работу с подсознанием",
  description:
    "Гипнопроработка для женщин — эффективный метод устранения тревожности, комплексов и последствий психологических травм через направленное воображение. Работа с подсознанием без необходимости обсуждать сокровенное. Онлайн-сессии, гарантия результата, индивидуальный подход. Ключевые слова: гипнопроработка для женщин, работа с подсознанием, уверенность в себе, спокойствие, избавление от тревожности, проработка комплексов, психологические травмы, женская психология, эмоциональное состояние, трансформация через подсознание.",
  image: "/_next/static/media/secondary_preview_2.webp",
  url: "https://alexandrvasilev.ru/blog/girls-power",
  inLanguage: "ru",
  datePublished: "2025-04-24",
  publisher: {
    "@type": "Organization",
    name: "INTEGRAAL",
    url: "https://alexandrvasilev.ru",
    logo: {
      "@type": "ImageObject",
      url: "/_next/static/media/logo.ab1a421b.webp",
      width: 378,
      height: 400,
    },
  },
  author: {
    "@type": "Person",
    name: "Александр Васильев",
    url: "https://alexandrvasilev.ru/#about",
    description:
      "Гипнолог, специалист по работе с подсознанием и психологическим состояниям",
    jobTitle: "Гипнолог, эксперт по работе с подсознанием",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/girls-power",
  },
  keywords:
    "гипнопроработка женщины, уверенность, спокойствие, радость, работа с подсознанием, тревожность, комплексы, психологические травмы",
  about: [
    {
      "@type": "Thing",
      name: "Гипнопроработка для женщин",
      description:
        "Метод работы с подсознанием через направленное воображение для устранения тревожности, комплексов и последствий травм",
    },
    {
      "@type": "Thing",
      name: "Работа с женским подсознанием",
      description:
        "Трансформация эмоционального состояния через работу с подсознанием без необходимости обсуждать сокровенное",
    },
  ],
  offers: {
    "@type": "Offer",
    price: "10000",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: "https://alexandrvasilev.ru/blog/girls-power#message",
    description:
      "Запишитесь на консультацию, чтобы узнать, как гипнопроработка может помочь вам обрести уверенность, спокойствие и радость.",
  },
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title:
      "Гипнопроработка для женщин: обретение уверенности, спокойствия и радости",
    description:
      "Помогаю представительницам прекрасного пола обрести уверенность, спокойствие и радость. Устраняю тревожность, комплексы и последствия психологических травм через работу с подсознанием.",
    keywords:
      "гипнопроработка женщины, уверенность в себе, спокойствие, радость, тревожность, комплексы, психологические травмы, работа с подсознанием, женская психология, онлайн консультация",
    seoContent:
      "Гипнопроработка для женщин — уникальный метод обретения уверенности, спокойствия и радости через работу с подсознанием. Помогаю устранить тревожность, комплексы и последствия психологических травм. Работаю напрямую с подсознанием через направленное воображение, без необходимости обсуждать сокровенное. Онлайн-сессии, полностью осознанное состояние, гарантия результата. Ключевые слова: гипнопроработка для женщин, работа с подсознанием, уверенность в себе, спокойствие, избавление от тревожности, проработка комплексов, психологические травмы, женская психология, эмоциональное состояние.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text=""
        image={secondary_preview_34}
        overlay={false}
      />
      <div className={containerStyles.container}>
        <VisibilityManager
          as="h1"
          className={contentStyles.title_middle}
        >
        Мужчина — это бетонная плита, а женщина — огонь, который на нём танцует
        </VisibilityManager>
    
        <VisibilityManager as="p">
          Помогаю представительницам прекрасного пола обрести уверенность,
          спокойствие и радость. Устраняю тревожность, комплексы и последствия
          психологических травм из прошлого.
        </VisibilityManager>

        <VisibilityManager as="p">
          Работаю напрямую с подсознанием, через направленное воображение.
          Сессия происходит онлайн, без необходимости обсуждать сокровенное.
        </VisibilityManager>


        <VisibilityManager
          as="h3"
          className={contentStyles.title_middle}
        >
          А ТЕПЕРЬ ПОДРОБНО
        </VisibilityManager>

        <VisibilityManager as="div">
          <div className={contentStyles.fullWidthImageContainer}>
            <img
              src="https://img1.teletype.in/files/87/16/87161c0d-6239-481a-b9f9-cf98ca47a24e.png"
              alt=""
              className={contentStyles.fullWidthImage}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </VisibilityManager>



        <VisibilityManager as="p">
          Существует множество вещей, которые мучают прекрасную половину
          человечества…
        </VisibilityManager>

        <VisibilityManager
          as="h3"
          className={contentStyles.title_middle}
        >
          БОЛЕЕ ТОГО, ДЕВУШКИ ЧАСТО ДУМАЮТ, ЧТО С НИМИ ЧТО-ТО НЕ ТАК, ДАЖЕ КОГДА
          ВСЁ ХОРОШО
        </VisibilityManager>

        <VisibilityManager as="div">
          <div className={contentStyles.fullWidthImageContainer}>
            <img
              src="https://img1.teletype.in/files/c1/11/c11109f2-8574-4217-80b3-85bd57fe02d7.png"
              alt=""
              className={contentStyles.fullWidthImage}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </VisibilityManager>

        <VisibilityManager as="p">
          Теперь, чтобы устранить причину боли, нет необходимости раскрывать свою
          душу.
        </VisibilityManager>
        <VisibilityManager
          as="h3"
          className={contentStyles.title_middle}
        >
          КАК ЭТО ПРОИСХОДИТ
        </VisibilityManager>

        <VisibilityManager as="p">
          Проработка проводится онлайн по видеозвонку в ЯндексТелемост или ВК.
        </VisibilityManager>

        <VisibilityManager as="p">
          Во время сеанса, мы работаем исключительно с эмоциями и чувствами, не
          проговаривая суть вашей ситуации.
        </VisibilityManager>

        <VisibilityManager as="p">
          Вы находитесь в полностью осознанном состоянии, сохраняете контроль над
          процессом и самостоятельно определяете, к какому состоянию хотите
          прийти, без навязывания с моей стороны.
        </VisibilityManager>

        <VisibilityManager as="p">
          Если проблема надумана, то после проработки она просто уйдёт. А если она
          реальна, я уберу тот эмоциональный груз, который её усиливает.
        </VisibilityManager>

        <VisibilityManager as="p">
          Вы обретёте состояние, в котором сможете со всем разобраться без лишней
          суеты. Когда нет паники, женский мозг творит чудеса, согласитесь. 😉
        </VisibilityManager>

        <VisibilityManager as="div">
          <div className={contentStyles.fullWidthImageContainer}>
            <img
              src="https://img4.teletype.in/files/f2/c9/f2c9a5c7-0d5f-434d-b097-f70d42eb6f13.png"
              alt=""
              className={contentStyles.fullWidthImage}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </VisibilityManager>

                <VisibilityManager
          as="h3"
          className={contentStyles.title_middle}
        >
    Посмотрите отзывы
        </VisibilityManager>
        <iframe
          src="https://vkvideo.ru/video_ext.php?oid=643721177&id=456239022&hash=2a097920823e0a9b"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen={true}
          style={{ backgroundColor: "#000", width: "100%", aspectRatio: "16/9", borderRadius: "20px" }}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>

        <VisibilityManager as="p">
          «Если девушка будет счастлива, она озарит весь Мир.»
        </VisibilityManager>

        <VisibilityManager as="p">
          Процесс длится в среднем около полутора часов. За это время удаётся
          решить то, что могло бы оставаться нерешённым годами.
        </VisibilityManager>

        <VisibilityManager as="p">
          Стоимость составляет 10.000 рублей за решение одной проблемы.
        </VisibilityManager>

        <VisibilityManager as="p">
          Предусмотрена гарантия возврата денег в случае отсутствия результата,
          хотя и таких прецедентов на данный момент нет.
        </VisibilityManager>

        <p
          style={{
            fontSize: "12px",
            fontStyle: "italic",
            opacity: 0.6,
          }}
        >
          Метод не является медицинским и не заменяет консультации специалиста
        </p>
      </div>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Гипнопроработка для женщин (статья)"
      />
    </Layout>
  );
}
