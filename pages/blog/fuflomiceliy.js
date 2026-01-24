import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_32 from "../../images/secondary_preview_32.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
headline:
    "Фуфломицелий Ежовика: разоблачение мифов о мицелии и эффективность плодовых тел",
  description:
    "Научный анализ Ежовика Гребенчатого показывает его потенциал для улучшения когнитивных функций и ментальной ясности, однако терапевтический эффект наблюдается исключительно при использовании плодовых тел. Проведем объективный разбор, почему мицелий представляет собой финансово неэффективный продукт, и рассмотрим научно обоснованные методы применения гриба для достижения максимальных результатов.",
  image: "/_next/static/media/secondary_preview_23.webp",
  url: "https://alexandrvasilev.ru/blog/fuflomiceliy",
  inLanguage: "ru",
  datePublished: "2025-10-07",
  publisher: {
    "@type": "Organization",
    name: "INTEGRAAL",
    url: "https://alexandrvasilev.ru",
    logo: {
      "@type": "ImageObject",
      url: "/_next/static/media/logo.ab1a421b.webp",
      width: 378,
      height: 400,
    },
  },
  author: {
    "@type": "Person",
    name: "Александр Васильев",
    url: "https://alexandrvasilev.ru/#about",
    description:
      "Нейротраблшутер, специалист по работе с подсознанием и расширению восприятия",
    jobTitle: "Нейротраблшутер, специалист по работе с подсознанием",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/fuflomiceliy",
  },
  keywords:
    "ежовик гребенчатый, hericium erinaceus, lion's mane, мицелий, плодовые тела, память, нейропластичность, ясность ума, ноотроп, экстракт",
  about: [
    {
      "@type": "Thing",
      name: "Ежовик Гребенчатый",
      description:
        "Почему важны экстракты из плодовых тел и чем отличается мицелий",
    },
    {
      "@type": "Thing",
      name: "Ноотропная поддержка",
      description:
        "Практические рекомендации по приёму и дозировкам для улучшения когнитивных функций",
    },
  ],
  offers: {
    "@type": "Offer",
    price: "Бесплатная первая консультация",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: "https://alexandrvasilev.ru/blog/fuflomiceliy#message",
    description:
      "Запишитесь на консультацию, чтобы подобрать работающий протокол с Ежовиком.",
  },
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title:
      "Фуфломицелий: почему мицелий Ежовика бесполезен и что действительно работает",
    description:
      "Ежовик Гребенчатый улучшает память и ясность ума. Работают только плодовые тела. Почему мицелий бесполезен и как принимать, чтобы был эффект.",
    keywords:
      "ежовик гребенчатый, lion's mane, hericium erinaceus, мицелий, плодовые тела, экстракт, память, концентрация, ясность ума, ноотроп",
    seoContent:
      "Ежовик Гребенчатый набрал популярность за способность улучшать память и ясность мышления. Важно понимать: эффект дают экстракты из плодовых тел, а не мицелий. Разбираем, почему мицелий — пустая трата денег, приводим практическую схему приёма и критерии выбора качественного продукта. Ключевые слова: Hericium erinaceus, Lion's Mane, плодовые тела, экстракт, ноотропная поддержка, когнитивные функции, нейропластичность, протокол приёма.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview text="Фуфломицелий" image={secondary_preview_32} />
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            ФУФЛОМИЦЕЛИЙ
          </VisibilityManager>

          <VisibilityManager as="p">
            Ежовик Гребенчатый уже не первый год набирает популярность среди
            людей, которые желают улучшить работу мозга.
          </VisibilityManager>

          <VisibilityManager as="p">
            Этот гриб и правда обеспечивает ясность ума и заметное улучшение
            памяти.{" "}
          </VisibilityManager>

          <VisibilityManager as="p">
            При этом многие не знают важной детали: принимать стоит только{" "}
            <b>плодовые тела</b> (Fruiting Bodies), а не мицелий.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ПОЧЕМУ БЕСПОЛЕЗНО ПИТЬ МИЦЕЛИЙ ЕЖОВИКА
          </VisibilityManager>
          <VisibilityManager as="p">
            <b>1. Зерновая смесь.</b> <br /> По факту вы платите за перемолотые
            отруби с остатками мицелия. Активных веществ там мизер — по сути,
            промышленный субстрат, а не экстракт.
          </VisibilityManager>

          <VisibilityManager as="p">
            <b>2. Нет доказательств.</b> <br /> Исследования когнитивной пользы
            выполнены на экстрактах из <b>плодовых тел</b>. По мицелию таких
            данных нет.
          </VisibilityManager>

          <VisibilityManager as="p">
            <b>3. Не работает на практике.</b> <br /> Личный опыт и отзывы
            клиентов сходятся: от мицелия эффект нулевой. В лучшем случае —
            плацебо.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЧТО ДЕЛАТЬ, ЕСЛИ ХОТИТЕ РЕАЛЬНЫЙ ЭФФЕКТ
          </VisibilityManager>

          <VisibilityManager as="p">
            Принимайте ежедневно <b>1 г</b> (1000 мг) экстракта из{" "}
            <b>плодовых тел</b> Ежовика Гребенчатого утром натощак.
          </VisibilityManager>

          <VisibilityManager as="div">
            Эффект плавный и накопительный: примерно через месяц большинство
            отмечает явные улучшения памяти, концентрации и ясности мышления.
          </VisibilityManager>

          <p
            style={{
              fontSize: "12px",
              fontStyle: "italic",
            }}
          >
            Метод не является медицинским и не заменяет консультации специалиста
          </p>

          <div style={{ height: "1px" }} />
          <Button
            className={contentStyles.message}
            href={{ hash: "#message" }}
            status="Записаться"
          />
        </div>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Фуфломицелий (статья)"
        title={"КОНСУЛЬТАЦИЯ"}
      />
    </Layout>
  );
}
