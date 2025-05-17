import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_5 from "../../images/secondary_preview_5.webp";
import { Button } from "../../components/shared/Button/Button";
import { Final } from "../../components/Final/Final";
import finalStyles from "../../styles/finalContent.module.css";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Удаление негативных воспоминаний",
  "description": "Эффективная методика нейротраблшутинга для нейтрализации травмирующих воспоминаний и их эмоционального заряда, восстановление психологического благополучия",
  "url": "https://alexandrvasilev.ru/programs/remove-bad-memories",
  "provider": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Нейротраблшутер, специалист по работе с подсознанием и травматическими воспоминаниями",
    "url": "https://alexandrvasilev.ru/#about"
  },
  "areaServed": "Казань и онлайн",
  "serviceType": "Нейротраблшутинг травматических воспоминаний",
  "offers": {
    "@type": "Offer",
    "price": "По запросу",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/programs/remove-bad-memories#message"
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Результаты программы",
    "description": "Нейтрализация эмоциональной реакции на травмирующие воспоминания, освобождение от навязчивых мыслей, восстановление психологического благополучия, внутренний покой"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/programs/remove-bad-memories"
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Удаление негативных воспоминаний - Александр "Интеграл" Васильев',
    pageTitle: "Удаление негативных воспоминаний",
    description: "Нейтрализация травмирующих воспоминаний и их эмоционального заряда с помощью нейротраблшутинга",
    keywords: "травматические воспоминания, психологические травмы, нейротраблшутинг, избавление от травм, эмоциональная свобода",
    content: "",
    href: "/programs/remove-bad-memories",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text={metaConfig.pageTitle}
        image={secondary_preview_5}
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Негативный опыт прошлого может блокировать ваш потенциал и мешать
            вам двигаться вперед. Нейротраблшутинг предлагает эффективный
            способ работы с подсознанием для переработки травмирующих событий и
            освобождения от ограничивающих убеждений.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что вас ждёт
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Освобождение от боли и обид прошлого.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Внутренняя свобода и легкость.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Новый взгляд на себя и свою жизнь.
            </p>
          </VisibilityManager>



          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как это работает?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мы работаем с вашим подсознанием, чтобы найти источник негатива. Вы
            узнаете, как прошлые события влияют на вашу жизнь сегодня, и
            получитe инструменты для их трансформации. Это не просто разговорная
            терапия — это мощный процесс, который мгновенно помогает вам
            перепрограммировать свои убеждения и изменить реакцию на прошлые
            события.
          </VisibilityManager>

          <VisibilityManager as="p">
            Позвольте себе исцелиться и двигаться вперед к жизни, которую вы
            заслуживаете.{" "}
          </VisibilityManager>

          
          <div style={{ height: "1px" }} />
          <Final animation customStyles={{ padding: "0 " }}>
            <h2 className={finalStyles.title} style={{ marginTop: "0" }}>
              Стоимость при достижении результата
            </h2>
            <div className={finalStyles.price}>125 000 ₽</div>
            <div className={finalStyles.description}>
              Возврат 100% денег при отсутствии эффекта
            </div>
            <Button
              className={contentStyles.message}
              href={{ hash: "#message" }}
              status="Записаться"
            />
          </Final>
          <div style={{ height: "1px" }} />
          
          <p style={{ fontSize: '12px', fontStyle: 'italic', marginBottom: '15px' }}>
            Метод не является медицинским и не заменяет консультации специалиста
          </p>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type={'Программа: ' + metaConfig.pageTitle}
        title={"Готовы жить лучше?"}
        description={`Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время.

          Первая консультация 20 минут — бесплатно. 
          
          Подготовьте вопрос, который вас интересует, и я раскрою и решу вашу проблему, а вы уже сможете сделать вывод, обращаться ко мне в дальнейшем или нет.
        `}
      />
    </Layout>
  );
}
