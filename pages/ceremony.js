import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import enter_hole_1 from "../images/enter_hole_1.webp";
import point from "../images/point.webp";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import {
  Collapsible,
  CollapsibleSection,
} from "../components/Collapsible/Collapsible";

const videos = [
  {
    link: "https://vkvideo.ru/video_ext.php?oid=643721177&id=456239017&hash=0b13034ee75b5f53",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8427488283353&idx=11&type=39&tkn=nSK_GsbWR58NRHOQbw37UyFKChQ&fn=vid_x",
    name: "Отзыв Артёма о мухоморном ретрите",
    uploadDate: new Date("June 11, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239037&hash=0395dd995453c326",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8011482597949&idx=14&type=39&tkn=2N2-OvszIn7EgxYI2Z-GF-bu2P0&fn=vid_u",
    name: "Отзыв Романа о мухоморном ретрите",
    uploadDate: new Date("April 09, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239032&hash=bff15b594870bd69",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7999049697985&idx=4&type=39&tkn=Dayw1QUCYUXqC9NBc8WG1yJSzAM&fn=vid_u",
    name: "Отзыв Святослава мухоморном ретрите",
    uploadDate: new Date("April 09, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239202&hash=3d55b190e311b0e6",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8056083778201&idx=14&type=39&tkn=4JdkUPhvBebSj-QxD2Wfyoilyk4&fn=vid_x",
    name: "Отзыв Алексея о мухоморном ретрите в Казани",
    uploadDate: new Date("March 14, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239200&hash=1f59e4c38e95320f",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8375863872019&idx=13&type=39&tkn=ts_mfAwsPcPUBbtRqm36goN2p4E&fn=vid_x",
    name: "Отзыв Айдара о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239195&hash=c7ee923a88bf9b4e",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8079521942120&idx=0&type=39&tkn=jtyTeLZdk1m7h2aPiy06vcL6gFU&fn=vid_x",
    name: "Отзыв Вероники о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239199&hash=16d0076dfe68de70",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7825874291202&idx=5&type=39&tkn=KMEXkKjkAaE1uCoCA53YPllvx5w&fn=vid_x",
    name: "Отзыв Кирилла о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239198&hash=3d85099eca3aead0",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8306987961037&idx=7&type=39&tkn=mREkNCJHPc3T3-8TumsPyZwwzVE&fn=vid_x",
    name: "Отзыв Игоря о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239197&hash=20f58a9af5b24acf",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8101251648120&idx=15&type=39&tkn=bSVhZ7x-QwXJ-kGqSvxd-F3I75M&fn=vid_u",
    name: "Отзыв Булата о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239194&hash=4e6c5032e0306911",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7980227168806&idx=0&type=39&tkn=3trOuPsM_QG_haLATKsUt5kpSsA&fn=vid_u",
    name: "Отзыв Андрея о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239196&hash=9e93dff6cda11e19",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8011423943229&idx=10&type=39&tkn=639JwTN2gKMTOA3C9BmkO8OIXKI&fn=vid_u",
    name: "Отзыв Никиты о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Трансформационные мухоморные ретриты в Казани с профессиональным проводником",
  description:
    "Профессиональные шаманские церемонии с мухомором под руководством опытного проводника и трансформатора сознания Александра Васильева. Предлагаю безопасную глубинную трансформацию, самопознание на новом уровне, исцеление душевных ран и полное раскрытие скрытых возможностей личности. Гарантированный индивидуальный подход и комплексное сопровождение на всех этапах. Традиционные и современные практики шаманизма, работа с растениями-учителями, эффективная интеграция трансформационного опыта, постоянная поддержка после завершения ретрита. Ключевые слова: мухоморная церемония Казань, трансформация сознания, шаманский ритуал, духовное очищение, растительные учителя, глубинная трансформация, исцеление душевных травм, шаманская консультация, безопасные практики, персональный подход, духовные традиции, работа с подсознанием, самопознание, душевная гармония, трансформация личности, шаман Казань.",
  url: "https://alexandrvasilev.ru/ceremony",
  dateModified: new Date().toISOString(),
  lastReviewed: new Date().toISOString(),
  provider: {
    "@type": "Person",
    name: "Александр Васильев",
    url: "https://alexandrvasilev.ru/#about",
    description:
      "Гипнотерапевт и опытный проводник мухоморных церемоний. Специализируется на безопасных трансформационных практиках и глубинной работе с сознанием.",
    jobTitle:
      "Гипнотерапевт, сертифицированный проводник мухоморных ретритов",
    hasCredential: "Более 170 проведенных церемоний",
    knowsAbout: [
      "Мухоморные практики",
      "Шаманизм",
      "Работа с сознанием",
      "Трансформационные техники",
    ],
  },
  serviceType: "Трансформационный ретрит",
  areaServed: {
    "@type": "City",
    name: "Казань",
    containedInPlace: {
      "@type": "State",
      name: "Республика Татарстан",
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "55.7958",
    longitude: "49.1098",
  },
  offers: {
    "@type": "Offer",
    price: "300000",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: "https://alexandrvasilev.ru/ceremony#message",
    description:
      "Профессиональный мухоморный ретрит в Казани. Безопасная церемония с полным сопровождением опытного проводника. Индивидуальная дозировка, комфортные условия, гарантия безопасности.",
    priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 12))
      .toISOString()
      .split("T")[0],
    validFrom: new Date().toISOString(),
    category: "Трансформационные практики",
  },
  serviceOutput: {
    "@type": "ItemList",
    name: "Результаты мухоморного ретрита",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Thing",
          name: "Гармонизация эмоций",
          description:
            "Освобождение от внутренних зажимов, тяжёлых переживаний и сдерживаемых чувств. Снижение уровня внутреннего напряжения, преодоление последствий психоэмоциональных нагрузок. Глубокое чувство покоя, собранности и целостности после церемонии.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Thing",
          name: "Физическое восстановление",
          description:
            "Уходит тяжесть из тела, появляется лёгкость и свобода движений. Становится проще засыпать, просыпаться и чувствовать себя в ресурсе. Запускаются процессы, которые ощущаются как глубокое восстановление.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Thing",
          name: "Личностный рост и осознание предназначения",
          description:
            "Обретение ясности в мыслях и понимание своих истинных целей. Улучшение качества жизни, отношений, карьеры. Повышение личной эффективности и продуктивности.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Thing",
          name: "Прокачка сексуальности",
          description:
            "Освобождение от внутренних блоков, стыда, травм. Переосмысление отношения к своему телу и интимности. Пробуждение естественной сексуальной энергии.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Thing",
          name: "Глубинная связь с природой и Высшими Силами",
          description:
            "Единение с миром и понимание своего места во Вселенной. Ощущение потока жизни, благодарности и осознанности. Мистические переживания, способные изменить мировоззрение.",
        },
      },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Особенности мухоморного ретрита",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Подготовка",
          description:
            "Вы получаете рекомендации по диете и грамотную настройку на погружение. Это позволяет сделать церемонию более осмысленной, безопасной и продуктивной.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Священная церемония",
          description:
            "Подбирается индивидуальная дозировка. Мухомор употребляется в виде сомы, с добавлением других Растений-Учителей, разрешённых в РФ. Проводятся очистительные и исцеляющие ритуалы, полученные от Высших Сил.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Интеграция опыта",
          description:
            "После ретрита, помощь в осознании смысла полученного опыта, верном применении в жизни и закреплении трансформации.",
        },
      },
    ],
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Преимущества ретрита",
      value:
        "Опытный проводник; Глубокая работа с подсознанием; Безопасный и эффективный формат; Полное сопровождение и интеграция; Индивидуальная дозировка с кинезиологической проверкой",
    },
    {
      "@type": "PropertyValue",
      name: "Безопасность",
      value:
        "Профессиональное сопровождение, контролируемая среда, индивидуальный подход",
    },
    {
      "@type": "PropertyValue",
      name: "Локация",
      value: "Загородная резиденция, Казань",
    },
    {
      "@type": "PropertyValue",
      name: "Исторические примеры использования",
      value:
        "Шаманизм и древние традиции; Воинская доблесть и обострение чувств; Духовные ритуалы индейцев; Современные исследования",
    },
    {
      "@type": "PropertyValue",
      name: "Известные практикующие",
      value:
        "Множество выдающихся предпринимателей и лидеров используют шаманские практики для расширения восприятия, глубокого самопознания и раскрытия своего истинного потенциала",
    },
    {
      "@type": "PropertyValue",
      name: "Риски и предосторожности",
      value:
        "Токсичность и побочные эффекты при неправильном употреблении; Риск десоциализации без правильной интеграции; Необходимость опытного проводника",
    },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://alexandrvasilev.ru/ceremony#message",
    },
    result: {
      "@type": "Reservation",
      name: "Запись на мухоморный ретрит",
    },
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Роман" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "После погружения испытал самые приятные ощущения в жизни",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Дмитрий" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Глубокий трансформационный опыт, изменивший моё восприятие жизни",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Святослав" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Нашел ответы на глубинные вопросы, которые долго меня беспокоили",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Алексей" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "Глубокая трансформация и осознание своего истинного пути",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Вероника" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "Обрела внутренний покой и новое понимание жизни",
    },
  ],
  video: [
    {
      "@type": "VideoObject",
      name: "Отзывы участников мухоморного ретрита",
      description:
        "Коллекция видеоотзывов от участников мухоморных ретритов в Казани под руководством Александра Васильева",
      thumbnailUrl:
        "https://i.mycdn.me/getVideoPreview?id=8011482597949&idx=14&type=39&tkn=2N2-OvszIn7EgxYI2Z-GF-bu2P0&fn=vid_u",
      uploadDate: "2025-04-09",
    },
  ],
  faqPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что такое мухоморный ретрит?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мухоморный ретрит — это возможность глубоко погрузиться в себя, восстановить связь с природой, улучшить самочувствие и получить новый опыт. Вы сможете узнать и исследовать себя настоящих, освободиться от внутренних блоков и ощутимо улучшить качество жизни.",
        },
      },
      {
        "@type": "Question",
        name: "Кому подойдёт этот ретрит?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Этот ретрит для вас, если: вы чувствуете, что застряли на одном месте и не знаете как и куда двигаться дальше; вы хотите лучше понять себя и свои цели; вам понятен вектор развития, но дела идут тяжело и/или ничего не получается; вы ищете способы справиться с внутренними страхами и ограничениями; вы готовы к трансформации и новому опыту; вы желаете качественно отдохнуть и обрести гармонию с собой и миром.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасно ли это?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, ваша безопасность — главный приоритет. Александр Васильев лично сопровождает каждого участника на всех этапах, дозировки и процесс строго контролируются, создается поддерживающая атмосфера, где вы будете чувствовать себя комфортно и защищённо.",
        },
      },
      {
        "@type": "Question",
        name: "Что вы получаете от участия?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Глубокое очищение, осознание себя и своего пути. Освобождение от страхов, тревог и внутренних ограничений. Новый взгляд на жизнь и возможности. Улучшение самочувствия. Состояние гармонии.",
        },
      },
      {
        "@type": "Question",
        name: "Как проходит ретрит?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы начинаем с подготовки: я помогаю вам грамотно подготовиться и настроиться на церемонию. Основная часть включает взаимодействие с Мухомором в безопасной и комфортной обстановке. Завершаем интеграцией: я помогаю вам осмыслить полученный опыт и грамотно применить его в жизни.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли иметь опыт взаимодействия с Мухомором?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, опыт не обязательно. Я работаю как с новичками, так и с теми, кто уже знаком с подобными практиками. Главное — ваше доверие.",
        },
      },
      {
        "@type": "Question",
        name: "Что взять с собой?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Домашнюю одежду, душевые принадлежности, маску для сна.",
        },
      },
      {
        "@type": "Question",
        name: "Где и когда проходит ретрит?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ретрит проводится в загородной резиденции, недалеко от Казани. Даты согласовываются индивидуально, исходя из моего расписания и ваших пожеланий.",
        },
      },
      {
        "@type": "Question",
        name: "Как записаться?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Просто оставьте заявку на сайте, и я свяжусь с вами.",
        },
      },
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/ceremony",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500+",
    bestRating: "5",
    worstRating: "1",
  },
  isBasedOn: {
    "@type": "CreativeWork",
    name: "Традиционные шаманские практики",
    description:
      "Древние техники работы с сознанием, адаптированные для современного человека",
  },
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title:
      "Мухоморные ретриты | Шаманизм, церемонии и работа с растениями-учителями",
    description:
      "Погружайтесь в шаманские церемонии с мухомором под руководством проводника. Безопасные ретриты, глубокая трансформация и персональный подход.",
    keywords:
      "мухомор, шаманизм, шаман, ретрит, растения учителя, мистика, трип репорт, бэд трип, микродозинг, психоделика, церемония, народная медицина, дух, душа, ритуалы, эзотерика, трансформация, консультация шамана, Казань",
    seoContent:
      "Мухоморные церемонии в Казани — подлинные шаманские практики с мухомором под руководством Александра Васильева. Безопасная трансформация сознания, глубокое самопознание, исцеление травм и раскрытие потенциала. Индивидуальное сопровождение, более 170 проведённых ретритов только за последний год. Традиционные шаманские подходы, работа с растениями-наставниками, интеграция опыта и поддержка после. Ключевые слова: мухоморный ретрит Казань, шаманская церемония, шаманские традиции, растения-учителя, трансформация сознания, духовное исцеление, консультация шамана, безопасный ретрит, персональный подход, энергетические практики, травматерапия, духовное развитие, внутренняя гармония, опыт участников, проводник Казань.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text="Мухоморный ретрит в Казани"
        image={enter_hole_1}
        animated={false}
      />

      <div className={containerStyles.container}>
        <Collapsible title="Польза" defaultOpen={false}>
          <CollapsibleSection title="Эмоции">
            <p className={contentStyles.textDescription}>
              Освобождение от внутренних зажимов, тяжёлых переживаний и
              сдерживаемых чувств.
            </p>
            <p className={contentStyles.textDescription}>
              Снижение уровня внутреннего напряжения, преодоление последствий
              психоэмоциональных нагрузок.
            </p>
            <p className={contentStyles.textDescription}>
              Глубокое чувство покоя, собранности и целостности после церемонии.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Физиология">
            <p className={contentStyles.textDescription}>
              Уходит тяжесть из тела, появляется лёгкость и свобода движений.
            </p>
            <p className={contentStyles.textDescription}>
              Становится проще засыпать, просыпаться и чувствовать себя в
              ресурсе.
            </p>
            <p className={contentStyles.textDescription}>
              Запускаются процессы, которые ощущаются как глубокое
              восстановление.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Сексуальность">
            <p className={contentStyles.textDescription}>
              Освобождение от внутренних блоков, стыда, травм.
            </p>
            <p className={contentStyles.textDescription}>
              Переосмысление отношения к своему телу и интимности.
            </p>
            <p className={contentStyles.textDescription}>
              Пробуждение естественной сексуальной энергии.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Божественность">
            <p className={contentStyles.textDescription}>
              Единение с миром и понимание своего места во Вселенной.
            </p>
            <p className={contentStyles.textDescription}>
              Ощущение потока жизни, благодарности и осознанности.
            </p>
            <p className={contentStyles.textDescription}>
              Мистические переживания, способные изменить мировоззрение.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Личностный рост">
            <p className={contentStyles.textDescription}>
              Обретение ясности в мыслях и понимание своих истинных целей.
            </p>
            <p className={contentStyles.textDescription}>
              Улучшение качества жизни, отношений, карьеры.
            </p>
            <p className={contentStyles.textDescription}>
              Повышение личной эффективности и продуктивности.
            </p>
          </CollapsibleSection>
        </Collapsible>

        <Collapsible title="Преимущества" defaultOpen={false}>
          <CollapsibleSection title="Назначен проводником">
            <p className={contentStyles.textDescription}>
              Этот путь выбрал меня. В 17 лет отец провёл обряд посвящения,
              передав древнюю традицию.
            </p>
            <p className={contentStyles.textDescription}>
              Позднее, в глубоком погружении на Мухоморе, мною было получено
              прямое указание сопровождать людей в этом опыте, помогая им
              восстановиться и найти путь к самим себе.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Глубокая работа с подсознанием">
            <p className={contentStyles.textDescription}>
              Страх, волнение или сомнения перед ретритом? Это естественно. По
              необходимости, провожу предварительную работу с подсознанием,
              помогая устранить внутреннее напряжение, беспокойство и помогаю
              настроиться на взаимодействие с Мухомором.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Быстрый, но эффективный формат">
            <p className={contentStyles.textDescription}>
              В отличие от большинства ретритных центров, где практика длится по
              3–4 дня, мой ретрит занимает не более суток. Вы получаете мощный
              трансформационный опыт, без необходимости выпадать из жизни на
              несколько дней.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Безопасность и грамотная интеграция">
            <p className={contentStyles.textDescription}>
              Ретрит проходит в комфортном и защищённом месте. После церемонии,
              помогаю участникам осознать и правильно внедрить полученный опыт в
              повседневную жизнь.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Индивидуальная дозировка">
            <p className={contentStyles.textDescription}>
              Каждому участнику подбираю дозировку Мухомора, которую
              дополнительно проверяю через кинезиологический тест, исключая риск
              передозировки и даже минимальную вероятность случайного попадания
              в партию Бледной Поганки. Это позволяет обеспечивать безопасность
              на каждом этапе.
            </p>
          </CollapsibleSection>
        </Collapsible>

        <Collapsible title="Программа" defaultOpen={false}>
          <div id="program" />
          <CollapsibleSection title="Подготовка">
            <p className={contentStyles.textDescription}>
              Мы с вами знакомимся, уточняем намерение, причину обращения,
              пробовали ли вы мухоморы ранее, употребляете ли алкоголь,
              наркотики и другие психоактивные вещества. Конфиденциально.
            </p>
            <p className={contentStyles.textDescription}>
              По необходимости заменяем некоторые синтетические препараты на
              растительные.
            </p>
            <p className={contentStyles.textDescription}>
              Корректируем диету с учётом индивидуальных особенностей. Проводим
              сессию работы с подсознанием для настройки на взаимодействие с
              мухомором.
            </p>
            <p className={contentStyles.textDescription}>
              Составляем дополнительные рекомендации для получения наиболее
              качественного опыта.
            </p>
            <p className={contentStyles.textDescription}>
              Уточняем готовность вашего организма к трипу при помощи
              кинезиологического теста.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Встреча">
            <p className={contentStyles.textDescription}>
              По прибытии, вас ждёт трансфер. В загородном доме вас встречают
              наши люди и котик по имени «Кайдзи». 😼 Кстати, если вы страдаете
              от аллергии на кошек, то через работу с подсознанием я
              заблаговременно избавляю вас от этой проблемы — в подарок.
            </p>
            <p className={contentStyles.textDescription}>
              Определяем вашу идеальную дозировку пантерных мухоморов и дважды
              перепроверяем точность через мышечное тестирование.
            </p>
            <p className={contentStyles.textDescription}>
              Пока готовится «сома», проводим для вас финальный инструктаж перед
              трипом.
            </p>
            <p className={contentStyles.textDescription}> • Выпиваете отвар.</p>
            <p className={contentStyles.textDescription}>
              Надеваем специальное снаряжение и помогаем надёжно зафиксироваться
              для максимальной безопасности во время путешествия.
            </p>
            <p className={contentStyles.textDescription}>
              Включаем гармоничное звуковое сопровождение.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Мистерия">
            <p className={contentStyles.textDescription}>
              В начале церемонии, я провожу традиционный дымовой обряд с
              использованием датуры, можжевельника и калифорнийского шалфея.
            </p>
            <p className={contentStyles.textDescription}>
              Погружение происходит в спокойном состоянии умиротворения,
              зачастую человек как бы засыпает, отправляясь в путешествие.
            </p>
            <p className={contentStyles.textDescription}>
              Грибы проводят «операцию» по исцелению и, как правило, вводят
              человека в своего рода анестезию, которая может сопровождаться
              мистическим опытом.
            </p>
            <p className={contentStyles.textDescription}>
              Даже если внутренние переживания в трипе проходят затруднительно,
              человек потом зачастую этого просто не помнит.
            </p>
            <p className={contentStyles.textDescription}>
              Имея опыт проведения более 300 трипов за один только 2025-й год,
              наш коллектив непрерывно обеспечивает вам максимальную поддержку
              на всех уровнях.
            </p>
            <p className={contentStyles.textDescription}>
              Вы постоянно находитесь под присмотром. В случае необходимости, я
              совершаю разного рода ритуалы, направленные на улучшение вашего
              состояния.
            </p>
            <p className={contentStyles.textDescription}>
              Сам сюжет путешествия — это всегда эксклюзив. Мухомор даёт людям
              лучшее, что нужно на данном этапе жизненного пути.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Долёживание">
            <p className={contentStyles.textDescription}>
              В какой-то момент, вы возвращаетесь в сознание, но трип ещё может
              продолжаться, поэтому важно дождаться полностью адекватного
              состояния.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Интеграция">
            <p className={contentStyles.textDescription}>
              Следуя специальному протоколу, мы убеждаемся в том, что вы пришли
              в себя. По таймингу, в определённой последовательности,
              освобождаем вас от фиксаторов.
            </p>
            <p className={contentStyles.textDescription}>
              Теперь вы можете комфортно принять душ и вкусный ужин из полезных
              продуктов.
            </p>
            <p className={contentStyles.textDescription}>
              В течение следующих трёх месяцев, вы получаете ежедневную
              персональную программу микродозинга мухоморов, рекомендации по
              другим натуральным средствам и еженедельные проработки подсознания
              по запросам.
            </p>

            <p className={contentStyles.textDescription}>
              Если не знаешь что делать, тебе точно к нам.
            </p>
          </CollapsibleSection>
        </Collapsible>

        <Collapsible title="Нюансы" defaultOpen={false}>
          <CollapsibleSection title="Токсичность">
            <p className={contentStyles.textDescription}>
              Мухомор содержит активные вещества, которые могут вызвать тошноту,
              головокружение и даже отравление при неправильном употреблении.
              Самостоятельное использование без опыта и знаний может быть
              опасным.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Десоциализация">
            <p className={contentStyles.textDescription}>
              Глубокие переживания требуют осознанной интеграции. Без поддержки
              проводника можно потерять связь с реальностью или столкнуться с
              внутренними конфликтами.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Законодательство">
            <p className={contentStyles.textDescription}>
              В России Мухомор не запрещён и его использование абсолютно
              легально.
            </p>
          </CollapsibleSection>
        </Collapsible>
      </div>
      <VideoWidget videos={videos} />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Мухоморный ретрит в Казани (Страница: Церемония)"
        submitText={`Героический шаг`}
      />
    </Layout>
  );
}
