import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_3 from "../../images/secondary_preview_3.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Сеанс релаксации",
  "description": "Глубокая релаксация и восстановление энергии с применением нейротраблшутинга, вегетализма и других методик для снятия стресса и напряжения",
  "url": "https://alexandrvasilev.ru/programs/relax-session",
  "provider": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Нейротраблшутер, специалист по работе с подсознанием и техникам релаксации",
    "url": "https://alexandrvasilev.ru/#about"
  },
  "areaServed": "Казань и онлайн",
  "serviceType": "Нейротраблшутинг стрессовых состояний",
  "offers": {
    "@type": "Offer",
    "price": "По запросу",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/programs/relax-session#message"
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Результаты сеанса",
    "description": "Глубокая релаксация, снятие напряжения, восстановление энергии, улучшение сна, снижение тревожности, внутреннее спокойствие"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/programs/relax-session"
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Сеанс релаксации - Александр "Интеграл" Васильев',
    pageTitle: "Сеанс релаксации",
    description: "Глубокая релаксация и восстановление энергии с применением нейротраблшутинга и вегетализма",
    keywords: "релаксация, снятие стресса, нейротраблшутинг, вегетализм, восстановление энергии",
    content: "",
    href: "/programs/relax-session",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text={metaConfig.pageTitle}
        image={secondary_preview_3}
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Современный мир требует от нас постоянной активности, что приводит к
            стрессу, тревоге и перенапряжению. Ваш мозг и тело нуждаются в
            отдыхе и восстановлении.
          </VisibilityManager>

          <VisibilityManager as="p">
            Сессия релаксации - это не просто отдых, это глубокая работа с вашим
            подсознанием, направленная на снятие напряжения и восстановление
            внутреннего баланса. Используя мягкие и эффективные техники
            нейротраблшутинга, я помогу вам достичь состояния глубокого
            расслабления и внутреннего покоя.{" "}
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            После сессии вы почувствуете
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Глубокое расслабление и ощущение легкости.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Снижение уровня стресса и тревоги.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Прилив сил и энергии.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Улучшение концентрации и ясности ума.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Позвольте себе отдохнуть и восстановить свои ресурсы. Запишитесь на
            сессию релаксации прямо сейчас!
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
