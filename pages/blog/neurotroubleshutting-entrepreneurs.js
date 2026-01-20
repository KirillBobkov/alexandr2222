import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_26 from "../../images/secondary_preview_26.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Нейротраблшутинг для предпринимателей: преодоление внутренних блоков роста",
  "description": "Нейротраблшутинг для предпринимателей — быстрый способ устранить внутренние блоки, саботаж, страхи и ограничения, мешающие росту бизнеса и личной эффективности. Глубокая работа с подсознанием, индивидуальный подход, быстрый результат, поддержка опытного специалиста. Ключевые слова: нейротраблшутинг, предприниматели, бизнес, подсознание, внутренние блоки, рост, масштабирование, саботаж, консультация, Казань, работа с подсознанием, бизнес-психология, личная эффективность, устранение страхов, развитие бизнеса.",
  "image": "/_next/static/media/secondary_preview_26.webp",
  "url": "https://alexandrvasilev.ru/blog/neurotroubleshutting-entrepreneurs",
  "inLanguage": "ru",
  "datePublished": "2025-04-15",
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
    "description": "Нейротраблшутер, специалист по работе с подсознанием и развитию бизнеса",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/neurotroubleshutting-entrepreneurs"
  },
  "keywords": "нейротраблшутинг, предприниматели, бизнес, подсознание, внутренние блоки, рост, масштабирование, саботаж",
  "about": [
    {
      "@type": "Thing",
      "name": "Нейротраблшутинг",
      "description": "Метод точечной перезагрузки мышления через работу с подсознанием и устранение внутренних блоков"
    },
    {
      "@type": "Thing",
      "name": "Бизнес-психология",
      "description": "Работа с психологическими барьерами, которые мешают предпринимателям масштабировать бизнес"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/neurotroubleshutting-entrepreneurs#message",
    "description": "Запишитесь на консультацию, чтобы узнать, как нейротраблшутинг может помочь преодолеть внутренние блоки и ускорить рост вашего бизнеса."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Нейротраблшутинг для предпринимателей: преодоление внутренних блоков роста",
    description: "Как нейротраблшутинг помогает предпринимателям убрать подсознательные блоки, мешающие масштабированию бизнеса и личному росту.",
    keywords: "нейротраблшутинг, предприниматели, бизнес, подсознание, внутренние блоки, рост, масштабирование, саботаж, консультация, Казань, работа с подсознанием, бизнес-психология, личная эффективность",
    seoContent: "Нейротраблшутинг для бизнесменов — быстрый способ убрать внутренние препятствия, самосаботаж, страхи и ограничения, тормозящие рост компании и личной эффективности. Глубокая работа с подсознанием, персональная методика, заметный эффект, поддержка эксперта. Ключевые слова: нейротраблшутинг для бизнеса, предпринимательство, рост, подсознательная работа, внутренние ограничения, масштабирование, самосаботаж, консультация, Казань, работа с подсознанием, бизнес-психология, личная эффективность, устранение страхов, развитие бизнеса.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="Нейротраблшутинг для предпринимателей" 
        image={secondary_preview_26} 
      />
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Нейротраблшутинг для предпринимателей: преодоление внутренних блоков роста
          </VisibilityManager>

          <VisibilityManager as="p">
            Выстроили воронку, собрали команду, инвестировали в рост. Всё вроде бы по плану — но есть внутренняя точка, где будто «не едет».
          </VisibilityManager>

          <VisibilityManager as="p">
            Саботаж. Откладывание. Странная тревога перед важным звонком. Или неожиданная просадка мотивации, когда всё идёт на взлёт.
          </VisibilityManager>

          <VisibilityManager as="p">
            Почему?
          </VisibilityManager>

          <VisibilityManager as="p">
            Потому что срабатывает неосознанный внутренний блок.
          </VisibilityManager>

          <VisibilityManager as="p">
            Не потому что вы «не хотите». А потому что глубоко внутри — есть старая установка, страх, или внутренняя лояльность к чему-то, что давно пора отпустить.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Нейротраблшутинг — это точечная перезагрузка мышления через подсознание
          </VisibilityManager>

          <VisibilityManager as="p">
            Это не про мотивацию и не про коучинг. Это работа с настоящими причинами внутренних тормозов — теми, что невозможно увидеть логикой.
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваша голова говорит: «Надо масштабироваться»,<br />
            А подсознание шепчет: «А вдруг снова предадут, как тогда?»
          </VisibilityManager>

          <VisibilityManager as="p">
            Голова: «Пора выходить в публичность»,<br />
            Подсознание: «Опасно. Это слишком. Лучше спрячься».
          </VisibilityManager>

          <VisibilityManager as="p">
            Голова: «Ты хочешь 10x роста»,<br />
            Подсознание: «А ты вообще достоин?»
          </VisibilityManager>

          <VisibilityManager as="p">
            И пока эти голоса не синхронизированы — тело, разум и стратегия работают вразнобой.
          </VisibilityManager>

          <VisibilityManager as="p">
            Выглядит как прокрастинация, импульсивные решения, конфликты в команде, проблемы со сном, срыв сделок на финише.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что делает нейротраблшутер?
          </VisibilityManager>

          <VisibilityManager as="p">
            Я захожу в самый корень — туда, где подсознание когда-то приняло решение «так будет безопаснее».
          </VisibilityManager>

          <VisibilityManager as="p">
            Мы находим этот момент, «перепрошиваем» реакцию — и блок исчезает.
          </VisibilityManager>

          <VisibilityManager as="p">
            Без насилия. Без откатов. Без «дисциплины через силу воли».
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Результаты, которые отмечают мои клиенты после 1–3 сессий:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уходит тревожность и сомнение в себе
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Появляется ясность и внутренняя собранность
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Перестаёт «сыпаться» здоровье на фоне стресса
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Возвращается драйв, с которым когда-то всё начиналось
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Деньги начинают приходить легче — потому что подсознание больше не боится их
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшутер не даёт советы и не учит «как жить», но помогает убрать то, что мешает вашему природному мышлению работать на полную.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Ваш успех — это вопрос внутренней свободы
          </VisibilityManager>

          <VisibilityManager as="p">
            Если чувствуете, что уперлись в стеклянный потолок, а причин не видно — значит, пора внутрь.
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшутинг — это быстрый путь туда, где всё начинается: в вашем подсознании.
          </VisibilityManager>

          <VisibilityManager as="p">
            Вы достойны бизнеса, который приносит не только деньги, но и радость. И ваше подсознание готово помочь вам в этом — нужно лишь научиться слышать его и работать с ним в команде.
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
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Нейротраблшутинг для предпринимателей (статья)"
        title={"Бесплатная консультация по нейротраблшутингу"}
        description={`Хотите узнать, как нейротраблшутинг может помочь преодолеть ваши внутренние блоки и ускорить рост бизнеса?
          
          Запишитесь, и мы обсудим ваш индивидуальный случай, выявим основные ограничения и составим план действий.`}
      />
    </Layout>
  );
} 