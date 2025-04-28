import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_27 from "../../images/secondary_preview_27.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Почему не получается держать дисциплину — и как это изменить",
  "description": "Глубокий анализ психологических причин отсутствия дисциплины и как нейротраблшуттинг помогает людям обрести контроль над собой",
  "image": "/_next/static/media/secondary_preview_23.webp",
  "url": "https://alexandrvasilev.ru/blog/discipline",
  "inLanguage": "ru",
  "datePublished": "2025-04-05",
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
    "description": "Нейротраблшуттер, специалист по работе с подсознанием и психосоматикой",
    "jobTitle": "Нейротраблшуттер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/discipline"
  },
  "keywords": "дисциплина, прокрастинация, продуктивность, нейротраблшуттинг, подсознание, психология",
  "about": [
    {
      "@type": "Thing",
      "name": "Психологические причины отсутствия дисциплины",
      "description": "Связь прокрастинации с подсознательными эмоциональными блоками"
    },
    {
      "@type": "Thing",
      "name": "Нейротраблшуттинг в развитии дисциплины",
      "description": "Методы работы с подсознанием для устранения блоков, мешающих быть дисциплинированным"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/discipline#message",
    "description": "Запишитесь на консультацию, чтобы узнать истинную причину отсутствия дисциплины в вашей жизни."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Почему не получается держать дисциплину — и как это изменить",
    description:
      "Глубокий анализ психологических причин отсутствия дисциплины и как нейротраблшуттинг помогает людям обрести контроль над собой",
    keywords:
      "дисциплина, прокрастинация, продуктивность, нейротраблшуттинг, подсознание, психология",
    seoContent: "Профессиональный нейротраблшуттер поможет вам обрести дисциплину и контроль над собой. Узнайте, что на самом деле мешает вам быть дисциплинированным. Эффективные методы избавления от прокрастинации через работу с подсознанием. Решите проблему несоблюдения планов и невыполнения задач. Научитесь доводить дела до конца и достигать поставленных целей. Освободитесь от внутренних блоков, мешающих продуктивности. Индивидуальный подход к каждому клиенту с гарантированным результатом. Запишитесь на бесплатную консультацию и обретите спокойную, устойчивую энергию на действие.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="Почему не получается держать дисциплину" 
        image={secondary_preview_27} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Почему не получается держать дисциплину — и как это изменить
          </VisibilityManager>

          <VisibilityManager as="p">
            Вы точно знаете, что вам нужно делать. Ставите цели, пишете списки, начинаете и… снова срываетесь.
          </VisibilityManager>

          <VisibilityManager as="p">
            День проходит — и всё не так. Внутренне вы злитесь, обещаете себе «в следующий раз обязательно». Но это «обязательно» откладывается. Снова и снова.
          </VisibilityManager>

          <VisibilityManager as="p">
            Вы могли бы быть в другом месте. Зарабатывать больше, выглядеть лучше, действовать свободно. Но будто кто-то внутри ставит палки в колёса.  
            И это — не лень. И не слабая воля.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что на самом деле мешает вам быть дисциплинированным
          </VisibilityManager>

          <VisibilityManager as="p">
            Дисциплина — это свобода делать то, что вы хотите. Но если внутри включается сопротивление — значит, есть причина.
          </VisibilityManager>

          <VisibilityManager as="p">
            Вот как это может звучать на уровне подсознания:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Если я начну делать — мне станет тяжело» (ассоциация действия с давлением, с которым вы не справитесь);
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Если у меня получится — меня осудят, отвергнут, завидовать начнут» (память о детской травме, где успех был опасен);
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Если я стану другим — я перестану быть собой» (лояльность к семье, к прошлой версии себя, к боли);
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Я не верю, что смогу» (пережитый когда-то провал — и теперь мозг охраняет от повторения).
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Вы не осознаёте эти программы, но они вами управляют. И даже если вы внешне мотивированы — внутри вас может быть тот, кто шепчет: «Не надо».
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что происходит, если это не менять
          </VisibilityManager>

          <VisibilityManager as="p">
            Накапливается вина, усталость. Появляется ощущение «я не такой как надо».
          </VisibilityManager>

          <VisibilityManager as="p">
            С каждой недоделанной задачей растёт внутреннее давление. С каждой отсроченной целью — чувство, что время уходит, а вы топчетесь на месте.
          </VisibilityManager>

          <VisibilityManager as="p">
            Прокрастинация становится привычной, и вы начинаете верить, что «такой уж характер». Но это не правда. Это просто программа и от неё можно освободиться.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как эта проблема решается через нейротраблшуттинг
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшуттинг — это метод, который позволяет дойти до корня проблемы и найти ту самую первую точку, где вы когда-то решили: «лучше не начинать».
          </VisibilityManager>

          <VisibilityManager as="p">
            Во время работы мы:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              находим эпизод, где закрепилось сопротивление;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              погружаемся в него через тело, ощущения, эмоции;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              отпускаем, проживаем, переопределяем.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            В результате внутренний запрет уходит, и появляется то, что не достаётся ни на одном марафоне продуктивности: спокойная, устойчивая энергия на действие.
          </VisibilityManager>


          <div style={{ height: '1px' }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что меняется после сессии
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы начинаете делать, не уговаривая себя;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Становится легко доводить до конца;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Исчезает ощущение внутреннего конфликта;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Возвращается вкус к жизни и энергия на реализацию;
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Если устали бороться — я помогу вам обрести над собой контроль, и дисциплина станет вашей второй натурой.
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
        type="Дисциплина (статья)"
        title="Консультация по обретению дисциплины"
        description="Хотите узнать истинную причину отсутствия дисциплины в вашей жизни? Запишитесь на бесплатную консультацию, и я помогу вам."
      />
    </Layout>
  );
} 