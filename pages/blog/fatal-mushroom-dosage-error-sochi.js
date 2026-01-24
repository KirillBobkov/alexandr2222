import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_28 from "../../images/secondary_preview_28.webp"; // Placeholder: Add this image
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
"headline": "Сочинская трагедия: анализ фатальной ошибки дозировки Мухомора и предупреждения",
  "description": "Последнее время участились случаи серьезных осложнений при不当使用 мухомора. Недавно в Сочи на трансформационном ретрите произошла трагедия — скончался молодой IT-специалист в результате критической ошибки в дозировке Мухомора. Проведем детальный анализ причин случившегося и сформулируем четкие рекомендации по безопасному применению.",
  "image": "/images/secondary_preview_28.webp", // Update if Next.js mangles names, e.g., /_next/static/media/secondary_preview_tragedy.webp
  "url": "https://alexandrvasilev.ru/blog/fatal-mushroom-dosage-error-sochi",
  "inLanguage": "ru",
  "datePublished": "2025-07-27", // Updated date
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
    "description": "Нейротраблшутер, специалист по работе с подсознанием и преодолению травм",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием" 
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/fatal-mushroom-dosage-error-sochi"
  },
  "keywords": "мухомор, передозировка, Сочи, ретрит, безопасность, кинезиологический тест, дозировка, отравление, фатальная ошибка",
  "about": {
    "@type": "Thing",
    "name": "Безопасность при работе с Мухомором",
    "description": "Анализ трагического случая в Сочи и важность правильного подбора дозировки Мухомора для предотвращения фатальных ошибок."
  },
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/fatal-mushroom-dosage-error-sochi#message",
    "description": "Узнайте больше о безопасных практиках и важности индивидуального подхода при работе с Мухомором."
  }
};

export default function FatalMushroomDosageErrorSochiPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Трагедия в Сочи: фатальная ошибка с дозировкой Мухомора",
    description: "Разбор трагического случая в Сочи: смерть IT-специалиста из-за неправильной дозировки Мухомора и важность кинезиологического теста для безопасности.",
    keywords: "мухомор, передозировка, Сочи, ретрит, безопасность, кинеозиологический тест, дозировка, отравление, фатальная ошибка, консультация шамана, Казань",
    seoContent: "Безопасность при работе с мухомором — базовое условие для глубокого и бережного опыта. Анализ трагедии в Сочи: почему важны индивидуальный подбор дозировки, кинезиологическая диагностика и работа только с квалифицированными проводниками. Практические рекомендации, консультативная поддержка, шаманские погружения. Ключевые слова: безопасность мухомора, защищённый ретрит, шаманский проводник, передозировка, кинезиологическая диагностика, персональная дозировка, токсическое воздействие, критическая ошибка, консультация проводника, Казань, шаманские традиции, индивидуальная методология.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="Трагедия в Сочи: фатальная ошибка с Мухомором" 
        image={secondary_preview_28} 
      />
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            ТРАГЕДИЯ В СОЧИ: КАК ОШИБКА С ДОЗИРОВКОЙ МУХОМОРА СТАЛА ФАТАЛЬНОЙ
          </VisibilityManager>

          <VisibilityManager as="p">
            Недавно в Сочи на одном из ретритов скончался молодой IT-специалист. Причиной смерти стала неправильно подобранная дозировка Мухомора. Этот случай всколыхнул сообщество и напомнил о том, насколько серьёзным и тонким процессом является работа с Мухомором.
          </VisibilityManager>

          <VisibilityManager as="p">
            Трагедии можно было бы избежать, если бы проводники подходили к процессу не только с энтузиазмом, но и с точной, проверенной системой калибровки. Один из самых надёжных методов — кинезиологический мышечный тест, признанный Всемирной организацией здравоохранения и применяемый по всему миру в официальной телесной терапии и психосоматической медицине.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ПОЧЕМУ «УНИВЕРСАЛЬНОЙ» ДОЗЫ НЕ СУЩЕСТВУЕТ
          </VisibilityManager>

          <VisibilityManager as="p">
            По моему опыту, дозировка Мухомора индивидуальна для каждого участника и меняется от ретрита к ретриту. Это зависит от множества факторов:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              психоэмоционального состояния человека в момент приёма;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              текущей нагрузки на нервную систему;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              количества сна и питания в последние дни;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              недавнего опыта работы с другими психоактивными веществами;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              текущей жизненной ситуации и запросов;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              состояния печени, почек и системы детоксикации.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Более того, есть люди, которым Мухомор в принципе не подходит. У них может быть сильная непереносимость, и даже микродозинг способен спровоцировать тяжёлую реакцию — от неконтролируемого психоза до резкого обострения соматических симптомов.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ОПАСНОСТЬ ОТРАВЛЕНИЯ: ДЕЛО НЕ ТОЛЬКО В ДОЗИРОВКЕ
          </VisibilityManager>

          <VisibilityManager as="p">
            Даже если дозировка подобрана с умом, остаётся ещё один фактор — качество и чистота сырья. Например, Пантерный Мухомор можно спутать с Бледной Поганкой. На неочищенных или плохо сортированных партиях даже опытный глаз может не заметить посторонний гриб.
          </VisibilityManager>

          <VisibilityManager as="p">
            Именно поэтому на моих ретритах каждая партия Мухомора проходит многоступенчатую проверку, а дозировка всегда определяется индивидуально с помощью кинезиотеста. 
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЧТО ДЕЛАТЬ ПРОВОДНИКАМ
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы работаете с Мухомором, настоятельно рекомендую пройти обучение мышечному тестированию. Это точный, биологически обоснованный подход, позволяющий минимизировать риски и обеспечить безопасную глубинную работу. Инструкцию как это делается, вы сможете легко найти в интернете.
          </VisibilityManager>

          <VisibilityManager as="p">
            Работа с Мухомором — это огромная ответственность перед людьми, которые вам доверяют.
          </VisibilityManager>

          <VisibilityManager as="p">
            Каждый человек, пришедший на ретрит, отдает вам не только деньги — он вверяет вам самое ценное: свою жизнь, свою психику, свою душу. И вы обязаны быть к этому готовы не только морально, но и технически.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЗАКЛЮЧЕНИЕ
          </VisibilityManager>

          <VisibilityManager as="p">
            Смерть на ретрите — это последствие системной ошибки в подходе. Будьте внимательны. Не полагайтесь на опыт и удачу. Используйте то, что действительно работает.
          </VisibilityManager>

          <p
              style={{
                fontSize: "12px",
                fontStyle: "italic",
                marginTop: "20px" 
              }}
            >
              Информация в статье предоставлена для ознакомления и не является медицинской рекомендацией. Работа с психоактивными веществами требует особой осторожности и ответственности.
            </p>
        </div>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Обсуждение безопасности Мухомора (статья)"
        title={"Безопасная работа с Мухомором"}
        description={`Трагические случаи, подобные сочинскому, подчеркивают важность выбора опытного проводника. 
            
            Если вы готовы к глубокой и безопасной трансформации с Мухомором под моим чутким наставничеством, где каждый шаг выверен и основан на многолетнем опыте и точных методах калибровки, запишитесь на консультацию. Ваш путь к себе может быть осознанным и защищенным.`}
      />
    </Layout>
  );
} 