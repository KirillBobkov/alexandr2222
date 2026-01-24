import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_16 from "../../images/secondary_preview_16.webp"; // You might want to use a different image
import { Button } from "../../components/shared/Button/Button";
import { Final } from "../../components/Final/Final";
import finalStyles from "../../styles/finalContent.module.css";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
"name": "Трансформация ночных кошмаров и бессонных состояний",
  "description": "Полное и окончательное избавление от н кошмаров и нарушений сна навсегда! Инновационная программа Александра Васильева — передовой нейротраблшутинг: глубинная нейтрализация подсознательных источников, комплексная перестройка психических процессов, индивидуально разработанный подход, моментальное достижение устойчивых результатов. Без медикаментозных средств и гипнотических методик. Уже свыше 100 успешно завершенных случаев, гарантированный результат или финансовая компенсация. Ключевые слова: ночные кошмары лечение, бессонные состояния, нейротраблшутинг сновидений, глубинная психотерапия, избавление от кошмаров, Казань, профессиональная консультация, работа с подсознанием, улучшение качества сна, восстановление психического здоровья, трансформация сна, выздоровление.",
  "url": "https://alexandrvasilev.ru/programs/freedom-from-nightmares",
  "provider": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Нейротраблшутер, специалист по работе с подсознанием",
    "url": "https://alexandrvasilev.ru/#about"
  },
  "areaServed": "Казань и онлайн",
  "serviceType": "Нейротраблшутинг",
  "offers": {
    "@type": "Offer",
    "price": "По запросу",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/programs/freedom-from-nightmares#message"
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Результаты услуги",
    "description": "Глубокий восстанавливающий сон, отсутствие ночных кошмаров, повышение энергии и чувство безопасности"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/programs/freedom-from-nightmares"
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Спокойный сон — Александр "Интеграл" Васильев',
    pageTitle: 'Спокойный сон',
    description: 'Спокойный сон методом нейротраблшутинга',
    keywords: 'ночные кошмары, плохие сны, нейротраблшутинг, психотерапия, избавление от кошмаров, Казань, консультация, работа с подсознанием, улучшение сна',
    seoContent: 'Освободитесь от ночных кошмаров и инсомнии окончательно! Методика Александра Васильева — нейротраблшутинг: ликвидация подсознательных истоков, углубленная психологическая терапия, персонализированный подход, стремительные результаты. Без медикаментозных средств. Ключевые слова: ночные кошмары, тревожные сновидения, нейротраблшутинг, психотерапевтическая помощь, освобождение от кошмаров, Казань, профессиональная консультация, терапия подсознания, оптимизация сна, восстановление здорового отдыха.',
    content: '',
    href: '/programs/freedom-from-nightmares',
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview text={metaConfig.pageTitle} image={secondary_preview_16} />
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Представьте, что завтра вы проснётесь с улыбкой, а не в холодном поту.
          </VisibilityManager>

          <VisibilityManager as="p">
            Ночные кошмары — это не просто плохие сны. Это крик вашего подсознания, 
            которое пытается достучаться до вас через тьму.
          </VisibilityManager>

          <VisibilityManager as="p">
            Пора перестать бояться закрывать глаза и вернуть себе право на глубокий, 
            восстанавливающий сон.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему кошмары возвращаются снова и снова?
          </VisibilityManager>

          <VisibilityManager as="p">
            Сны — это язык подсознания. Если коротко, ночной кошмар является следствием 
            конфликта между страхом и желанием.
          </VisibilityManager>

          <VisibilityManager as="p">
            Таблетки и техники релаксации лишь маскируют симптомы. Чтобы кошмары ушли 
            навсегда, необходимо устранить их источник.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как работает нейротраблшутинг?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мы не просто успокаиваем ум — мы находим и нейтрализуем причину страхов, 
            которая прячется в глубинах подсознания.
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Диагностика за 1 сессию"}
            </h3>
            <p className={contentStyles.textDescription}>
              Определяем событие или установку, которая превращает ваши сны в кошмары.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Проработка без погружения в травму"}
            </h3>
            <p className={contentStyles.textDescription}>
              Без гипноза и болезненных воспоминаний. Мы меняем «сценарий», по которому 
              работает ваше подсознание.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Результат: сон как лекарство"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы спите глубоко, просыпаетесь отдохнувшим, а утро начинается с чувства 
              безопасности.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что вы получите?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Глубокий сон: просыпайтесь бодрым, а не измотанным
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Чувство безопасности: ваше подсознание перестанет атаковать вас по ночам
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Энергию: тратьте силы на жизнь, а не на борьбу со страхами
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
            Почему стоит выбрать эту программу?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Без таблеток и гипноза: работаем только с глубинными установками
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Конфиденциально: не нужно делиться кошмарами — мы найдём причину без подробностей
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гарантия: если кошмары не уйдут за 8 сессий — вернём деньги
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
              Спите спокойно уже через несколько недель
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            P.S. Ночь — это время для восстановления, а не для битвы с самим собой. 
            Позвольте себе наконец выспаться.
          </VisibilityManager>
          
          <p style={{ fontSize: '12px', fontStyle: 'italic', marginBottom: '15px' }}>
            Метод не является медицинским и не заменяет консультации специалиста
          </p>
        </div>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type={'Программа: ' + metaConfig.pageTitle}
        title={"Избавьтесь от ночных кошмаров навсегда"}
        description={`Оставьте заявку, и я свяжусь с вами в ближайшее время.
        `}
      />
    </Layout>
  );
} 