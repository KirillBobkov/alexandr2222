import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_31 from "../../images/secondary_preview_31.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "179 встреч с Пантерным Мухомором: опыт и наблюдения из церемоний",
  "description": "Личный опыт проведения 179 церемоний с Пантерным Мухомором за 8 месяцев. Разные типы встреч — от встреч с Высшими Силами до тихих трансформаций. Шаманские практики, безопасный подход, консультации по работе с мухомором. Ключевые слова: мухомор, шаманские практики, церемонии, трансформация, духовные практики, шаман Казань, консультация, опыт с мухомором, ретриты.",
  "image": "/_next/static/media/secondary_preview_22.webp",
  "url": "https://alexandrvasilev.ru/blog/179-panther-amanita-meetings",
  "inLanguage": "ru",
  "datePublished": "2025-08-24",
  "publisher": {
    "@type": "Organization",
    "name": "INTEGRAAL",
    "url": "https://alexandrvasilev.ru",
    "logo": {
      "@type": "ImageObject",
      "url": "/_next/static/media/logo.ab1a421b.webp",
      "width": 378,
      "height": 400
    }
  },
  "author": {
    "@type": "Person",
    "name": "Александр Васильев",
    "url": "https://alexandrvasilev.ru/#about",
    "description": "Нейротраблшутер, специалист по работе с подсознанием и расширению восприятия",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/179-panther-amanita-meetings"
  },
  "keywords": "мухомор, церемонии, шаманские практики, трансформация, духовные практики, ретриты",
  "about": [
    {
      "@type": "Thing",
      "name": "Церемонии с мухомором",
      "description": "Личный опыт проведения церемоний с Пантерным Мухомором и их влияние на трансформацию"
    },
    {
      "@type": "Thing",
      "name": "Духовные практики",
      "description": "Практические аспекты работы с мухомором для личностного роста и развития"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/179-panther-amanita-meetings#message",
    "description": "Запишитесь на консультацию, чтобы узнать больше о работе с мухомором на основе реального опыта."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "179 встреч с Пантерным Мухомором: опыт и наблюдения из церемоний",
    description:
      "Личный опыт проведения 179 церемоний с Пантерным Мухомором за 8 месяцев. Типы встреч, трансформации и наблюдения о взаимодействии с мухомором.",
    keywords:
      "мухомор, церемонии, шаманские практики, трансформация, духовные практики, ретриты, шаман Казань, консультация, опыт с мухомором, пантерный мухомор",
    seoContent: "179 ритуальных сессий с Пантерным Мухомором за 8 месяцев — авторский опыт и наблюдения. Каждая церемония уникальна: встречи с Высшими Силами, мягкие изменения, телесное обновление. Мухомор тонко откликается на состояние участника и предлагает то, что актуально именно сейчас. Безопасный подход, персональные консультации. Ключевые слова: мухоморные сессии, ритуальные церемонии, шаманские традиции, духовная трансформация, энергетические практики, ретриты, проводник Казань, индивидуальная консультация, мухоморный опыт.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="179 встреч с Пантерным Мухомором" 
        image={secondary_preview_31} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            ОПЫТ И НАБЛЮДЕНИЯ ИЗ ЦЕРЕМОНИЙ
          </VisibilityManager>

          <VisibilityManager as="p">
            Столько церемоний удалось провести за последние 8 месяцев. Каждое погружение — шаг в неизвестность. Невозможно предсказать, что откроется, что изменится, и что останется после ретрита. Ты просто следуешь зову, преодолевая сомнения, без ожиданий и надежд.
          </VisibilityManager>

          <VisibilityManager as="p">
            При этом, складывается ощущение, что Мухомор учитывает всё — состояние человека, его путь, намерение, окружение… И отвечает ровно тем, что в моменте важнее всего для самого человека.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ВСТРЕЧИ С ВЫСШИМИ СИЛАМИ
          </VisibilityManager>

          <VisibilityManager as="p">
            Люди говорят о встречах с Теми, кого называют Богами. У меня так получилось с первого погружения. Во время аудиенции с Высшими Силами, мне были даны чёткие рекомендации.
          </VisibilityManager>

          <VisibilityManager as="p">
            Выполняя эти рекомендации, вижу конкретные результаты:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              В делах
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              В здоровье
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              В восприятии жизни
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            А бывает, человек ничего не помнит после ретрита. Ни образов, ни слов. И такое у меня было тоже. Но уже на следующий день — ты другой. Спокойнее. Яснее. Лучше слышишь себя.  Физически ощущается прилив сил, словно время пошло вспять, и ты становишься моложе. 
          </VisibilityManager>


          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            НЕОБХОДИМАЯ БОЛЬ РОСТА
          </VisibilityManager>

          <VisibilityManager as="p">
            Очень редко, но случается и так, что после ретрита ощущается некоторая подавленность — думаю, это тоже нормально. Положительные изменения необязательно всегда должны быть сопряжены с радостью и удовольствием.
          </VisibilityManager>

          <VisibilityManager as="p">
            На определённых этапах развития человеку просто необходима боль, а Мухомор существенно сокращает продолжительность болезненной закалки и ускоряет твой рост.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор любит тебя и, при грамотном и уважительном подходе к нему, никогда не сделает тебе плохо. Помни об этом всегда.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ИНДИВИДУАЛЬНОСТЬ ПУТИ
          </VisibilityManager>

          <VisibilityManager as="p">
            Взаимодействие со священными грибами и растениями — далеко не единственный путь познания. Единого пути развития в принципе не существует, у каждого человека — свой собственный ключ к секретам Мироздания.
          </VisibilityManager>

          <VisibilityManager as="p">
            Однако, если вы ощущаете непреодолимое желание познакомиться с Мухомором — считайте, что вас пригласили. 
          </VisibilityManager>

          <VisibilityManager as="p">
            <i>P.S.</i> Никого не призываю употреблять Мухомор и ничего не пропагандирую, но делюсь тем, что есть. 
          </VisibilityManager>

          
          <VisibilityManager as="p">
            До встречи!
          </VisibilityManager>

          <p
              style={{
                fontSize: "12px",
                fontStyle: "italic",
              }}
            >
              Метод не является медицинским и не заменяет консультации
              специалиста
            </p>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="179 встреч с Пантерным Мухомором (статья)"
        title={"КОНСУЛЬТАЦИЯ"}
        description={`Хотите узнать больше о работе с Мухомором на основе реального опыта? Запишитесь на консультацию — свяжусь с вами в ближайшее время.`}
      />
    </Layout>
  );
}
