import Layout from "../components/Layout/Layout";
import { Bio } from "../components/Bio/Bio";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Preview } from "../components/Preview/Preview";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Final } from "../components/Final/Final";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { CirclesList } from "../components/CirclesList/CirclesList";
import { InnerSatisfaction } from "../components/InnerSatisfaction";
import { InnerQuestions } from "../components/InnerQuestions";
import enter_hole_1 from "../images/enter_hole_1.webp";
import enter_hole_2 from "../images/enter_hole_2.webp";
import logo from "../images/logo.webp";
import { products as neurotroubleshuttingProducts } from "../consts/products";
import contentStyles from "../styles/contentStyles.module.css";
import containerStyles from "../styles/container.module.css";
import finalStyles from "../styles/finalContent.module.css";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import LinkButton from "../components/shared/LinkButton/LinkButton";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: 'Александр Васильев — Нейротраблшутер',
  description:
    "Портал для преодоления сложностей и устранения страданий с помощью вегетализма, кинезиологии и работы с подсознанием.",
  url: "https://alexandrvasilev.ru",
  inLanguage: "ru",
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
      "Я устраняю причины ваших страданий навсегда, помогая вам достичь гармонии и счастья.",
    image: {
      "@type": "ImageObject",
      url: "/_next/static/media/alex3.57d8e42f.webp",
      width: 2561,
      height: 1728,
    },
    jobTitle: "Нейротраблшутер, специалист по работе с подсознанием",
  },
  mainEntity: {
    "@type": "Person",
    name: "Александр Васильев",
    description:
      "Нейротраблшутер, устраняющий причины страданий с использованием авторских методик, работы с подсознанием, вегетализма и кинезиологии.",
    sameAs: ["https://alexandrvasilev.ru", "https://alexandrvasilev.ru/#about"],
  },
  about: [
    {
      "@type": "Thing",
      name: "Внутреннее удовлетворение",
      description:
        "Когда внешний успех не приносит внутреннего удовлетворения: в повседневной суете легко потерять связь с собой, ощущая тревогу, одиночество и усталость от существования.",
    },
    {
      "@type": "Thing",
      name: "Внутренние вопросы",
      description:
        "Внутренний голос всё чаще задаёт вопросы о подлинной сути, смысле жизни и истинном счастье. Ваш кризис — это зов вернуться к самим себе.",
    },
    {
      "@type": "Thing",
      name: "Жизненные трудности",
      description:
        "Почему жизнь начинает трещать по швам: потеря энергии, ясности, появление ссор, тревоги и усталости происходят, когда вы отдаляетесь от своего истинного пути.",
    },
    {
      "@type": "Thing",
      name: "Услуги помощи",
      description:
        "Помощь в устранении зависимостей, усталости, психосоматики, ночных кошмаров, психических травм, управления эмоциями, поиска предназначения, подавленного состояния и ментальных ограничений.",
    },
    {
      "@type": "ItemList",
      name: "Инструменты",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Thing",
            name: "Вегетализм",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Thing",
            name: "Кинезиология",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Thing",
            name: "Работа с подсознанием",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Thing",
            name: "Авторские методики",
          },
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
            offers: {
              "@type": "Offer",
              price: "300000",
              priceCurrency: "RUB",
            },
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
            offers: {
              "@type": "Offer",
              price: "125000",
              priceCurrency: "RUB",
            },
          },
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
    isPartOf: {
      "@id": "https://alexandrvasilev.ru/",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".title", ".paragraph"],
    },
  },
  offers: {
    "@type": "Offer",
    price: "Бесплатная первая консультация",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: "https://alexandrvasilev.ru/#message",
    description:
      "Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время. Первая консультация — бесплатно.",
  },
  keywords:
    "очищение интеграл ретрит грибы дурман нейротраблшутинг мухоморный ретрит вегетализм кинезиология внутреннее удовлетворение жизненный кризис предназначение",
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
      "Александр Васильев - нейротраблшутер в Казани. Профессиональная помощь в избавлении от психологических травм, страхов и ограничений. Опытный нейротраблшутер предлагает эффективные методики работы с подсознанием: устранение психосоматики, проработка детских травм, избавление от зависимостей, ночных кошмаров и тревожности. Индивидуальные сессии нейротраблшутинга для улучшения качества жизни. Авторские техники работы с сознанием, включая вегетализм, кинезиологию и медитативные практики. Организация мухоморных ретритов в Казани с опытным проводником. Безопасные и эффективные методы трансформации сознания. Бесплатная консультация для определения стратегии работы. Гарантированный результат через глубинную работу с подсознанием. Более 1000 успешных случаев. Профессиональный нейротраблшутер поможет найти и устранить причины ваших проблем. Записывайтесь на консультацию прямо сейчас!",
    title: 'Александр Васильев — Нейротраблшутер',
    description:
      "Портал для преодоления сложностей и устранения страданий с помощью вегетализма, кинезиологии и работы с подсознанием.",
    keywords:
      "очищение интеграл ретрит грибы дурман нейротраблшутинг мухоморный ретрит вегетализм кинезиология",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <Preview />
      <InnerSatisfaction />
      <InnerQuestions />
      {/* <InnerCracking /> */}

      <CirclesList
        {...{
          animation: false,
          title: "Почему жизнь начинает ",
          titleEmpty: "трещать по швам?",
          underTitle:
            "Потому что изначально вам был дан ресурс, живая сила — как знак доверия от самой Вселенной. Когда вы идёте по своему пути, она поддерживает, питает, направляет. Но если свернуть и начать жить не своей жизнью, а пытаться угодить чужим ожиданиям, гнаться за иллюзиями, то эта поддержка начинает ускользать.",
          items: [
            { title: "вы теряете энергию" },
            { title: "теряется ясность" },
            { title: "ссоры, усталость, тревога" },
            { title: "тело слабеет" },
            { title: "деньги приходят, но не радуют" },
            { title: "в зеркале — не вы" },
          ],
          descriptions: [
            "И всё вокруг словно гаснет. Не потому, что кто-то наказывает. А потому, что вы отдаляетесь от себя.",
            "Если продолжать так жить, можно остаться у разбитого корыта — в одиночестве, усталости, с болью внутри.",
            "Потому что сила, которая была дана вам, будет передана другому — тому, кто готов её понести. Кто идёт честно, глубоко, по-настоящему.",
            "Но если вы читаете эти строки — у вас ещё есть выбор. Всё можно вернуть. Только для этого нужно решиться: заглянуть внутрь и вспомнить, кто вы.",
          ],
        }}
      />

      <AboutMe
        {...{
          titleEmpty: "Где я",
          title: "могу вам помочь",
          items: [
            { title: "Усталость" },
            { title: "Зависимости" },
            { title: "Психосоматика" },
            { title: "Ночные кошмары" },
            { title: "Психические травмы" },
            { title: "Управление эмоциями" },
            { title: "Поиск предназначения" },
            { title: "Подавленное состояние" },
            { title: "Ментальные ограничения" },
          ],
          bottomText:
            "Возможно, ваша проблема не вошла в этот список, поэтому, напишите свой запрос, и я подумаю, как вам помочь.",
          href: { pathname: "/", hash: "#message" },
          buttonStatus: "Записаться",
        }}
      />

      <div style={{ backgroundColor: "var(--card-color)" }}>
        <VisibilityManager
          as="section"
          className={containerStyles.container}
          style={{ maxWidth: "1285px!important",  paddingBottom: "20px" }}
        >
          <div className={contentStyles.title} style={{ margin: "0" }}>
            <span>Результат с </span>
            <span className={contentStyles.title_empty}>1-ой сессии</span>
          </div>
        </VisibilityManager>
      </div>

      <Bio />

      <CirclesList
        {...{
          animation: true,
          title: "Арсенал ",
          titleEmpty: " применяемых мною инструментов",
          items: [
            { title: "Вегетализм" },
            { title: "Кинезиология" },
            { title: "Работа с подсознанием" },
            { title: "Авторские методики" },
          ],
        }}
      />

      <Final
        image={enter_hole_1}
        animation
      >
        <h2 className={finalStyles.title}>Мухоморный ретрит в Казани</h2>
        <p className={finalStyles.price}>300 000 ₽</p>
        <p className={finalStyles.description}>Путь исцеления и самопознания, открывающий доступ к встрече с Высшими Силами, позволяет наладить связь с Творцом и раскрыть своё предназначение.</p>
        <LinkButton href="/ceremony">
          <span>Подробнее</span>
        </LinkButton>
      </Final>
      <AnimatedLine />
      <Final
        image={enter_hole_2}
        animation
      >
        <h2 className={finalStyles.title}>Нейротраблшутинг</h2>
        <p className={finalStyles.price}>125 000 ₽</p>
        <div className={finalStyles.online}>
          <span className={finalStyles.blink}>●</span>
          <span>Онлайн</span>
        </div>
        <p className={finalStyles.description}>Точечное и быстрое устранение первопричин блоков, страхов, зависимостей и ограничений через глубинную работу с подсознанием.</p>
        <LinkButton href="/neurotroubleshutting">
          <span>Подробнее</span>
        </LinkButton>
      </Final>
      <AnimatedLine />
      <Final
        animation
      >
        <h2 className={finalStyles.title} style={{ marginTop: "0" }}>Запишитесь на бесплатную консультацию</h2>
        <p className={finalStyles.description}>Узнайте причины своих проблем, способы их решения и возможные преграды на вашем пути к успеху!</p>
        <LinkButton href="#message">
          <span>Записаться</span>
        </LinkButton>
      </Final>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"ГОТОВЫ ОТКРЫТЬ ДЛЯ СЕБЯ НОВЫЕ ГОРИЗОНТЫ?"}
        type="Первая консультация (Страница: Главная)"
        description={`Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время. 
          
          Первая консультация — бесплатно. 
          
          Подготовьте вопрос, который вас действительно беспокоит, и я помогу вам разобраться, раскрыть возможные причины и предложу решение. 
          
          На основе этого вы сможете понять, стоит ли продолжить работу со мной для достижения значимых изменений в вашей жизни.`}
      />
    </Layout>
  );
}
