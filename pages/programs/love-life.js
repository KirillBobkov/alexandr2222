import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_1 from "../../images/secondary_preview_1.webp";
import secondary_preview_20 from "../../images/secondary_preview_20.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Программа «Полюби жизнь»",
  "description": "Преодоление апатии, уныния, депрессивных состояний и обретение радости жизни с помощью нейротраблшутинга - метода работы с подсознанием",
  "url": "https://alexandrvasilev.ru/programs/love-life",
  "provider": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Нейротраблшутер, специалист по работе с подсознанием и эмоциональными состояниями",
    "url": "https://alexandrvasilev.ru/#about"
  },
  "areaServed": "Казань и онлайн",
  "serviceType": "Нейротраблшутинг эмоциональных состояний",
  "offers": {
    "@type": "Offer",
    "price": "По запросу",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/programs/love-life#message"
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Результаты программы",
    "description": "Избавление от апатии и депрессивных состояний, обретение смысла и радости жизни, повышение энергии и мотивации, внутренняя гармония"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/programs/love-life"
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Программа «Полюби жизнь» - Александр "Интеграл" Васильев',
    pageTitle: "Программа «Полюби жизнь»",
    description: "Преодоление апатии, уныния, депрессивных состояний с помощью нейротраблшутинга",
    keywords: "апатия, депрессия, полюбить жизнь, нейротраблшутинг, радость жизни, эмоциональные состояния",
    content: "",
    href: "/programs/love-life",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text={metaConfig.pageTitle}
        image={secondary_preview_1}
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Часто ли вы чувствуете радость и вдохновение от своей жизни? Или,
            быть может, вы ощущаете усталость, апатию или даже разочарование?
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваше отношение к жизни формируется на подсознательном уровне.
            Возможно, вы привыкли видеть скорее трудности и проблемы, а не
            возможности и перспективы. Это происходит из-за ограничивающих
            убеждений и негативных установок, которые закрепились в вашем
            подсознании.{" "}
          </VisibilityManager>

          <VisibilityManager as="p">
            Моя работа направлена на выявление и трансформацию этих негативных
            установок. Я помогу вам изменить мышление, перестроить восприятие и
            начать видеть мир с другой стороны, полной любви, радости и
            благодарности.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Результаты, которые вы получите
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уверенность и энтузиазм к жизни.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Освобождение от негативных эмоций и убеждений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Способность находить радость и вдохновение в каждом моменте.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гармония с собой и окружающим миром.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Представьте себе:
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы чувствуете искреннюю радость от простых вещей.
            </p>
            <p className={contentStyles.textDescription}> 
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы смотрите на мир с оптимизмом и энтузиазмом.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы полны энергии и желания действовать.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы видите в каждом дне новые возможности и перспективы.
            </p>
          </VisibilityManager>
          
          <p style={{ fontSize: '12px', fontStyle: 'italic', marginBottom: '15px' }}>
            Метод не является медицинским и не заменяет консультации специалиста
          </p>

          <div style={{ height: "1px" }} />

          <div
            style={{
              textAlign: "center",
              margin: "0rem 0",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "var(--font-color)"
            }}
          >
            Стоимость при достижении результата
          </div>
          <div
            style={{
              textAlign: "center",
              margin: "0rem 0",
              color: "var(--accent)",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            125 000₽
          </div>
          <div
            style={{
              textAlign: "center",
              margin: "0rem 0",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "var(--font-color)"
            }}
          >          
          Возврат 100% денег при отсутствии эффекта
          </div>

          <Button
            className={contentStyles.message}
            href={{ hash: "#message" }}
            status="Записаться"
          />
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"Готовы жить лучше?"}
        description={
          "Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время."
        }
        type={'Программа: ' + metaConfig.pageTitle}
      />
    </Layout>
  );
}
