import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_20 from "../../images/secondary_preview_20.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Как перестать быть вечным спасателем: нейротраблшутинг в борьбе с созависимостью",
  "description": "Созависимость — это не приговор. Нейротраблшутинг помогает выйти из роли вечного спасателя, восстановить личные границы, избавиться от чувства вины и вернуть себе право на собственную жизнь. Глубокая работа с подсознанием, проработка детских травм, индивидуальный подход, быстрый результат. Ключевые слова: созависимость, нейротраблшутинг, психология, отношения, спасатель, травмы, консультация, Казань, работа с подсознанием, личные границы, эмоциональная зависимость, проработка травм, восстановление самооценки.",
  "image": "/_next/static/media/secondary_preview_20.webp",
  "url": "https://alexandrvasilev.ru/blog/codependency",
  "inLanguage": "ru",
  "datePublished": "2025-03-21",
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
    "description": "Нейротраблшутер, специалист по работе с подсознанием и психологическими травмами",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/codependency"
  },
  "keywords": "созависимость, нейротраблшутинг, психология, отношения, спасатель, травмы",
  "about": [
    {
      "@type": "Thing",
      "name": "Созависимость",
      "description": "Психологический паттерн поведения, при котором человек жертвует собственными интересами ради других и строит самооценку на помощи окружающим"
    },
    {
      "@type": "Thing",
      "name": "Нейротраблшутинг в психологии",
      "description": "Метод работы с подсознательными травмами, формирующими созависимое поведение и роль «спасателя»"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/codependency#message",
    "description": "Запишитесь на консультацию, чтобы узнать, как освободиться от созависимых отношений и вернуть право на собственную жизнь."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Как перестать быть вечным спасателем: нейротраблшутинг в борьбе с созависимостью",
    description: "Созависимость — это не забота, а подсознательная ловушка. Узнайте, как нейротраблшутинг помогает выйти из роли спасателя и вернуть себе свою жизнь.",
    keywords: "созависимость, нейротраблшутинг, психология, отношения, спасатель, травмы, консультация, Казань, работа с подсознанием, личные границы, эмоциональная зависимость",
    seoContent: "Созависимость — преодолимая модель поведения. Нейротраблшутинг способствует освобождению от роли постоянного помощника, восстановлению персональных границ, избавлению от навязчивого чувства вины и возврату права на собственную жизнь. Углубленная терапия подсознания, проработка детских психотравм, персонализированный подход, быстрые результаты. Ключевые слова: созависимые отношения, нейротраблшутинг, психологическая помощь, межличностные связи, синдром спасателя, психологические травмы, профессиональная консультация, Казань, терапия подсознания, персональные границы, эмоциональная зависимость, травматерапия, восстановление самооценки.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="Как перестать быть «вечным спасателем»" 
        image={secondary_preview_20} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Как перестать быть «вечным спасателем»: нейротраблшутинг в борьбе с созависимостью
          </VisibilityManager>

          <VisibilityManager as="p">
            «Если я не помогу, они пропадут», «Без меня всё развалится», «Я обязан всем помогать». Знакомо? Если да, вы — возможно, не «добрый самаритянин», а заложник созависимости.
          </VisibilityManager>

          <VisibilityManager as="p">
            Созависимость — это не забота, а подсознательная ловушка, которая заставляет вас жертвовать собой ради других.
          </VisibilityManager>

          <VisibilityManager as="p">
            Я имею опыт работы с людьми, которые годами «тащили» на себе партнёров, родственников и даже коллег, пока не осознали: их жертвенность не спасает, а разрушает.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему вы «спасаете» тех, кто не просит о помощи?
          </VisibilityManager>

          <VisibilityManager as="p">
            Созависимость — это не черта характера, а программа подсознания, сформированная в детстве.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Родители перекладывали на вас взрослые обязанности: «Присмотри за братом, его нельзя оставлять одного».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гиперопека: «Я живу ради тебя» → «Я должен жить ради других».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Эмоциональный шантаж: «Без тебя мама умрёт от горя».
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Во взрослой жизни это превращается в паттерн: вы тянете чужие проблемы, игнорируя свои потребности, и чувствуете вину за любую попытку сказать «нет».
          </VisibilityManager>
          
          <div style={{ height: "1px" }} />

          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как нейротраблшутинг ломает шаблон «спасателя»?
          </VisibilityManager>

          <VisibilityManager as="p">
            Я не учу «эгоизму» и не борюсь с вашей добротой. Моя задача — найти и нейтрализовать корневую травму, которая заставляет вас жертвовать собой.
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Этапы работы:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              1.
              {"  "}
              Диагностика: Определяю событие, которое закрепило установку «Я должен спасать».
            </p>
            <p className={contentStyles.textDescription}>
              {"  "}
              Пример: Клиентка Юля, 40 лет, содержала мужа-алкоголика 10 лет. На сессии выяснилось: в 6 лет она спасла младшего брата от удушья, и отец впервые похвалил её.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              2.
              {"  "}
              Проработка: Убираю эмоциональный заряд травмы. Для подсознания похвала отца перестаёт быть «платой» за спасение.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              3.
              {"  "}
              Интеграция: Закрепляем новые установки:
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Я имею право выбирать, кому помогать».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Мои потребности так же важны, как чужие».
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            5 признаков того, что вы находитесь в ловушке созависимости
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>1.</span>
              {"  "}
              Вы чувствуете вину за чужое недовольство.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>2.</span>
              {"  "}
              Ваша самооценка зависит от «спасённых» людей.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>3.</span>
              {"  "}
              Вы игнорируете свои болезни, усталость, эмоции.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>4.</span>
              {"  "}
              Вам кажется, что без вас мир рухнет.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>5.</span>
              {"  "}
              Вы злитесь на тех, кому помогаете, но молчите.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Когда нейротраблшутинг необходим?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Если вы жертвуете карьерой, здоровьем, отношениями ради «спасения» других.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Если чувствуете, что вами манипулируют, но не можете отказать.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Если помощь другим вызывает не радость, а истощение и злость.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Главное, что я хочу донести
          </VisibilityManager>

          <VisibilityManager as="p">
            Спасая других, вы теряете себя. Но это не ваша вина — так работают подсознательные программы, заложенные давным-давно.
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшутинг помогает не «стать эгоистом», а вернуть себе право на жизнь. Вашу жизнь.
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
        type="Созависимость отношений (статья)"
        title="Готовы вернуть себе свою жизнь?"
        description={`Созависимость — это не приговор, а программа, которую можно изменить. Запишитесь на консультацию, и мы вместе найдём путь к вашей свободе.`}
      />
    </Layout>
  );
} 