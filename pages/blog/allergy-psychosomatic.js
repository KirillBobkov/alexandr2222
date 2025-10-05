import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_22 from "../../images/secondary_preview_22.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Аллергия — это не приговор: психосоматические причины и их устранение",
  "description": "Психосоматика аллергии — ключ к избавлению от хронических симптомов без таблеток и уколов. Нейротраблшутинг помогает выявить и устранить подсознательные причины аллергических реакций: пищевая аллергия, поллиноз, аллергия на животных, бытовая аллергия. Профессиональный нейротраблшутер работает с любыми формами аллергии у взрослых и детей. Безопасные и проверенные методики, индивидуальный подход, глубокая работа с подсознанием. Запишитесь на консультацию и узнайте, как навсегда избавиться от аллергии через устранение внутренних конфликтов и эмоциональных блоков. Ключевые слова: аллергия, психосоматика, нейротраблшутинг, подсознание, лечение аллергии, консультация, Казань, избавиться от аллергии, работа с подсознанием, психология здоровья.",
  "image": "/_next/static/media/secondary_preview_22.webp",
  "url": "https://alexandrvasilev.ru/blog/allergy-psychosomatic",
  "inLanguage": "ru",
  "datePublished": "2025-04-01",
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
    "description": "Нейротраблшутер, специалист по работе с подсознанием и психосоматикой",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/allergy-psychosomatic"
  },
  "keywords": "аллергия, психосоматика, нейротраблшутинг, подсознание, здоровье, психология",
  "about": [
    {
      "@type": "Thing",
      "name": "Психосоматические причины аллергии",
      "description": "Связь аллергических реакций с подсознательными эмоциональными процессами"
    },
    {
      "@type": "Thing",
      "name": "Нейротраблшутинг в устранении аллергии",
      "description": "Методы работы с подсознанием для устранения первопричин аллергических реакций"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/allergy-psychosomatic#message",
    "description": "Запишитесь на консультацию, чтобы узнать, как избавиться от аллергии через работу с подсознанием."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Аллергия — это не приговор: психосоматические причины и их устранение",
    description:
      "Разбор психосоматических причин аллергии и как нейротраблшутинг помогает избавиться от неё навсегда",
    keywords:
      "аллергия, психосоматика, нейротраблшутинг, подсознание, здоровье, психология",
    seoContent: "Психосоматическая природа аллергии — путь к решению хронических симптомов без медикаментов. Нейротраблшутинг помогает выявлять и устранять корневые причины аллергии: пищевые реакции, сезонные обострения, чувствительность к животным и бытовым аллергенам. Работаю со взрослыми и детьми, применяю безопасные методы и персональный подход, глубоко прорабатывая подсознание. Запишитесь на консультацию, чтобы понять, как избавиться от аллергии через снятие внутренних конфликтов и эмоциональных блокировок. Ключевые слова: аллергические реакции, психосоматические причины, нейротраблшутинг, подсознательные программы, терапия аллергии, консультация, Казань, освобождение от аллергии, работа с подсознанием, целостное здоровье.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="Аллергия — это не приговор" 
        image={secondary_preview_22} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Аллергия — это не приговор: психосоматические причины и их устранение
          </VisibilityManager>

          <VisibilityManager as="p">
            Аллергия воспринимается многими как неизлечимое состояние, с которым остаётся лишь смириться. Врачи предлагают таблетки, уколы, диеты — всё это помогает на время облегчить симптомы, но не устраняет саму проблему.
          </VisibilityManager>

          <VisibilityManager as="p">
            Однако, если взглянуть глубже, становится ясно: аллергия — это не просто реакция тела, а сигнал подсознания, который можно расшифровать и устранить.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Аллергия и подсознание: в чём связь?
          </VisibilityManager>

          <VisibilityManager as="p">
            Тело человека напрямую связано с его эмоциональным состоянием. Каждое заболевание, включая аллергию, несёт в себе скрытый смысл. Оно показывает, что внутри есть конфликт, который сознание не замечает, но который отчётливо ощущает организм.
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему возникает аллергия?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Подавленные эмоции. Часто аллергия формируется в детстве, когда ребёнок сталкивается с сильными переживаниями, но не может их выразить.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Защитный механизм. Иногда аллергия служит способом «оградиться» от чего-то неприятного.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Родительские установки. Дети часто перенимают не только модели поведения родителей, но и их болезни.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как нейротраблшутинг помогает избавиться от аллергии?
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшутинг — это метод, который позволяет работать с глубинными установками, страхами и внутренними конфликтами, создающими аллергические реакции.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Диагностика подсознательных причин. Я помогаю выявить, с чем связана аллергия.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Перепрограммирование реакции организма. Через работу с подсознанием мы устраняем саму причину.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Закрепление изменений. Человек замечает, как аллергическая реакция ослабевает и исчезает.
            </p>
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

          <div style={{ height: '1px' }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Реальные результаты: можно ли избавиться от аллергии навсегда?
          </VisibilityManager>

          <VisibilityManager as="p">
            Ответ — да. Я работал с людьми, которые годами страдали от аллергии на пыльцу, животных, еду, запахи — и полностью избавились от неё. После проработки они спокойно едят продукты, которых раньше избегали, держат дома кошек и гуляют в сезон цветения без страха перед приступом.
          </VisibilityManager>

          <VisibilityManager as="p">
            В отличие от традиционной медицины, которая предлагает лишь временное снятие симптомов, нейротраблшутинг устраняет первопричину, благодаря чему аллергия уходит навсегда.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы устали жить с ограничениями и хотите освободиться от аллергии, это возможно. Позвольте себе шагнуть в жизнь, где ваше тело больше не сопротивляется, а живёт в гармонии с окружающим миром.
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Аллергия — это не приговор (статья)"
        title="Консультация по избавлению от аллергии"
        description="Хотите узнать, как избавиться от аллергии через работу с подсознанием? Запишитесь на консультацию, и мы обсудим, как нейротраблшутинг может помочь именно вам."
      />
    </Layout>
  );
} 