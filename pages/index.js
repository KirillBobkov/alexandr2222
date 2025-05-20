import Layout from "../components/Layout/Layout";
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
    "Портал для преодоления сложностей и устранения страданий с помощью вегетализма, кинезиологии, работы с подсознанием и авторских методик. Бесплатная консультация, гарантия возврата денег, индивидуальные программы и ретриты.",
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
      "Я устраняю причины ваших страданий навсегда, помогая вам достичь гармонии и счастья. Нейротраблшутер, специалист по работе с подсознанием, провожу ретриты и индивидуальные сессии.",
    image: {
      "@type": "ImageObject",
      url: "/_next/static/media/alex3.57d8e42f.webp",
      width: 2561,
      height: 1728,
    },
    jobTitle: "Нейротраблшутер, специалист по работе с подсознанием",
    sameAs: [
      "https://t.me/chronics44",
      "https://www.tiktok.com/@alexandrvasilev.ru?_t=ZS-8vOVKf5Isrv&_r=1",
      "https://youtube.com/@alexandrvasilev_ru?si=h6JxlRRBXkh8Oxln",
      "https://alexandrvasilev.ru/",
      "https://alexandrvasilev.ru/#about"
    ]
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
      "https://alexandrvasilev.ru/#about"
    ]
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Почему у других получается, а у меня нет?",
          acceptedAnswer: { "@type": "Answer", text: "Это связано с внутренними блоками и неосознанными ограничениями, которые можно устранить через работу с подсознанием." }
        },
        {
          "@type": "Question",
          name: "Тем ли делом я занимаюсь?",
          acceptedAnswer: { "@type": "Answer", text: "Ответ на этот вопрос приходит через глубокое самопознание и устранение внутренних конфликтов." }
        },
        {
          "@type": "Question",
          name: "Почему я постоянно разочаровываюсь в людях?",
          acceptedAnswer: { "@type": "Answer", text: "Причина часто кроется в неразрешённых психотравмах и ожиданиях, которые можно проработать." }
        },
        {
          "@type": "Question",
          name: "Сколько будут длиться эти страдания?",
          acceptedAnswer: { "@type": "Answer", text: "Страдания заканчиваются, когда устраняются их коренные причины." }
        },
        {
          "@type": "Question",
          name: "Из-за чего то, что должно вызывать радость в жизни, становится обузой?",
          acceptedAnswer: { "@type": "Answer", text: "Это сигнал о внутреннем конфликте, который можно устранить с помощью нейротраблшутинга." }
        },
        {
          "@type": "Question",
          name: "Неужели жизнь действительно не имеет смысла?",
          acceptedAnswer: { "@type": "Answer", text: "Смысл жизни можно найти, наладив контакт с собой и устранив внутренние блоки." }
        },
        {
          "@type": "Question",
          name: "Отчего я постоянно хочу уйти из жизни?",
          acceptedAnswer: { "@type": "Answer", text: "Это признак тяжёлых психотравм, которые поддаются коррекции через работу с подсознанием." }
        }
      ]
    },
    {
      "@type": "ItemList",
      name: "Инструменты",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "Вегетализм" } },
        { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "Кинезиология" } },
        { "@type": "ListItem", position: 3, item: { "@type": "Thing", name: "Работа с подсознанием" } },
        { "@type": "ListItem", position: 4, item: { "@type": "Thing", name: "Авторские методики" } },
      ],
    },
    {
      "@type": "ItemList",
      name: "Услуги",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Мухоморный ретрит в Казани", url: "https://alexandrvasilev.ru/ceremony", description: "Путь исцеления и самопознания, открывающий доступ к встрече с Высшими Силами, позволяет наладить связь с Творцом и раскрыть своё предназначение.", offers: { "@type": "Offer", price: "300000", priceCurrency: "RUB" } } },
        { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Нейротраблшутинг", url: "https://alexandrvasilev.ru/neurotroubleshutting", description: "Точечное и быстрое устранение первопричин блоков, страхов, зависимостей и ограничений через глубинную работу с подсознанием.", offers: { "@type": "Offer", price: "125000", priceCurrency: "RUB" } } },
        { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "Бросить курить", url: "https://alexandrvasilev.ru/programs/drop-smoking", description: "Индивидуальная программа по избавлению от никотиновой зависимости." } },
        { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "Отпустить негатив", url: "https://alexandrvasilev.ru/programs/remove-bad-memories", description: "Программа по освобождению от негативных воспоминаний и эмоций." } },
        { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "Увеличить заработок", url: "https://alexandrvasilev.ru/programs/grow-money", description: "Программа по снятию внутренних ограничений, мешающих финансовому росту." } },
        { "@type": "ListItem", position: 6, item: { "@type": "Service", name: "Преодоление фобий", url: "https://alexandrvasilev.ru/programs/freedom-from-phobia", description: "Программа по работе с фобиями и страхами." } },
        { "@type": "ListItem", position: 7, item: { "@type": "Service", name: "Свобода от аллергии", url: "https://alexandrvasilev.ru/programs/freedom-from-allergy", description: "Программа по устранению аллергических реакций через работу с подсознанием." } },
        { "@type": "ListItem", position: 8, item: { "@type": "Service", name: "Спокойный сон", url: "https://alexandrvasilev.ru/programs/freedom-from-nightmares", description: "Программа по устранению ночных кошмаров и улучшению качества сна." } },
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Проблемы, с которыми я работаю",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Эмоциональное выгорание" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Поиск жизненного предназначения" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Комплексы и страхи" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Зависимости" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Заниженная самооценка" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Раздражительность" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Психические травмы" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ночные кошмары" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Взаимодействие с людьми" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Суицидальные мысли" } },
      ]
    }
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://alexandrvasilev.ru/" },
      { "@type": "ListItem", position: 2, name: "Программы", item: "https://alexandrvasilev.ru/#programs" },
      { "@type": "ListItem", position: 3, name: "Обо мне", item: "https://alexandrvasilev.ru/#about" },
      { "@type": "ListItem", position: 4, name: "Отзывы", item: "https://alexandrvasilev.ru/#reviews" },
      { "@type": "ListItem", position: 5, name: "Вопросы и ответы", item: "https://alexandrvasilev.ru/#faq" },
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
  offers: {
    "@type": "Offer",
    price: "Бесплатная первая консультация",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: "https://alexandrvasilev.ru/#message",
    description:
      "Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время. Первая консультация — бесплатно. Гарантия возврата денег при отсутствии результата.",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Запись на консультацию",
    url: "https://alexandrvasilev.ru/#message",
    availableLanguage: ["Russian"],
    areaServed: "RU",
  },
  keywords:
    "очищение интеграл ретрит грибы дурман нейротраблшутинг мухоморный ретрит вегетализм кинезиология внутреннее удовлетворение жизненный кризис предназначение консультация возврат денег TikTok YouTube Telegram VK Дзен",
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
      <CirclesList
        {...{
          animation: false,
          title: "Почему жизнь начинает ",
          titleEmpty: "трещать по швам?",
          underTitle:
            "В первую очередь потому, что вы не умеете прислушиваться к своим ощущениям. Зачастую идёте против самих себя и удивляетесь, почему получаете не тот результат, который ожидаете.",
          items: [
            { title: "отсутствие энергии" },
            { title: "потеря радости в жизни" },
            { title: "ощущение нереализованности" },
            { title: "желание уйти от реальности" },
            { title: "ощущение, что жизнь ускользает" },
            { title: "зависть" },
            { title: "опустошение" },
            { title: "презрение к самому себе" },
          ],
          descriptions: [
            "Самый лучший ваш друг — это вы сам, и только тогда, когда вы сможете сосуществовать с самим собой в гармонии, вас ничто не сможет свернуть с истинного пути.",
          ],
        }}
      />

      <AboutMe
        {...{
          titleEmpty: "Где я",
          title: "могу помочь",
          items: [
            { title: "Эмоциональное выгорание" },
         
            { title: "Поиск жизненного предназначения" },
            { title: "Комплексы и страхи" },
            { title: "Зависимости" },
            { title: "Заниженная самооценка" },
            { title: "Раздражительность" },
            { title: "Психические травмы" },
            { title: "Ночные кошмары" },
            { title: "Взаимодействие с людьми" },
            { title: "Суицидальные мысли" },
          ],
          bottomText:
            "Возможно, ваша проблема не вошла в этот список, поэтому, напишите свой запрос, и я подумаю, смогу ли вам помочь.",
          href: { pathname: "/", hash: "#message" },
          buttonStatus: "Записаться",
        }}
      />

      <CirclesList
        {...{
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
        image={enter_hole_1}
        animation
        customStyles={{
          marginBottom: "100px",
        }}
      >
        <h2 className={finalStyles.title}>Мухоморный ретрит в Казани</h2>
        <p className={finalStyles.price}>300 000 ₽</p>
        <p className={finalStyles.description}>Путь исцеления и самопознания, открывающий доступ к встрече с Высшими Силами, позволяет наладить связь с Творцом и раскрыть своё предназначение.</p>
        <LinkButton href="/ceremony">
          <span>Подробнее</span>
        </LinkButton>
      </Final>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"Запишитесь на бесплатную консультацию"}
        type="Первая консультация (Страница: Главная)"
        description={`Узнайте причины своих проблем, способы их решения и возможные преграды на вашем пути к успеху!`}
      />
    </Layout>
  );
}
