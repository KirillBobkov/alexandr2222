import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import secondary_preview_10 from "../images/secondary_preview_10.webp";
import { Final } from "../components/Final/Final";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { Questions } from "../components/Questions/Questions";
import { Button } from "../components/shared/Button/Button";
import { PhotoGrid } from "../components/PhotoGrid/PhotoGrid";
import ceremony_image_1 from "../images/ceremony_image_1.webp";
import ceremony_image_2 from "../images/ceremony_image_2.webp";
import ceremony_image_3 from "../images/ceremony_image_3.webp";
import ceremony_image_4 from "../images/ceremony_image_4.webp";
import finalStyles from "../styles/finalContent.module.css";

import Image from "next/image";
const videos = [
  {
    link: "https://vkvideo.ru/video_ext.php?oid=643721177&id=456239017&hash=0b13034ee75b5f53",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8427488283353&idx=11&type=39&tkn=nSK_GsbWR58NRHOQbw37UyFKChQ&fn=vid_x",
    name: "Отзыв Артёма о мухоморном ретрите",
    uploadDate: new Date("June 11, 2025").toISOString(),
  },
  // New videos added on March 2024
  {
    link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239037&hash=0395dd995453c326",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8011482597949&idx=14&type=39&tkn=2N2-OvszIn7EgxYI2Z-GF-bu2P0&fn=vid_u",
    name: "Отзыв Романа о мухоморном ретрите",
    uploadDate: new Date("April 09, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239035&hash=41d73acd4693cddf",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8024136747545&idx=1&type=39&tkn=wR32eObJAgzIULrQyKVDYp52URM&fn=vid_u",
    name: "Отзыв Дмитрия о мухоморном ретрите",
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
      "https://i.mycdn.me/getVideoPreview?id=8285427599919&idx=15&type=39&tkn=rI9YJkYSMhbD588WULwlAN7EdKU&fn=vid_l",
    name: "Отзыв Булата о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },

  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239194&hash=4e6c5032e0306911",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285376285231&idx=0&type=39&tkn=Qn5Sjxdkq1-WeKVypbSloCMph4g&fn=vid_l",
    name: "Отзыв Андрея о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239196&hash=9e93dff6cda11e19",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285423798831&idx=10&type=39&tkn=S0XDiAMyHgOjpCL3c2nuIizK53Y&fn=vid_l",
    name: "Отзыв Никиты о Мухоморном ретрите в Казани",
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
];

const teamMembers = [
  {
    img: "https://sun9-23.userapi.com/s/v1/ig2/ROaBSLdjpq0-0cXn2NXqAlr4kidrh1qOwuiSfW8tdUodqxUzGWSmHiGRyGIvL1eH4gBiqBhOFTMnVmy_g5oQx657.jpg?quality=95&as=32x34,48x50,72x76,108x114,160x168,240x252,360x379,480x505,540x568,640x673,720x757,1080x1136,1217x1280&from=bu&u=cJAXLOZAOol1k26Z7uYlzCHGvIGvswRHIafkX5RXJ5E&cs=574x604",
    title: "Ричард Брэнсон",
    description: "Основатель Virgin Group",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg",
    title: "Илон Маск",
    description: "Основатель Tesla, SpaceX, Neuralink",
  },
  {
    img: "https://static.life.ru/posts/2017/05/1006612/29d3c5bdf20e45cc66aa1793b63975b5.jpg",
    title: "Тим Кук",
    description: "CEO Apple",
  },
  {
    img: "https://yaffa-cdn.s3.amazonaws.com/adnews/live/images/dmImage/StandardImage/angus-keene-acting-managing-director-twitter-australia-new-zealand2.jpg",
    title: "Питер Тиль",
    description: "Сооснователь PayPal и Palantir Technologies",
  },
  {
    img: "https://floraluo90.wordpress.com/wp-content/uploads/2014/10/20100501170555_93490.jpg",
    title: "Стюарт Брэнд",
    description: "Основатель Whole Earth Catalog",
  },
  {
    img: "https://appraf.com/media/credits/cast/6745ed39284f4d55971c0f2e1f83a5e1.jpeg",
    title: "Джеймс Фадиман",
    description: "Психолог, автор книги 'Психоделический опыт'",
  },
  {
    img: "https://multiurok.ru/img/113508/image_5c8e125fd547f.jpg",
    title: "Дуг Энгельбарт",
    description: "Изобретатель компьютерной мыши",
  },
  {
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/8b5c8c98-5a0c-47a3-9ca4-ac52b3fec797/3840x",
    title: "Джордж Карлин",
    description: "Легендарный комик, философ, критик общества",
  },
  {
    img: "https://www.uncut.co.uk/wp-content/uploads/2022/02/Joe-Rogan-2019@1400x1050-800x600.jpg",
    title: "Джо Роган",
    description:
      "Ведущий подкаста The Joe Rogan Experience, комик, комментатор UFC",
  },
  {
    img: "https://www.kino-teatr.ru/news/28866/257349.jpg",
    title: "Майк Тайсон",
    description: "Легендарный боксёр, чемпион мира в тяжёлом весе",
  },
  {
    img: "https://sun9-78.userapi.com/s/v1/if1/YaMSH5bzFpMBGPRAeY61l0Jcq0THjHSkOGiZkitKiTRH8hcvoT9mWhXgtSWrJfE8Q263OKdm.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1000x1000&from=bu&cs=320x320",
    title: "Джек Николсон",
    description: "Легендарный актёр, обладатель трёх премий Оскар",
  },
  {
    img: "https://sun9-55.userapi.com/impf/VOKbtdjV_6BGhW9-pz_oGGGuQ6Uk8pD8TQO9pQ/42nYS5VAYaE.jpg?size=604x441&quality=96&sign=29fdbffcd17036c7aa2b34ba79a5cce8&type=album",
    title: "Алехандро Ходоровски",
    description: "Режиссёр, писатель, создатель психомагии",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Duncan_Trussell_on_VICELAND%27S_Party_Legends.png/800px-Duncan_Trussell_on_VICELAND%27S_Party_Legends.png",
    title: "Дункан Трасселл",
    description: "Комедиант, подкастер, исследователь сознания",
  },
  {
    img: "https://fazanmag.com/media/k2/items/cache/22f8149d30db4895b7f3ed99ae79f326_XL.jpg?t=20220920_132003",
    title: "Дита фон Тиз",
    description: "Актриса, модель, королева бурлеска",
  },
];

export const questionsContent = {
  blocks: [
    {
      title: "Что такое мухоморный ретрит?",
      answer: `Мухоморный ретрит — это возможность глубоко погрузиться в себя, восстановить связь с природой, улучшить самочувствие и получить новый опыт. 
      
      Вы сможете узнать и исследовать себя настоящих, освободиться от внутренних блоков и ощутимо улучшить качество жизни.`,
    },
    {
      title: "Кому подойдёт этот ретрит?",
      answer: `Этот ретрит для вас, если:
          - Вы чувствуете, что застряли на одном месте и не знаете как и куда двигаться дальше
          - Вы хотите лучше понять себя и свои цели
          - Вам понятен вектор развития, но дела идут тяжело и/или ничего не получается
          - Вы ищете способы справиться с внутренними страхами и ограничениями
          - Вы готовы к трансформации и новому опыту
          - Вы желаете качественно отдохнуть и обрести гармонию с собой и миром`,
    },
    {
      title: "Безопасно ли это?",
      answer: `Да, ваша безопасность — мой главный приоритет.
          - Я лично сопровождаю каждого участника на всех этапах
          - Дозировки и процесс строго контролируются
          - Я создаю поддерживающую атмосферу, где вы будете чувствовать себя комфортно и защищённо`,
    },
    {
      title: "Что вы получаете от участия?",
      answer: `— Глубокое очищение, осознание себя и своего пути
          — Освобождение от страхов, тревог и внутренних ограничений
          — Новый взгляд на жизнь и возможности
          — Улучшение самочувствия
          — Состояние гармонии`,
    },
    {
      title: "Как проходит ретрит?",
      answer: `- Мы начинаем с подготовки: я помогаю вам грамотно подготовиться и настроиться на церемонию
          - Основная часть включает взаимодействие с Мухомором в безопасной и комфортной обстановке
          - Завершаем интеграцией: я помогаю вам осмыслить полученный опыт и грамотно применить его в жизни`,
    },
    {
      title: "Нужно ли иметь опыт взаимодействия с Мухомором?",
      answer: `Нет, опыт не обязательно. Я работаю как с новичками, так и с теми, кто уже знаком с подобными практиками. Главное — ваше доверие.`,
    },
    {
      title: "Что взять с собой?",
      answer: `- Домашнюю одежду
              - Душевые принадлежности
              - Маску для сна`,
    },
    {
      title: "Где и когда проходит ретрит?",
      answer: `Ретрит проводится в загородной резиденции, недалеко от Казани. Даты согласовываются индивидуально, исходя из моего расписания и ваших пожеланий.`,
    },
    {
      title: "Как записаться?",
      answer: `Просто оставьте заявку на сайте, и я свяжусь с вами.`,
    },
  ],
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Мухоморные ретриты в Казани с опытным проводником",
  description:
    "Мухоморные ретриты в Казани — профессиональные шаманские церемонии с мухомором под руководством опытного проводника Александра Васильева. Безопасная трансформация, глубокое самопознание, исцеление психотравм, раскрытие истинного потенциала. Индивидуальный подход, полное сопровождение, более 500 успешных ретритов, 8 лет опыта. Практики шаманизма, работа с растениями-учителями, интеграция опыта, поддержка после ретрита. Ключевые слова: мухоморный ретрит Казань, шаман, церемония, шаманизм, растения учителя, глубокая трансформация, исцеление, консультация шамана, безопасный ретрит, индивидуальный подход, духовные практики, психотравмы, самопознание, гармония, отзывы, шаман Казань.",
  url: "https://alexandrvasilev.ru/ceremony",
  dateModified: new Date().toISOString(),
  lastReviewed: new Date().toISOString(),
  provider: {
    "@type": "Person",
    name: "Александр Васильев",
    url: "https://alexandrvasilev.ru/#about",
    description:
      "Ведущий нейротраблшутер и опытный проводник мухоморных церемоний с 8-летним стажем. Более 500 успешно проведенных ретритов. Специализируется на безопасных трансформационных практиках и глубинной работе с сознанием.",
    jobTitle: "Нейротраблшутер, сертифицированный проводник мухоморных ретритов",
    hasCredential: "8 лет опыта, более 500 проведенных церемоний",
    knowsAbout: ["Мухоморные практики", "Шаманизм", "Работа с сознанием", "Трансформационные техники"],
  },
  serviceType: "Трансформационный ретрит",
  areaServed: {
    "@type": "City",
    name: "Казань",
    containedInPlace: {
      "@type": "State", 
      name: "Республика Татарстан"
    }
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "55.7958",
    longitude: "49.1098"
  },
  offers: {
    "@type": "Offer",
    price: "300000",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: "https://alexandrvasilev.ru/ceremony#message",
    description:
      "Профессиональный мухоморный ретрит в Казани. Безопасная церемония с полным сопровождением опытного проводника. Индивидуальная дозировка, комфортные условия, гарантия безопасности.",
    priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 12)).toISOString().split('T')[0],
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
        "Сертифицированный проводник с 8-летним опытом; Более 500 успешных церемоний; Глубокая работа с подсознанием; Безопасный и эффективный формат; Полное сопровождение и интеграция; Индивидуальная дозировка с кинезиологической проверкой",
    },
    {
      "@type": "PropertyValue", 
      name: "Безопасность",
      value: "Профессиональное сопровождение, контролируемая среда, индивидуальный подход"
    },
    {
      "@type": "PropertyValue",
      name: "Локация", 
      value: "Загородная резиденция, Казань"
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
    worstRating: "1"
  },
  isBasedOn: {
    "@type": "CreativeWork",
    name: "Традиционные шаманские практики",
    description: "Древние техники работы с сознанием, адаптированные для современного человека"
  },
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title:
      "Мухоморные ретриты | Шаманизм, церемонии и работа с растениями-учителями",
    description:
      "Погрузитесь в мистические церемонии с мухомором под руководством шамана. Безопасные ретриты, глубокая трансформация, индивидуальный подход.",
    keywords:
      "мухомор, шаманизм, шаман, ретрит, растения учителя, мистика, трип репорт, бэд трип, микродозинг, психоделика, церемония, народная медицина, дух, душа, ритуалы, эзотерика, трансформация, консультация шамана, Казань",
    seoContent: "Церемониальные мухоморные погружения в Казани — аутентичные шаманские ритуалы с мухомором под ведением мастера Александра Васильева. Защищенная трансформация сознания, углубленное самопознание, исцеление травматических переживаний, раскрытие скрытого потенциала. Персонализированный подход, всестороннее ведение, свыше 500 завершенных церемоний, 8-летний практический стаж. Древние шаманские методы, взаимодействие с растениями-наставниками, интеграция полученного опыта, постретритная поддержка. Ключевые слова: церемониальный мухоморный ретрит Казань, шаманский мастер, ритуальная церемония, шаманские традиции, растения-наставники, трансформация сознания, духовное исцеление, шаманская консультация, защищенный ретрит, персональный подход, энергетические практики, травматерапия, духовное развитие, внутренняя гармония, опыт участников, шаманский проводник Казань.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text="Мухоморный ретрит в Казани"
        image={secondary_preview_10}
      />

      <div style={{ background: "var(--card-color)" }}>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Сегодня всё больше умных, сильных и уважаемых людей — тех, кто
            многое сделал и многого достиг — сталкиваются с ощущением внутренней
            пустоты.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухоморный ретрит — это возможность встретиться с самим собой
            настоящим, избавиться от ограничений и раскрыть свой истинный
            потенциал.
          </VisibilityManager>

          <VisibilityManager as="p">
            Здесь вы сможете наладить связь с Высшими Силами и понять своё
            предназначение.
          </VisibilityManager>

          <VisibilityManager as="p">
            Это шанс выйти за пределы старых программ и вернуть радость от
            жизни, ощутив себя на своём пути.
          </VisibilityManager>
        </div>
      </div>

      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Польза и результаты мухоморного ретрита
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Гармонизация эмоций
            </h3>
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
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Физическое восстановление
            </h3>
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
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Личностный рост и осознание предназначения
            </h3>
            <p className={contentStyles.textDescription}>
              Обретение ясности в мыслях и понимание своих истинных целей.
            </p>
            <p className={contentStyles.textDescription}>
              Улучшение качества жизни, отношений, карьеры.
            </p>
            <p className={contentStyles.textDescription}>
              Повышение личной эффективности и продуктивности.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Прокачка сексуальности
            </h3>
            <p className={contentStyles.textDescription}>
              Освобождение от внутренних блоков, стыда, травм.
            </p>
            <p className={contentStyles.textDescription}>
              Переосмысление отношения к своему телу и интимности.
            </p>
            <p className={contentStyles.textDescription}>
              Пробуждение естественной сексуальной энергии.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Глубинная связь с природой и Высшими Силами
            </h3>
            <p className={contentStyles.textDescription}>
              Единение с миром и понимание своего места во Вселенной.
            </p>
            <p className={contentStyles.textDescription}>
              Ощущение потока жизни, благодарности и осознанности.
            </p>
            <p className={contentStyles.textDescription}>
              Мистические переживания, способные изменить мировоззрение.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Исторические примеры использования Мухомора
          </VisibilityManager>

          <div className={contentStyles.imageContainer}>
            <Image
              src={ceremony_image_1}
              alt="Мухоморный ретрит в Казани"
              className={contentStyles.imageOverlay}
            />
            <div className={contentStyles.imageContent}>
              <VisibilityManager as="div" className={contentStyles.textBlock}>
                <h3 className={contentStyles.title_small}>
                  <span className={contentStyles.textSymbol}>//</span>
                  {"  "}
                  Шаманизм и древние традиции
                </h3>
                <p className={contentStyles.textDescription}>
                  В славянской культуре шаманы использовали Мухомор для общения
                  с духами, целительства и предсказаний, а охотники — для
                  повышения выносливости.
                </p>
              </VisibilityManager>
            </div>
          </div>

          <div className={contentStyles.imageContainer}>
            <Image
              src={ceremony_image_2}
              alt="Мухоморный ретрит в Казани"
              className={contentStyles.imageOverlay}
            />
            <div className={contentStyles.imageContent}>
              <VisibilityManager as="div" className={contentStyles.textBlock}>
                <h3 className={contentStyles.title_small}>
                  <span className={contentStyles.textSymbol}>//</span>
                  {"  "}
                  Воинская доблесть и обострение чувств
                </h3>
                <p className={contentStyles.textDescription}>
                  Викинги предположительно употребляли мухоморы, чтобы войти в
                  боевой раж и стать бесстрашными в сражении.
                </p>
              </VisibilityManager>
            </div>
          </div>

          <div className={contentStyles.imageContainer}>
            <Image
              src={ceremony_image_3}
              alt="Мухоморный ретрит в Казани"
              className={contentStyles.imageOverlay}
            />
            <div className={contentStyles.imageContent}>
              <VisibilityManager as="div" className={contentStyles.textBlock}>
                <h3 className={contentStyles.title_small}>
                  <span className={contentStyles.textSymbol}>//</span>
                  {"  "}
                  Духовные ритуалы индейцев
                </h3>
                <p className={contentStyles.textDescription}>
                  В ритуалах североамериканских индейцев мухоморы использовались
                  для очищения, улучшения самочувствия и получения видений.
                </p>
              </VisibilityManager>
            </div>
          </div>

          <div className={contentStyles.imageContainer}>
            <Image
              src={ceremony_image_4}
              alt="Мухоморный ретрит в Казани"
              className={contentStyles.imageOverlay}
            />
            <div className={contentStyles.imageContent}>
              <VisibilityManager as="div" className={contentStyles.textBlock}>
                <h3 className={contentStyles.title_small}>
                  <span className={contentStyles.textSymbol}>//</span>
                  {"  "}
                  Современные исследования
                </h3>
                <p className={contentStyles.textDescription}>
                  В западной науке изучается влияние Мухомора на психику и его
                  потенциал в терапии психических расстройств.
                </p>
              </VisibilityManager>
            </div>
          </div>
        </div>
      </LineAnimation>

      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Пример успешных людей, которые использовали шаманские практики для
            раскрытия своего потенциала
          </VisibilityManager>
          <VisibilityManager as="p">
            Множество выдающихся предпринимателей, достигших невероятных высот в
            различных областях, использовали шаманские ритуалы и духовные
            практики для расширения восприятия, глубокого самопознания и
            раскрытия своего истинного потенциала. Эти практики помогли им
            соединиться с Высшими Силами, получить вдохновение и ясность, а
            также направить свою энергию в творческое русло.
          </VisibilityManager>
          <PhotoGrid photos={teamMembers} />
          <VisibilityManager as="p">
            Эти люди понимают, что истинный успех начинается с гармонии внутри
            себя и взаимодействия с Высшими Силами.
          </VisibilityManager>
          <VisibilityManager as="p">
            Вы также можете раскрыть свой потенциал через мухоморный ретрит,
            который поможет вам войти в глубокую гармонию с собой, осознать своё
            предназначение и получить мощное Благословение от Высших Сил. Не
            упустите шанс стать частью этого пути и трансформировать свою жизнь.
          </VisibilityManager>
        </div>
      </LineAnimation>

      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Преимущества моего ретрита
          </VisibilityManager>

          <VisibilityManager as="p">
            Почему вам стоит выбрать именно этот путь?
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Назначен проводником непосредственно от самого Мухомора (пояснение)
            </h3>
            <p className={contentStyles.textDescription}>
              Этот путь был принят мною не из любопытства или моды. Когда мне
              было 17 лет, отец провёл обряд посвящения, передав древние знания.
              А в погружении на Мухоморе, мне было прямо указано проводить людей
              через этот опыт, помогая им восстановиться и найти путь к самим
              себе.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Глубокая работа с подсознанием
            </h3>
            <p className={contentStyles.textDescription}>
              Страх, волнение или сомнения перед ретритом? Это естественно. По
              необходимости, провожу предварительную работу с подсознанием,
              помогая устранить внутреннее напряжение, беспокойство и помогаю
              настроиться на взаимодействие с Мухомором.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Быстрый, но эффективный формат
            </h3>
            <p className={contentStyles.textDescription}>
              В отличие от большинства ретритных центров, где практика длится по
              3–4 дня, мой ретрит занимает не более суток. Вы получаете мощный
              трансформационный опыт, без необходимости выпадать из жизни на
              несколько дней.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Безопасность и грамотная интеграция
            </h3>
            <p className={contentStyles.textDescription}>
              Ретрит проходит в комфортном и защищённом месте. После церемонии,
              помогаю участникам осознать и правильно внедрить полученный опыт в
              повседневную жизнь.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Индивидуальная дозировка и перепроверка через кинезиологический тест
            </h3>
            <p className={contentStyles.textDescription}>
              Каждому участнику подбираю дозировку Мухомора, которую
              дополнительно проверяю через кинезиологический тест, исключая риск
              передозировки и даже минимальную вероятность случайного попадания
              в партию Бледной Поганки. Это позволяет обеспечивать безопасность
              на каждом этапе.
            </p>
          </VisibilityManager>
          <Final flyletters={false} animation customStyles={{ padding: "0" }}>
            <div
              className={finalStyles.price}
              style={{ marginTop: "0", textTransform: "uppercase" }}
            >
              {" "}
              Сделай героический шаг!{" "}
            </div>
            <Button
              className={contentStyles.message}
              href={{ hash: "#message" }}
              status="Записаться"
            />
          </Final>
        </div>
      </LineAnimation>
      <VideoWidget videos={videos} />

      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как проходит мухоморный ретрит?
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Подготовка
            </h3>
            <p className={contentStyles.textDescription}>
              Вы получаете рекомендации по диете и грамотную настройку на
              погружение. Это позволяет сделать церемонию более осмысленной,
              безопасной и продуктивной.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Священная церемония
            </h3>
            <p className={contentStyles.textDescription}>
              Подбирается индивидуальная дозировка.
            </p>
            <p className={contentStyles.textDescription}>
              Мухомор употребляется в виде сомы, с добавлением других
              Растений-Учителей, разрешённых в РФ.
            </p>
            <p className={contentStyles.textDescription}>
              Проводятся очистительные и исцеляющие ритуалы, полученные мною от
              Высших Сил.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Интеграция опыта
            </h3>
            <p className={contentStyles.textDescription}>
              После ретрита, помогу вам осознать смысл полученного опыта, дать
              ему верное применение в жизни и закрепить трансформацию.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Риски и меры предосторожности
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Токсичность и побочные эффекты
            </h3>
            <p className={contentStyles.textDescription}>
              Мухомор содержит активные вещества, которые могут вызвать тошноту,
              головокружение и даже отравление при неправильном употреблении.
              Самостоятельное использование без опыта и знаний может быть
              опасным.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Риск десоциализации
            </h3>
            <p className={contentStyles.textDescription}>
              Глубокие переживания требуют осознанной интеграции. Без поддержки
              проводника можно потерять связь с реальностью или столкнуться с
              внутренними конфликтами.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Юридические аспекты
            </h3>
            <p className={contentStyles.textDescription}>
              В России Мухомор не запрещён и его использование абсолютно
              легально.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Заключение
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — это Величайший источник трансформации на уровне духа,
            эмоций и тела.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор помогает человеку раскрыться максимально, отбросить всё
            лишнее и прийти к счастливой благодатной жизни и изобилию.
          </VisibilityManager>

          <VisibilityManager as="p">
            После погружения, человек испытывает «самые приятные ощущения в
            жизни» - прямая цитата одного из участников.
          </VisibilityManager>

          <VisibilityManager as="p">
            При этом, неграмотное взаимодействие с Мухомором сопряжено с
            серьёзными рисками.
          </VisibilityManager>

          <VisibilityManager as="p">
            Успешный опыт зависит от правильной подготовки, дозировки и
            поддержки опытного проводника.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы рассматриваете участие в мухоморном ретрите, важно тщательно
            изучить все отзывы, проконсультироваться с проводником и учитывать
            свои индивидуальные особенности.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — это великий учитель и целитель, но он требует уважения и
            мудрости. Если вы готовы пройти этот путь, я буду вашим проводником.
            Будьте честны с собой и проявляйте уважение. Мухомор дарует вам
            силу.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы чувствуете, что пришло время изменений, и готовы довериться
            процессу, я проведу вас через этот опыт.
          </VisibilityManager>

          <div style={{ height: "1px" }} />

          <Final animation flyletters={false} customStyles={{ padding: "0" }}>
            <h2 className={finalStyles.title} style={{ marginTop: "0" }}>
              Стоимость церемонии
            </h2>
            <div className={finalStyles.price}>300 000 ₽</div>
            <Button
              className={contentStyles.message}
              href={{ hash: "#message" }}
              status="Записаться"
            />
          </Final>
        </div>
      </LineAnimation>

      <Questions questionsContent={questionsContent} />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Мухоморный ретрит в Казани (Страница: Церемония)"
        title={"Приглашаю вас на мухоморный ретрит в Казани"}
        description={`
          Если вы чувствуете готовность к глубокой трансформации, я помогу вам безопасно пройти этот путь.

          Свяжитесь со мной, чтобы узнать больше или записаться на консультацию. Ваше путешествие начинается здесь.
        `}
      />
    </Layout>
  );
}
