import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_1 from "../../images/secondary_preview_1.webp";
import secondary_preview_20 from "../../images/secondary_preview_20.webp";
import { Button } from "../../components/shared/Button/Button";
import { Final } from "../../components/Final/Final";
import finalStyles from "../../styles/finalContent.module.css";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
"name": "Трансформационная программа «Обретение любви к жизни»",
  "description": "Восстановите радостное восприятие жизни и обретите глубокий смысл существования! Инновационная программа Александра Васильева — передовой нейротраблшутинг: полная нейтрализация апатических состояний, глубокая трансформация депрессивных проявлений, проработка глубинных негативных установок, индивидуально разработанный подход, моментальное достижение устойчивых результатов. Уже свыше 100 успешно завершенных случаев, гарантированный результат или финансовое возмещение. Ключевые слова: трансформация апатии, депрессивные состояния лечение, обретение любви к жизни, нейротраблшутинг эмоционального состояния, восстановление радости жизни, эмоциональное восстановление, Казань, профессиональная консультация, глубинная работа с подсознанием, достижение гармонии, формирование жизненной мотивации, трансформация эмоционального фона.",
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
    title: 'Программа «Полюби жизнь» — Александр "Интеграл" Васильев',
    pageTitle: 'Программа «Полюби жизнь»',
    description: 'Преодоление апатии, уныния и депрессии методом нейротраблшутинга',
    keywords: 'апатия, депрессия, полюбить жизнь, нейротраблшутинг, радость жизни, эмоциональные состояния, Казань, консультация, работа с подсознанием',
    seoContent: 'Верните радость и смысл жизни. Нейротраблшутинг Александра Васильева: устранение апатии, депрессивных проявлений и уныния, проработка разрушительных установок, индивидуальный подход, быстрый эффект. Более 100 успешных кейсов, гарантия результата или возврат средств. Ключевые слова: апатия, депрессия, любовь к жизни, нейротраблшутинг, радость жизни, эмоциональная регуляция, Казань, консультация, работа с подсознанием, внутренняя гармония, восстановление мотивации.',
    content: '',
    href: '/programs/love-life',
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text={metaConfig.pageTitle}
        image={secondary_preview_1}
      />
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
