import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_2 from "../../images/secondary_preview_2.webp";
import secondary_preview_19 from "../../images/secondary_preview_19.webp";
import { Button } from "../../components/shared/Button/Button";
import { Final } from "../../components/Final/Final";
import finalStyles from "../../styles/finalContent.module.css";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Программа «Полюби себя»",
  "description": "Полюби себя и обрети внутреннюю гармонию! Программа Александра Васильева — это нейротраблшутинг: устранение блоков, мешающих любви к себе, повышение самооценки, индивидуальный подход, быстрый результат. Более 1000 успешных случаев, гарантия результата или возврат денег. Ключевые слова: самооценка, уверенность в себе, любовь к себе, нейротраблшутинг, личностный рост, Казань, консультация, работа с подсознанием, гармония, принятие себя.",
  "url": "https://alexandrvasilev.ru/programs/love-myself",
  "provider": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Нейротраблшутер, специалист по работе с подсознанием и личностным ростом",
    "url": "https://alexandrvasilev.ru/#about"
  },
  "areaServed": "Казань и онлайн",
  "serviceType": "Нейротраблшутинг личностного роста",
  "offers": {
    "@type": "Offer",
    "price": "По запросу",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/programs/love-myself#message"
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Результаты программы",
    "description": "Повышение самооценки, обретение уверенности в себе, принятие себя, улучшение отношений с окружающими, внутренняя гармония"
  },
  "mainEntityOfPage": {
    "@type": "WebPage", 
    "@id": "https://alexandrvasilev.ru/programs/love-myself"
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Программа «Полюби себя» — Александр "Интеграл" Васильев',
    pageTitle: 'Программа «Полюби себя»',
    description: 'Повышение самооценки и уверенности в себе методом нейротраблшутинга',
    keywords: 'самооценка, уверенность в себе, любовь к себе, нейротраблшутинг, личностный рост, Казань, консультация, работа с подсознанием, гармония',
    seoContent: 'Развивайте самопринятие и достигайте внутренней гармонии! Методика Александра Васильева — нейротраблшутинг: ликвидация препятствий, блокирующих самолюбие, повышение самооценки, персонализированный подход, быстродействующие результаты. Свыше 1000 результативных случаев, гарантия эффекта или полное возмещение. Ключевые слова: самооценка, уверенность в своих силах, самопринятие, нейротраблшутинг, личностное развитие, Казань, профессиональная консультация, терапия подсознания, внутренняя гармония, принятие собственной личности.',
    content: '',
    href: '/programs/love-myself',
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text={metaConfig.pageTitle}
        image={secondary_preview_2}
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Часто ли вы замечаете свои достоинства? Чувствуете ли себя
            достойными любви и уважения? Если ответ отрицательный, то настало
            время изменить это. Я помогу вам обрести гармонию с собой и
            научиться любить себя.
          </VisibilityManager>
          <VisibilityManager as="p">
            Нейротраблшутинг — это уникальный метод работы с подсознанием,
            который помогает вам трансформировать негативные убеждения и эмоции,
            мешающие вам полюбить себя.{" "}
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            С помощью специальных техник я помогу вам
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Обрести уверенность в своих достоинствах и способностях.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Избавиться от чувства вины и неполноценности.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Научиться принимать себя таким, какой вы есть.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ощутить радость и вдохновение от своей уникальности.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Результаты, которые вы получите
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уверенность в своих достоинствах и способностях.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Освобождение от негативных эмоций и убеждений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Способность принимать и любить себя без ограничений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гармония с собой и окружающим миром.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваша любовь к себе — это основа счастливой жизни. Я могу убрать из
            вашего подсознания абсолютно всё, что может мешать вам любить себя.
            Ваша жизнь станет ярче.
          </VisibilityManager>

          <VisibilityManager as="p">
            Запишитесь на бесплатную консультацию прямо сейчас и начните менять
            свою жизнь к лучшему.{" "}
          </VisibilityManager>
          
          <p style={{ fontSize: '12px', fontStyle: 'italic', marginBottom: '15px' }}>
            Метод не является медицинским и не заменяет консультации специалиста
          </p>

     
          <div style={{ height: "1px" }} />
          <Final animation customStyles={{ padding: "0 " }}>
            <h2 className={finalStyles.title} style={{ marginTop: "0" }}>
              Стоимость при достижении результата
            </h2>
            <div className={finalStyles.price}>125 000 ₽</div>
            <div className={finalStyles.description}>
              Возврат 100% денег при отсутствии эффекта
            </div>
            <div style={{ height: "1px" }} />
            <Button
              className={contentStyles.message}
              href={{ hash: "#message" }}
              status="Записаться"
            />
          </Final>
          <div style={{ height: "1px" }} />

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
