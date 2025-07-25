import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_14 from "../../images/secondary_preview_14.webp"; // You might want to use a different image
import { Button } from "../../components/shared/Button/Button";
import { Final } from "../../components/Final/Final";
import finalStyles from "../../styles/finalContent.module.css";
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Избавление от фобий",
  "description": "Избавьтесь от любых фобий и страхов за 1-8 сессий с помощью нейротраблшутинга - метода, устраняющего глубинные психологические причины фобий",
  "url": "https://alexandrvasilev.ru/programs/freedom-from-phobia",
  "provider": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Нейротраблшутер, специалист по работе с подсознанием и фобиями",
    "url": "https://alexandrvasilev.ru/#about"
  },
  "areaServed": "Казань и онлайн",
  "serviceType": "Нейротраблшутинг",
  "offers": {
    "@type": "Offer",
    "price": "По запросу",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/programs/freedom-from-phobia#message"
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Результаты избавления от фобий",
    "description": "Полное или значительное снижение фобий и страхов, свобода действий, повышение качества жизни, возможность заниматься любимыми делами без страха"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/programs/freedom-from-phobia"
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Преодоление фобий - Александр "Интеграл" Васильев',
    pageTitle: "Преодоление фобий",
    description: "Преодоление фобий методом нейротраблшутинга",
    keywords: "фобии, страхи, тревоги, нейротраблшутинг, психотерапия",
    content: "",
    href: "/programs/freedom-from-phobia",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview text={metaConfig.pageTitle} image={secondary_preview_14} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Представьте, что завтра вы сможете делать то, что сегодня кажется невозможным.
          </VisibilityManager>

          <VisibilityManager as="p">
            Вы избегаете высоты, замкнутых пространств или общения с людьми? 
            Страх парализует вас, превращая жизнь в череду «нельзя» и «опасно»? 
            Пора вернуть себе контроль.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему фобии не уходят сами?
          </VisibilityManager>

          <VisibilityManager as="p">
            Фобия — это не просто страх. Это глубокая программа подсознания, которая 
            кричит: «Опасно! Беги!». Она могла сформироваться из-за:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Детской травмы (даже той, которую вы не помните)
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Внутриутробного стресса (например, эмоций матери во время беременности)
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Унаследованных» страхов (опыт прошлых поколений)
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Обычные методы (разговоры, медикаменты, дыхательные техники) дают временный 
            эффект, потому что не устраняют корень проблемы.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как работает нейротраблшутинг?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мы не боремся со страхом — мы стираем саму причину его появления.
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Диагностика за 1 сессию"}
            </h3>
            <p className={contentStyles.textDescription}>
              Находим событие или установку, которая запустила фобию. Часто это то, 
              что вы даже не осознаёте.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Проработка на уровне подсознания"}
            </h3>
            <p className={contentStyles.textDescription}>
              Без гипноза и болезненных воспоминаний. Мы перепрограммируем реакцию 
              вашего мозга на раздражитель.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Результат: жизнь без ограничений"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы больше не бежите от страха — вы просто перестаёте его чувствовать.
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
              Свободу передвижения: Летайте, плавайте, водите машину без паники
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уверенность: Перестаньте избегать людей, мест и ситуаций
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Энергию: Тратьте силы на жизнь, а не на борьбу со страхом
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
              Без лекарств и гипноза: Работаем только с вашим подсознанием
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Конфиденциально: Не нужно рассказывать о травмах — мы найдём их без вашего участия
            </p>
            <p className={contentStyles.textDescription}>
            <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гарантия результата: Если проблема не уйдёт за 8 сессий — я возвращаю вам деньги
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
              Начните жить без страха уже через несколько дней
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
        title={"Готовы начать жизнь без страха?"}
        description={`Оставьте заявку, и я свяжусь с вами в ближайшее время.
        `}
      />
    </Layout>
  );
} 