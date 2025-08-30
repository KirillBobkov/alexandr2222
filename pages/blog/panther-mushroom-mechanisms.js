import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_23 from "../../images/secondary_preview_23.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Как работает Пантерный Мухомор? Глубинные механизмы влияния на психику и тело",
  "description": "Пантерный Мухомор — мощный инструмент для глубинной работы с подсознанием, трансформации психики и тела. Узнайте, как правильно и безопасно использовать этот гриб для личной терапии, духовного роста и эмоционального исцеления. Научный и шаманский подходы, индивидуальные консультации, поддержка опытного проводника. Ключевые слова: пантерный мухомор, психика, тело, трансформация, подсознание, проводник, терапия, шаманские практики, консультация, Казань, безопасная практика, глубокая работа, эмоциональное исцеление, шаман, шаманизм.",
  "image": "/_next/static/media/secondary_preview_23.webp",
  "url": "https://alexandrvasilev.ru/blog/panther-mushroom-mechanisms",
  "inLanguage": "ru",
  "datePublished": "2025-04-03",
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
    "description": "Нейротраблшутер, специалист по работе с подсознанием и проводник по практикам с мухомором",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/panther-mushroom-mechanisms"
  },
  "keywords": "пантерный мухомор, психика, тело, трансформация, подсознание, проводник, терапия",
  "about": [
    {
      "@type": "Thing",
      "name": "Пантерный Мухомор",
      "description": "Уникальные механизмы воздействия Пантерного Мухомора на психику и тело человека"
    },
    {
      "@type": "Thing",
      "name": "Психотерапия",
      "description": "Использование природных веществ для глубинной трансформации и работы с подсознанием"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/panther-mushroom-mechanisms#message",
    "description": "Запишитесь на консультацию, чтобы узнать больше о безопасной работе с Пантерным Мухомором."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Как работает Пантерный Мухомор? Глубинные механизмы влияния на психику и тело",
    description: "Научный и духовный взгляд на действие активных веществ Пантерного Мухомора и их влияние на подсознание.",
    keywords: "пантерный мухомор, психика, тело, трансформация, подсознание, проводник, терапия, шаманские практики, консультация, Казань, безопасная практика, глубокая работа, эмоциональное исцеление",
    seoContent: "Пантерный Мухомор — эффективный инструмент для углубленной терапии подсознания, трансформации психики и физического тела. Изучите, как корректно и безопасно применять этот гриб для персональной терапии, духовного развития и эмоционального восстановления. Научные и шаманские методологии, персональные консультации, сопровождение квалифицированного наставника. Ключевые слова: пантерный мухомор, психическая трансформация, телесные изменения, подсознательная работа, шаманский наставник, терапевтические практики, шаманские традиции, профессиональная консультация, Казань, защищенная практика, глубинная терапия, эмоциональное восстановление, шаманский мастер, шаманские методы.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="Как работает Пантерный Мухомор?" 
        image={secondary_preview_23} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Как работает Пантерный Мухомор? Глубинные механизмы влияния на психику и тело
          </VisibilityManager>

          <VisibilityManager as="p">
            Пантерный Мухомор — один из самых мощных инструментов для исследования глубинного «я». Его воздействие выходит за рамки обычного восприятия, открывая доступ к скрытым пластам подсознания. Этот гриб не терпит легкомысленного отношения, но в умелых руках он становится Проводником к внутренней трансформации.
          </VisibilityManager>

          <VisibilityManager as="p">
            Как Пантерный Мухомор влияет на психику и тело? Что делает его таким особенным? И почему так важно проходить этот опыт с проводником?
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Химический состав и влияние на организм
          </VisibilityManager>

          <VisibilityManager as="p">
            Пантерный Мухомор содержит уникальный набор активных веществ, каждое из которых играет свою роль в трансформации сознания:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Мусцимол – вещество, взаимодействующее с ГАМК-рецепторами, создающее глубокий трансовый эффект и расслабление. Позволяет выйти за рамки привычного сознания.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Иботеновая кислота – активизирует нейронные связи, что может приводить к изменению восприятия времени и пространства, ярким визуальным эффектам.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Мускарин – влияет на парасимпатическую нервную систему, вызывая расслабление, снижение тревожности, ощущение «перезагрузки» организма.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Этот состав делает Пантерный Мухомор мощным инструментом для работы с психикой, помогая выходить за рамки привычных шаблонов мышления.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как проявляется его действие?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Глубокая релаксация и ощущение выхода за границы физического тела.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Изменение восприятия времени и пространства.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Яркие образы, осознание скрытых процессов подсознания.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Очищение психики и тела, снижение тревожности, перезагрузка нервной системы.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Пантерный Мухомор можно использовать как для кратковременной работы с сознанием, так и для глубокой терапии, когда требуется серьёзная трансформация.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Духовный аспект: проводник в подсознание
          </VisibilityManager>

          <VisibilityManager as="p">
            Этот гриб не просто изменяет восприятие — он открывает дверь к осознанию внутренних конфликтов, подавленных эмоций и неразрешённых ситуаций.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Работа с теневой стороной личности. Позволяет увидеть и осознать глубинные страхи, проработать их.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Выход за пределы эго. Даёт ощущение единства с миром, растворения границ личности.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Глубинная трансформация. После работы с Пантерным Мухомором многие отмечают, что их восприятие мира становится яснее, а старые проблемы теряют свою значимость.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Этот опыт может быть мощным и трансформационным, но для его правильной интеграции важно пройти процесс осознанно.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему важно проходить опыт с проводником?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Безопасность. Пантерный Мухомор способен увести в очень глубокие состояния, и важно, чтобы рядом был человек, который поможет пройти через этот процесс.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Создание защищённого пространства. Важно находиться в месте, где ничего не будет отвлекать, а сам процесс пройдёт в максимально комфортных условиях.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Грамотная интеграция опыта. После погружения важно осознать и понять пережитое, чтобы использовать его в повседневной жизни.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Готовы ли вы к этому опыту?
          </VisibilityManager>

          <VisibilityManager as="p">
            Пантерный Мухомор — это мощный инструмент для тех, кто готов к глубинной работе. Если вас зовёт этот путь, важно пройти его осознанно и в сопровождении опытного проводника.
          </VisibilityManager>

          <VisibilityManager as="p">
            Я могу помочь вам пройти этот процесс безопасно и с максимальной пользой. Оставьте заявку, и я помогу вам раскрыть потенциал этого Учителя.
          </VisibilityManager>

          <VisibilityManager as="p">
            В конечном итоге, Мухомор пантерный учит нас, что сознание — самый загадочный и сложный феномен. И иногда для улучшения самочувствия нужно не больше лекарств, а больше понимания того, как на самом деле работает наш ум.
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
        type="Как работает Пантерный Мухомор? (статья)"
        title={"Консультация по работе с Пантерным Мухомором"}
        description={`Хотите узнать больше о безопасной работе с Пантерным Мухомором и его влиянии на психику и тело? 
          
          Запишитесь на консультацию, и мы обсудим, как этот мощный инструмент может помочь именно вам.`}
      />
    </Layout>
  );
} 