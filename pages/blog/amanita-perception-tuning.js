import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_21 from "../../images/secondary_preview_21.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Мухомор и тонкая настройка восприятия: Как гриб открывает скрытые измерения реальности",
  "description": "Глубокий анализ влияния мухомора на механизмы восприятия и его роль в расширении сознания и улучшении качества жизни",
  "image": "/_next/static/media/secondary_preview_21.webp",
  "url": "https://alexandrvasilev.ru/blog/amanita-perception-tuning",
  "inLanguage": "ru",
  "datePublished": "2025-03-25",
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
    "description": "Нейротраблшуттер, специалист по работе с подсознанием и расширению восприятия",
    "jobTitle": "Нейротраблшуттер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/amanita-perception-tuning"
  },
  "keywords": "мухомор, восприятие, сознание, психология, трансформация, осознанность, микродозинг",
  "about": [
    {
      "@type": "Thing",
      "name": "Механизмы восприятия",
      "description": "Как мухомор влияет на паттерны восприятия и помогает увидеть мир по-новому"
    },
    {
      "@type": "Thing",
      "name": "Расширение сознания",
      "description": "Практические аспекты работы с восприятием для улучшения качества жизни"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/amanita-perception-tuning#message",
    "description": "Запишитесь на консультацию, чтобы узнать больше о тонкой настройке восприятия с помощью мухомора."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Мухомор и тонкая настройка восприятия: Как гриб открывает скрытые измерения реальности",
    description:
      "Глубокий анализ влияния мухомора на механизмы восприятия и его роль в расширении сознания и улучшении качества жизни",
    keywords:
      "мухомор, восприятие, сознание, психология, трансформация, осознанность, микродозинг",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="Мухомор и тонкая настройка восприятия" 
        image={secondary_preview_21} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            МУХОМОР И ТОНКАЯ НАСТРОЙКА ВОСПРИЯТИЯ: КАК ГРИБ ОТКРЫВАЕТ СКРЫТЫЕ ИЗМЕРЕНИЯ РЕАЛЬНОСТИ
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухоморные практики чаще всего обсуждаются в контексте улучшения самочувствия, духовных переживаний и трансформации личности. Однако мало кто говорит о том, как именно этот древний союзник изменяет сам механизм восприятия, позволяя видеть мир по-новому.
          </VisibilityManager>

          <VisibilityManager as="p">
            Сегодня мы разберёмся, почему Мухомор делает восприятие более точным, многослойным и живым, а также как использовать этот эффект для обогащения внутреннего опыта и качества жизни.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ОБЫЧНОЕ ВОСПРИЯТИЕ VS. «НАСТРОЕННОЕ» ВОСПРИЯТИЕ
          </VisibilityManager>

          <VisibilityManager as="p">
            Человеческий мозг привык обрабатывать мир в режиме «энергосбережения». Мы видим только то, что уже знакомо, и часто игнорируем всё, что не вписывается в привычные шаблоны. Представьте себе радио, настроенное на одну частоту, в то время как вокруг звучат сотни других волн.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор в этом контексте действует как тюнер, позволяя настроиться на более широкий диапазон восприятия реальности.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Цвета кажутся глубже, детали — чётче, а звуки — объёмнее.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              То, что раньше казалось незначительным, вдруг обретает смысл.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Простые повседневные моменты наполняются ощущением подлинного присутствия.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — это пробуждение к более полному и насыщенному восприятию жизни.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            КАК МУХОМОР УБИРАЕТ «ШУМ» УМА
          </VisibilityManager>

          <VisibilityManager as="p">
            В повседневной жизни восприятие часто перегружено внутренним диалогом, автоматизмами и фоновыми тревогами. Это похоже на попытку слушать красивую музыку через старую плёнку, покрытую шумами и треском.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор помогает приглушить этот шум, открывая доступ к более ясному восприятию.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Становится легче заметить внутренние паттерны, которые раньше оставались в тени.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Внимание обостряется, позволяя воспринимать мир без привычных искажений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Появляется чувство живого контакта — с природой, собой, другими.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Это не бегство от реальности, а наоборот — возвращение к её глубине и подлинности.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ПРАКТИЧЕСКИЕ АСПЕКТЫ РАБОТЫ С ВОСПРИЯТИЕМ
          </VisibilityManager>

          <VisibilityManager as="p">
            Эффекты, открывающиеся в особых состояниях, могут быть перенесены в повседневную жизнь:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              1.
              {"  "}
              Для пробуждения вдохновения и расширения восприятия в творчестве.
            </p>
            <p className={contentStyles.textDescription}>
              2.
              {"  "}
              Для более глубокого вхождения в медитативные и телесные практики.
            </p>
            <p className={contentStyles.textDescription}>
              3.
              {"  "}
              Для осознанного проживания повседневных процессов, которые раньше казались механическими.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор способен не только настраивать восприятие, но и раскрывать ответы, которые уже живут внутри. Он помогает услышать их яснее и почувствовать свою подлинную глубину.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            БЕЗОПАСНОСТЬ И ОСОЗНАННОСТЬ
          </VisibilityManager>

          <VisibilityManager as="p">
            Работа с Мухомором требует:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Осознанного подхода и внимательности к себе.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Чёткого намерения и уважительного отношения к процессу.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Понимания своего внутреннего состояния и готовности к трансформации.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Важно помнить, что такие практики требуют подготовки и сопровождения. Я провожу людей через эти процессы бережно и точно — потому что знаю силу этих состояний не понаслышке.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЗАКЛЮЧЕНИЕ
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — это не «психоделик», а живой союзник, способный настраивать восприятие тонко и глубоко. Он помогает видеть реальность яснее, снимать фильтры, возвращать живость и объём каждому моменту.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вам близка эта перспектива — я рядом, чтобы помочь вам освоить безопасную и осознанную работу с Мухомором.
          </VisibilityManager>

          <VisibilityManager as="p">
            Это не магия и не псевдоэзотерика, а путь, проверенный временем и людьми, идущими вглубь себя.
          </VisibilityManager>

          <VisibilityManager as="p">
            <i>P.S.</i> Чем чище восприятие — тем богаче становится сама жизнь. Иногда важно не «добавить» что-то, а просто убрать лишний шум.
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
        type="Мухомор и тонкая настройка восприятия (статья)"
        title={"КОНСУЛЬТАЦИЯ ПО РАБОТЕ С МУХОМОРОМ"}
        description={`Хотите узнать больше о безопасной и осознанной работе с Мухомором? Запишитесь на консультацию — и мы вместе рассмотрим, как этот древний союзник может стать вашим помощником в настройке восприятия и обретении глубины.`}
      />
    </Layout>
  );
} 