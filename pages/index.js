import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Preview } from "../components/Preview/Preview";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Final } from "../components/Final/Final";
import { InnerSatisfaction } from "../components/InnerSatisfaction";
import enter_hole_1 from "../images/enter_hole_1.webp";
import enter_hole_2 from "../images/enter_hole_2.webp";
import logo from "../images/logo.webp";
import { products as neurotroubleshuttingProducts } from "../consts/products";
import finalStyles from "../styles/finalContent.module.css";
import LinkButton from "../components/shared/LinkButton/LinkButton";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Нейротраблшутер Александр Васильев — глубинная трансформация и психоэмоциональное восстановление",
  description:
    "Профессиональный специалист по нейротраблшутингу и трансформации сознания. Осуществляю глубокую работу с подсознательными механизмами, нейтрализацию травмирующих воспоминаний, полное устранение страхов и фобий, комплексное лечение депрессивных состояний и тревожных расстройств. Проводу уникальные мухоморные трансформации, разрабатываю индивидуальные программы восстановления. Уже свыше 100 клиентов достигли состояния душевной гармонии и личностного роста. Предоставляю бесплатную первичную диагностику и персонализированный подход для каждого клиента. Работаю очно в Казани и удаленно по всей России.",
  url: "https://alexandrvasilev.ru",
  inLanguage: "ru",
  dateModified: new Date().toISOString(),
  lastReviewed: new Date().toISOString(),
  publisher: {
    "@type": "Organization",
    name: "INTEGRAAL",
    url: "https://alexandrvasilev.ru",
    foundingDate: "2020-01-01",
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
      "Специалист по трансформации сознания. Эксперт в области глубинной психологии, работы с травмирующими воспоминаниями и проведения духовных практик. Разработчик авторских методик для восстановления психологического здоровья и обретения внутренней гармонии.",
    image: {
      "@type": "ImageObject",
      url: "/_next/static/media/alex3.57d8e42f.webp",
      width: 2561,
      height: 1728,
    },
    jobTitle:
      "Нейротраблшутер, специалист по работе с подсознанием, проводник мухоморных ретритов",
    knowsAbout: [
      "Нейротраблшутинг",
      "Работа с подсознанием",
      "Мухоморные ретриты",
      "Вегетализм",
      "Кинезиология",
    ],
    hasCredential: "Опытный проводник мухоморных ретритов, специалист по работе с подсознанием",
    sameAs: [
      "https://t.me/chronics44",
      "https://www.tiktok.com/@alexandrvasilev.ru?_t=ZS-8vOVKf5Isrv&_r=1",
      "https://youtube.com/@alexandrvasilev_ru?si=h6JxlRRBXkh8Oxln",
      "https://alexandrvasilev.ru/",
      "https://alexandrvasilev.ru/#about",
    ],
  },
  mainEntity: {
    "@type": "Person",
    name: "Александр Васильев",
    description:
      "Нейротраблшутер, устраняющий причины страданий с использованием авторских методик, работы с подсознанием, вегетализма и кинезиологии.",
    sameAs: [
      "https://t.me/chronics44",
      "https://www.tiktok.com/@alexandrvasilev.ru?_t=ZS-8vOVKf5Isrv&_r=1",
      "https://youtube.com/@alexandrvasilev_ru?si=h6JxlRRBXkh8Oxln",
      "https://alexandrvasilev.ru/",
      "https://alexandrvasilev.ru/#about",
    ],
  },
about: [
    {
      "@type": "Thing",
      name: "Внутреннее спокойствие",
      description:
        "Потеря связи с внутренним миром приводит к ощущению пустоты, тревожности и апатии despite внешних достижений. Возникает потребность в восстановлении психологической целостности.",
    },
    {
      "@type": "Thing",
      name: "Кризис идентичности",
      description:
        "Поиск смысла жизни и осознание несоответствия между текущим состоянием и истинными желаниями. Это трансформационный период для переосмысления жизненных приоритетов.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
{
          "@type": "Question",
          name: "Почему у других все получается, а у меня постоянные неудачи?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Причина кроется в глубинных психологических установках и ограничивающих убеждениях, которые формируют сценарии неудач. Их можно трансформировать через работу с подсознанием.",
          },
        },
        {
          "@type": "Question",
          name: "Правильный ли я выбрал жизненный путь?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Чувство несоответствия часто указывает на внутренние конфликты между истинными желаниями и навязанными социальными ожиданиями. Работа с психологическими блоками помогает найти свой истинный путь.",
          },
        },
{
          "@type": "Question",
          name: "Почему постоянно возникают конфликты с близкими людьми?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Повторяющиеся сценарии в отношениях обычно связаны с незажившими психологическими ранами и проекцией травм на окружающих. Их проработка восстанавливает здоровые отношения.",
          },
        },
        {
          "@type": "Question",
          name: "Как долго продлится это эмоциональное состояние?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Эмоциональные состояния трансформируются при работе с их первопричинами. Глубинная работа часто приносит ощутимые изменения уже после первых сессий.",
          },
        },
{
          "@type": "Question",
          name: "Почему то, что раньше приносило радость, теперь стало тягостным?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Это классический признак внутреннего выгорания и потери связи со своими истинными ценностями. Трансформация установок восстанавливает способность к радости.",
          },
        },
        {
          "@type": "Question",
          name: "Как найти смысл существования в современном мире?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Смысл обретается через восстановление связи с внутренним миром и выявление своих глубинных ценностей, которые были скрыты под слоями социальных масок и страхов.",
          },
        },
{
          "@type": "Question",
          name: "Появляются мысли о прекращении существования — что делать?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Мысль о суициде — это крик души, указание на невыносимую психологическую боль. Такие состояния успешно корректируются через профессиональную работу с травмами и восстановления связи с жизнью.",
          },
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Инструменты",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@type": "Thing", name: "Вегетализм" },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: { "@type": "Thing", name: "Кинезиология" },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: { "@type": "Thing", name: "Работа с подсознанием" },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: { "@type": "Thing", name: "Авторские методики" },
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Услуги",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Мухоморный ретрит в Казани",
            url: "https://alexandrvasilev.ru/ceremony",
            description:
              "Путь исцеления и самопознания, открывающий доступ к встрече с Высшими Силами, позволяет наладить связь с Творцом и раскрыть своё предназначение.",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Нейротраблшутинг",
            url: "https://alexandrvasilev.ru/neurotroubleshutting",
            description:
              "Точечное и быстрое устранение первопричин блоков, страхов, зависимостей и ограничений через глубинную работу с подсознанием.",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Бросить курить",
            url: "https://alexandrvasilev.ru/programs/drop-smoking",
            description:
              "Индивидуальная программа по избавлению от никотиновой зависимости.",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Отпустить негатив",
            url: "https://alexandrvasilev.ru/programs/remove-bad-memories",
            description:
              "Программа по освобождению от негативных воспоминаний и эмоций.",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            name: "Увеличить заработок",
            url: "https://alexandrvasilev.ru/programs/grow-money",
            description:
              "Программа по снятию внутренних ограничений, мешающих финансовому росту.",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Service",
            name: "Преодоление фобий",
            url: "https://alexandrvasilev.ru/programs/freedom-from-phobia",
            description: "Программа по работе с фобиями и страхами.",
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Service",
            name: "Свобода от аллергии",
            url: "https://alexandrvasilev.ru/programs/freedom-from-allergy",
            description:
              "Программа по устранению аллергических реакций через работу с подсознанием.",
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "Service",
            name: "Спокойный сон",
            url: "https://alexandrvasilev.ru/programs/freedom-from-nightmares",
            description:
              "Программа по устранению ночных кошмаров и улучшению качества сна.",
          },
        },
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Проблемы, с которыми я работаю",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Эмоциональное выгорание" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Поиск жизненного предназначения",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Комплексы и страхи" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Зависимости" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Заниженная самооценка" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Раздражительность" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Психические травмы" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Ночные кошмары" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Взаимодействие с людьми" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Суицидальные мысли" },
        },
      ],
    },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://alexandrvasilev.ru/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Программы",
        item: "https://alexandrvasilev.ru/#programs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Обо мне",
        item: "https://alexandrvasilev.ru/#about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Отзывы",
        item: "https://alexandrvasilev.ru/#reviews",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Вопросы и ответы",
        item: "https://alexandrvasilev.ru/#faq",
      },
    ],
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    isPartOf: { "@id": "https://alexandrvasilev.ru/" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".title", ".paragraph"],
    },
  },
  significantLink: [
    "https://alexandrvasilev.ru/neurotroubleshutting",
    "https://alexandrvasilev.ru/ceremony",
    "https://alexandrvasilev.ru/#about",
    "https://alexandrvasilev.ru/#reviews",
  ],
  relatedLink: [
    "https://t.me/chronics44",
    "https://youtube.com/@alexandrvasilev_ru",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Бесплатная консультация нейротраблшутера",
      price: "0",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: "https://alexandrvasilev.ru/#message",
      description:
        "Бесплатная консультация с ведущим нейротраблшутером России. Диагностика проблем, определение путей решения, составление индивидуального плана работы.",
      validFrom: new Date().toISOString(),
    },
    {
      "@type": "Offer",
      name: "Мухоморный ретрит в Казани",
      price: "300000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: "https://alexandrvasilev.ru/ceremony",
      description:
        "Профессиональный мухоморный ретрит с опытным проводником. Безопасная трансформационная практика.",
    },
    {
      "@type": "Offer",
      name: "Курс нейротраблшутинга",
      price: "125000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: "https://alexandrvasilev.ru/neurotroubleshutting",
      description:
        "Полный курс нейротраблшутинга для устранения психологических блоков и травм.",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Запись на консультацию",
    url: "https://alexandrvasilev.ru/#message",
    availableLanguage: ["Russian"],
    areaServed: "RU",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "55.7958",
    longitude: "49.1098",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Казань",
      addressRegion: "Республика Татарстан",
      addressCountry: "RU",
    },
  },
  keywords:
    "нейротраблшутер Казань психолог подсознание психотравмы фобии страхи мухоморный ретрит церемония вегетализм кинезиология депрессия тревожность панические атаки психосоматика исцеление трансформация сознания духовные практики самопознание",
  temporalCoverage: "2020/..",
  audience: {
    "@type": "Audience",
    audienceType:
      "Люди, страдающие от психологических проблем, депрессии, тревожности, фобий",
  },
};

export const products = [
  ...neurotroubleshuttingProducts,
  {
    id: 8,
    title: "Священная церемония на Мухоморе",
    image: logo,
    href: "/ceremony",
  },
];



export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    seoContent:
      "Профессиональный нейротраблшутер Александр Васильев — специалист по трансформации подсознания в Казани. Помогаю убирать глубинные психологические блоки, страхи, фобии, депрессивные состояния, тревогу, панические реакции и психосоматические проявления. Создаю персональные программы нейротраблшутинга, веду мухоморные церемонии, применяю вегетализм и кинезиологию. Провожу бесплатную первичную диагностику: разбираем запрос и формируем индивидуальный план. Помогаю обрести предназначение, снять внутренние ограничения и повысить качество жизни. Обратитесь — откройте путь к спокойствию и внутренней свободе уже сейчас!",
    title: "Нейротраблшутинг, мухоморные ретриты, работа с подсознанием",
    description:
      "Сайт о преодолении сложностей и устранении страданий через вегетализм, кинезиологию и работу с подсознанием.",
    keywords:
      "очищение интеграл ретрит грибы нейротраблшутинг мухоморный ретрит вегетализм кинезиология",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <Preview />
      <InnerSatisfaction
        titleSuffix="ПРЕДИСЛОВИЕ"
        order={2}
        emptyTitle={false}
        description={
          <>
            Если вы чего-то достигли, но потеряли смысл жизни, разочаровались в
            людях, регулярно испытываете нервозность, апатию или суицидальные
            мысли, не переживайте. Не всё потеряно.
            <br />
            <br />
            Я знаю как вам помочь, и у вас есть бесплатный способ убедиться в
            этом. Что я имею ввиду? Я помогаю людям обрести целостность через
            работу с телом и подсознанием, и принимаю оплату после результата.
            <br />
            <br />
            Более того, кто хочет познакомиться с самим собой и кардинально
            изменить свою внутреннюю составляющую, может записаться у меня на
            мухоморный ретрит. Это не для всех, но кто чувствует зов, ни с чем
            его не перепутает.
            <br />
            <br />
            Добро пожаловать!
          </>
        }
/>
      <Final image={enter_hole_2} animation>
        <h2 className={finalStyles.title} style={{ color: "#fff" }}>
          Нейротраблшутинг
        </h2>
        <div className={finalStyles.online}>
          <span className={finalStyles.blink}>●</span>
          <span>Онлайн</span>
        </div>
        <p className={finalStyles.description} style={{ color: "#fff" }}>
          Точечное и быстрое устранение первопричин блоков, страхов,
          зависимостей и ограничений через глубинную работу с подсознанием.
        </p>
        <LinkButton href="/neurotroubleshutting">
          <span>Подробнее</span>
        </LinkButton>
      </Final>
      <AnimatedLine />
      <Final image={enter_hole_1} animation>
        <h2 className={finalStyles.title} style={{ color: "#fff" }}>
          Мухоморный ретрит в Казани
        </h2>
        <p className={finalStyles.description} style={{ color: "#fff" }}>
          Путь исцеления и самопознания, открывающий доступ к встрече с Высшими
          Силами, позволяет наладить связь с Творцом и раскрыть своё
          предназначение.
        </p>
        <LinkButton href="/ceremony">
          <span>Подробнее</span>
        </LinkButton>
      </Final>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ"}
        type="Первая консультация (Страница: Главная)"
        
      />
    </Layout>
  );
}
