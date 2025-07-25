import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_15 from "../../images/secondary_preview_15.webp"; // You might want to use a different image
import { Button } from "../../components/shared/Button/Button";
import { Final } from "../../components/Final/Final";
import finalStyles from "../../styles/finalContent.module.css";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Избавление от аллергии",
  "description": "Избавьтесь от аллергии любого типа за 1-5 сессий с помощью нейротраблшутинга - метода работы с подсознанием, устраняющего психосоматические причины аллергических реакций",
  "url": "https://alexandrvasilev.ru/programs/freedom-from-allergy",
  "provider": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Нейротраблшутер, специалист по работе с психосоматикой и аллергиями",
    "url": "https://alexandrvasilev.ru/#about"
  },
  "areaServed": "Казань и онлайн",
  "serviceType": "Нейротраблшутинг психосоматических состояний",
  "offers": {
    "@type": "Offer",
    "price": "По запросу",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/programs/freedom-from-allergy#message"
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Результаты избавления от аллергии",
    "description": "Полное или значительное снижение аллергических реакций, свобода в питании и образе жизни, улучшение самочувствия и качества жизни"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/programs/freedom-from-allergy"
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Свобода от аллергии - Александр "Интеграл" Васильев',
    pageTitle: "Свобода от аллергии",
    description: "Свобода от аллергии методом нейротраблшутинга",
    keywords: "аллергия, психосоматика, нейротраблшутинг, лечение аллергии, избавление от аллергии",
    content: "",
    href: "/programs/freedom-from-allergy",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview text={metaConfig.pageTitle} image={secondary_preview_15} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Представьте, что завтра вы сможете есть любимые продукты, гулять в цветущем 
            саду и забыть о таблетках.
          </VisibilityManager>

          <VisibilityManager as="p">
            Аллергия — это не просто реакция тела. Это сигнал вашего подсознания, 
            что что-то внутри сопротивляется жизни.
          </VisibilityManager>

          <VisibilityManager as="p">
            Предлагаю прекратить маскировать симптомы и устранить причину.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему аллергия возвращается снова и снова?
          </VisibilityManager>

          <VisibilityManager as="p">
            Таблетки и диеты борются со следствием, но не с корнем. Аллергия часто 
            рождается из:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Подавленных эмоций (гнев, страх, чувство вины)
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Психосоматических программ («Мир опасен», «Я не могу защититься»)
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Внутриутробного опыта (стресс матери во время беременности)
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Травм прошлых поколений (семейные сценарии)
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваше тело «бунтует» не из-за пыльцы или еды — оно кричит о неразрешённых 
            внутренних конфликтах.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как работает нейротраблшутинг?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мы перепрограммируем подсознание, чтобы ваше тело перестало видеть угрозу 
            там, где её нет.
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Диагностика"}
            </h3>
            <p className={contentStyles.textDescription}>
              Находим событие или установку, которая запустила аллергическую реакцию.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Проработка на глубинном уровне"}
            </h3>
            <p className={contentStyles.textDescription}>
              Без гипноза и лекарств. Меняем код, который заставляет иммунитет 
              «атаковать» без причины.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Результат: ваше тело становится союзником"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы едите, дышите и живёте без страха.
            </p>
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
            <div style={{ height: "1px" }} />
            <Button
              className={contentStyles.message}
              href={{ hash: "#message" }}
              status="Записаться"
            />
          </Final>
          <div style={{ height: "1px" }} />


          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что вы получите?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Свободу выбора: ешьте, пейте, нюхайте цветы без страха
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Энергию: перестаньте тратить силы на борьбу с симптомами
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уверенность: ваше тело больше не враг — оно на вашей стороне
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему стоит выбрать эту программу?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Безопасно: никаких таблеток, уколов или диет
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Приватно: не нужно обсуждать события — мы работаем с эмоциями напрямую
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гарантия: если аллергия не уйдёт за 8 сессий — я верну вам деньги
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как начать?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              1.
              {"  "}
              Оставьте заявку на сайте
            </p>
            <p className={contentStyles.textDescription}>
              2.
              {"  "}
              Пройдите диагностику (онлайн или очно)
            </p>
            <p className={contentStyles.textDescription}>
              3.
              {"  "}
              Наслаждайтесь жизнью без ограничений уже через недели
            </p>
          </VisibilityManager>

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
        title={"Избавьтесь от аллергии навсегда"}
        description={`Оставьте заявку, и я свяжусь с вами в ближайшее время.
        `}
      />
    </Layout>
  );
} 