import Layout from "../components/Layout/Layout";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Warranty } from "../components/Warranty/Warranty";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Suggest } from "../components/Suggests/Suggests";
import { Helping } from "../components/Helping/Helping";
import { Products } from "../components/Products/Products";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import secondary_preview_7 from "../images/secondary_preview_7.webp";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { Questions } from "../components/Questions/Questions";
import { Final } from "../components/Final/Final";
import { Form } from "../components/Form/Form";
import { products as neurotroubleshuttingProducts } from "../consts/products";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import finalStyles from "../styles/finalContent.module.css";
import LinkButton from "../components/shared/LinkButton/LinkButton";
import { Button } from "../components/shared/Button/Button";

export const questionsContent = {
  blocks: [
    {
      title: "Как это отличается от всего того, что я до этого видел?",
      answer: `Нейротраблшутинг – это абсолютно новое направление, которое безопасно и быстро обеспечивает ощутимый результат. 
          
      Зачастую, достаточно всего одной сессии, чтобы вы стали лучшей версией себя. 
         
      При этом, а вам не нужно рассказывать о своём прошлом, то есть сохраняется приватность. 
          В случае отсутствия результата, я возвращаю вам 100% денег.`,
    },
    {
      title: "Что это мне даст?",
      answer: `Вы получаете гарантированное решение вашего вопроса, будь он связан со здоровьем, деньгами или отношениями.`,
    },
    {
      title: "Как я узнаю, что это не обман?",
      answer: `Посмотрите отзывы моих заказчиков и убедитесь сами в реальности результатов моих проработок.`,
    },
    {
      title: "Что меня останавливает?",
      answer: `Страх, что при оплате моих услуг вы не получите результат. Как я уже сказал, в таком случае, я делаю 100% возврат денег.`,
    },
    {
      title: "Кто или что является причиной моих проблем?",
      answer: `Большинство людей живёт плохо – факт. Учителя, родители, общество – никто не учил нас жить красиво, строить гармоничные отношения, грамотно следить за здоровьем и зарабатывать деньги. Чаще всего они сами ничего из этого не умеют. 

Я помогу вам исправить их ошибки так, чтобы ваша жизнь изменилась к лучшему.`,
    },
    {
      title: "Почему именно сейчас?",
      answer: `Потому что, не сделав работу над ошибками, вы будете находиться в петле, которая будет постоянно вас возвращать в исходную точку. 
      
      Наверняка вы наблюдали, как одна и та же негативная ситуация повторяется вновь и вновь, что бы вы не делали. 
      
      Это именно то, что я и помогу убрать при помощи нейротраблшутинга.`,
    },
    {
      title: "Почему я должен тебе доверять?",
      answer: `Никто не просит вас доверять. Просто проверьте и убедитесь в этом сами, без каких-либо рисков для себя.`,
    },
    {
      title: "Как оно работает?",
      answer: `Мы с вами созваниваемся. При помощи определенных техник я ввожу вас в альфа-ритм, где мы получаем доступ к вашему подсознанию, которое я очищаю и высвобождаю от старых негативных программ.

На выходе вы чувствуете себя отдохнувшим и довольным, фактически становясь другим человеком.`,
    },
    {
      title: "Как начать?",
      answer: `Запишитесь на бесплатную консультацию. Далее, я свяжусь с вами для проведения короткого интервью. Если мы с вами находим общий контакт, и нас всё устраивает, обсуждаем дальнейшие шаги и начинаем работу.`,
    },
    {
      title: "Что я потеряю, если откажусь?",
      answer: `Вы взрослый человек, и как вам проживать свою жизнь решать только вам. Я не знаю, что вы потеряете если откажетесь, но если согласитесь, точно ничего не потеряете.`,
    },
  ],
};

const videos = [
  // New videos added on March 2024
  {
    link: "https://vk.com/video_ext.php?oid=643721177&id=456239018&hash=21090df415acc25b",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8427497392857&idx=5&type=39&tkn=GlEU4u6PxO4ufRM8uL06LGlpeHc&fn=vid_x",
    name: "Отзыв Алексея о проработке",
    uploadDate: new Date("June 11, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239034&hash=0035901b2a8621d8",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7836443740675&idx=9&type=39&tkn=lrWBd6X8RCZrONsyuINlb_MXcCA&fn=vid_u",
    name: "Отзыв Александры о проработке",
    uploadDate: new Date("April 09, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239033&hash=943c42d877b77217",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8081892903674&idx=4&type=39&tkn=DVITmcvAa4N91syX1BBqeNibyic&fn=vid_u",
    name: "Отзыв Виктории о проработке",
    uploadDate: new Date("April 09, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239192&hash=fc6f543804a18fff",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7895760833071&idx=2&type=39&tkn=M56cNKVKS2eNz_YBO5he2T9jdWM&fn=vid_l",
    name: 'Отзыв Булата Рустамовича о проработках с Александром "Интегралом" Васильевым',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239188&hash=8a160ed8a99c6834",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673156733487&idx=13&type=39&tkn=Q8JRpXn2Vz83D9N5E57aw5QCUIQ&fn=vid_x",
    name: 'Отзыв Александра Дворянинова о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239186&hash=04dd114246320d37",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673155488303&idx=8&type=39&tkn=o9JorSfWjRpqk_VYHE3jw9nU0_I&fn=vid_x",
    name: 'Отзыв Дмитрия Афанасьева о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239203&hash=715fb2a11dbae2a6",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673156012591&idx=6&type=39&tkn=m9S6n3h5E9xZhBraLacW2jnP_Tg&fn=vid_x",
    name: 'Отзыв Сергея Хана о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239185&hash=d1b034b0ccc2b6d2",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673149262383&idx=9&type=39&tkn=EfhvQoeYxbOiNWqNgax2vu0la4M&fn=vid_x",
    name: 'Отзыв Кирилла Бобкова о работе Александра "Интеграла" Васильева',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239190&hash=a23c38103b4eb288",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673158765103&idx=15&type=39&tkn=HG3N2h6DiDmo9jGfOjBZWO-jRn8&fn=vid_x",
    name: 'Отзыв Никиты Цыпленкова о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239189&hash=3f37fe408dafc519",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673158044207&idx=11&type=39&tkn=tyaKcHE9DvZStOsL9Uf6fwCYgXs&fn=vid_x",
    name: 'Отзыв Ксении о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Нейротраблшутинг - профессиональная работа с подсознанием",
  description:
    "Революционный метод устранения психологических блоков и травм через работу с подсознанием. Быстрое и эффективное решение проблем: тревожность, депрессия, фобии, психосоматика, панические атаки. Результат за 4-8 сессий с гарантией возврата денег.",
  url: "https://alexandrvasilev.ru/neurotroubleshutting",
  dateModified: new Date().toISOString(),
  lastReviewed: new Date().toISOString(),
  provider: {
    "@type": "Person",
    name: "Александр Васильев",
    url: "https://alexandrvasilev.ru/#about",
    description: "Ведущий нейротраблшутер России с 8-летним опытом. Автор революционных методик работы с подсознанием. Более 1000 успешно решенных случаев различной сложности.",
    jobTitle: "Нейротраблшутер, эксперт по работе с подсознанием",
    hasCredential: "8 лет практики, более 1000 успешных случаев",
    knowsAbout: ["Нейротраблшутинг", "Гипнотерапия", "НЛП", "Работа с подсознанием", "Психосоматика"],
  },
  serviceType: "Нейротраблшутинг",
  offers: [
    {
      "@type": "Offer",
      name: "Бесплатная диагностическая консультация",
      price: "0",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: "https://alexandrvasilev.ru/neurotroubleshutting#message",
      description:
        "Бесплатная диагностика для выявления корневых причин проблем. Определение стратегии работы и прогноза результатов.",
      validFrom: new Date().toISOString(),
    },
    {
      "@type": "Offer",
      name: "Курс нейротраблшутинга",
      price: "125000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      description: "Полный курс нейротраблшутинга с гарантией результата или возврат 100% денег",
      additionalProperty: {
        "@type": "PropertyValue",
        name: "Гарантия",
        value: "100% возврат денег при отсутствии результата"
      }
    }
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "55.7558",
      longitude: "37.6173",
    },
    geoRadius: "10000000",
  },
  keywords:
    "нейротраблшутинг Казань, работа с подсознанием, устранение фобий, лечение депрессии, избавление от тревожности, психосоматика, панические атаки, гипнотерапия, НЛП, психологическая помощь, травмы детства, ограничивающие убеждения",
  temporalCoverage: "2020/..",
  audience: {
    "@type": "Audience",
    audienceType: "Люди с психологическими проблемами, депрессией, тревожностью, фобиями"
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://alexandrvasilev.ru/neurotroubleshutting#message",
    },
    result: {
      "@type": "Reservation",
      name: "Запись на бесплатную консультацию",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги нейротраблшутинга",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Проработка страхов и фобий",
          description:
            "Устранение глубинных страхов и фобий, заложенных в детстве или до рождения",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Работа с психосоматикой",
          description:
            "Решение психосоматических реакций, включая аллергии и панические атаки",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Коррекция ограничивающих убеждений",
          description:
            "Устранение негативных установок, мешающих достижению целей",
        },
      },
    ],
  },
  serviceOutput: {
    "@type": "Thing",
    name: "Результаты нейротраблшутинга",
    description:
      "Свобода от ограничений, гармония с собой и миром, энергия для достижения целей",
  },
  serviceAudience: {
    "@type": "Audience",
    audienceType:
      "Люди, страдающие от тревожности, депрессии, фобий и психосоматических расстройств",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Александра",
      },
      datePublished: "2025-04-09",
      reviewBody: "Отзыв о проработке с Александром Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Виктория",
      },
      datePublished: "2025-04-09",
      reviewBody: "Отзыв о проработке с Александром Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Булат Рустамович",
      },
      datePublished: "2025-03-13",
      reviewBody: "Отзыв о проработках с Александром 'Интегралом' Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Андрей",
      },
      datePublished: "2025-03-13",
      reviewBody: "Отзыв о работе с Александром 'Интегралом' Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Тина",
      },
      datePublished: "2024-11-14",
      reviewBody: "Отзыв о проработке с Александром 'Интегралом' Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Александр Дворянинов",
      },
      datePublished: "2024-11-30",
      reviewBody: "Отзыв о работе с Александром 'Интегралом' Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Дмитрий Афанасьев",
      },
      datePublished: "2024-11-30",
      reviewBody: "Отзыв о работе с Александром 'Интегралом' Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Сергей Хан",
      },
      datePublished: "2024-11-30",
      reviewBody: "Отзыв о работе с Александром 'Интегралом' Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Кирилл Бобков",
      },
      datePublished: "2024-11-30",
      reviewBody: "Отзыв о работе Александра 'Интеграла' Васильева",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Никита Цыпленков",
      },
      datePublished: "2024-11-30",
      reviewBody: "Отзыв о работе с Александром 'Интегралом' Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Ксения",
      },
      datePublished: "2024-11-30",
      reviewBody: "Отзыв о работе с Александром 'Интегралом' Васильевым",
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "Нейротраблшутинг",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1000+",
    bestRating: "5",
    worstRating: "1",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Успешность",
      value: "Более 1000 успешно решенных случаев за 8 лет практики"
    },
    {
      "@type": "PropertyValue", 
      name: "Методы работы",
      value: "Работа с подсознанием в альфа-ритме, кинезиология, авторские техники"
    },
    {
      "@type": "PropertyValue",
      name: "Специализация",
      value: "Фобии, депрессия, тревожность, психосоматика, травмы, ограничивающие убеждения"
    }
  ],
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Нейротраблшутинг | Устранение тревоги, депрессии и психосоматики",
    description:
      "Проработка подсознательных блоков: тревожность, депрессия, фобии, психосоматика.",
    keywords:
      "нейротраблшутинг, гипнотерапия, гипнотерапевт, НЛП, психосоматика, депрессия, тревожность, проработка страхов, экзорцизм, психология, гипноз, подсознательные блоки",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text={"Нейротраблшутинг"}
        subtext={
          "Ваш ключ к жизни без страхов, ограничений и внутренних конфликтов"
        }
        image={secondary_preview_7}
      />
      <div style={{ background: "var(--card-color)" }}>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Устали годами бороться с проблемами, которые возвращаются снова и
            снова?
          </VisibilityManager>

          <VisibilityManager as="p">
            Психологи, медитации, врачи — вы уже пробовали всё. Но что, если
            решение кроется не в разговорах или таблетках, а в глубинах вашего
            подсознания?
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_middle}>
              НЕЙРОТРАБЛШУТИНГ — ЭТО МЕТОД, КОТОРЫЙ:
            </h3>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Помогает найти и устранить корень проблем — от фобий до аллергии,
              от ночных кошмаров до хронической усталости.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Работает быстро: результат за 4-8 сессий. Не годы терапии, а фокус
              на решении.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Позволяет сохранить приватность: мы не разбираем ваше прошлое — мы
              меняем его влияние на вас здесь и сейчас.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_middle}>КАК ЭТО РАБОТАЕТ</h3>
            <p className={contentStyles.textDescription}>
              Сначала проводим бесплатную диагностику, на которой выявляем, где
              именно в подсознании прячется решение вашей задачи, а вы сами
              принимаете решение, идти дальше или нет.
            </p>
            <p className={contentStyles.textDescription}>
              Работа идёт в состоянии, когда сознание остаётся
              активным, но доступ к подсознанию открыт. Это полностью осознанный
              и безопасный процесс, в котором вы сами видите скрытые
              причинно-следственные связи.
            </p>
            <hr />
            <hr />
            <p className={contentStyles.textDescription}>
              В ходе дальнейшей работы, мы вместе:
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              выходим к корневому эпизоду (чаще всего детскому или
              вытесненному);
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «размораживаем» застрявшие эмоции и блоки;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              переписываем внутреннюю структуру восприятия;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              закрепляем результат на уровне ощущений, решений и действий.
            </p>
            <hr />
            <hr />
            <p className={contentStyles.textDescription}>
              Эффект вы чувствуете сразу. Меняется состояние, уходят внутренние
              зажимы, возвращается ясность, вы получаете желаемый результат
              быстро и комфортно, максимум за 9 сессий.
            </p>
          </VisibilityManager>
          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_middle}>Ваш результат</h3>

            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Свобода от того, что годами держало вас в клетке.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гармония с собой и миром.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Энергия двигаться к целям без страха и сомнений.
            </p>
          </VisibilityManager>
        </div>
      </div>
      <Suggest />
      <Helping 
        title="Я помогу"
        titleEmpty=", если вы"
        blocks={[
          {
            id: 1,
            className: "item2",
            title: "Мечтаете о большем",
            desc: "Я могу помочь вам легко преодолеть внутренние барьеры и быстрее добиться желанных результатов.",
          },
          {
            id: 2,
            className: "item5",
            title: "Желаете наслаждаться отношениями",
            desc: "Хотите создать гармоничные и глубокие связи? Я решаю такие задачи, с доведением до результата.",
          },
          {
            id: 3,
            className: "item4",
            title: "Хотели бы позаботиться о своём здоровье",
            desc: "Известно, что большинство проблем со здоровьем «идут от головы», нейротраблшутинг даёт возможность устранять причины таких проблем.",
          },
          {
            id: 4,
            className: "item3",
            title: "Цените своё время",
            desc: "Вам нужен результат сейчас. Безопасно и эффективно, а главное - сразу. Я предлагаю вам практический мгновенный результат.",
          },
        ]}
      />
      <Warranty
        title="Я уверен "
        titleEmpty="в своей методике на 100%"
        description="Если после работы со мной, вы не почувствуете улучшения, я верну вам все деньги. Моя цель – сделать так, чтобы вы были довольны и рекомендовали меня своим близким."
      />

      <Final animation flyletters={false}>
        <h2 className={finalStyles.title} style={{ marginTop: "0" }}>
          Стоимость при достижении результата
        </h2>
        <div className={finalStyles.price}>125 000 ₽</div>
        <div className={finalStyles.description}>
          Возврат 100% денег при отсутствии эффекта
        </div>
        <Button
          className={contentStyles.message}
          href={{ pathname: "/neurotroubleshutting", hash: "#message" }}
          status="Записаться"
        />
      </Final>

      <AnimatedLine />
      <VideoWidget videos={videos} />
      <Final animation flyletters={false}>
        <h2 className={finalStyles.title} style={{ marginTop: "0" }}>
          Запишитесь на бесплатную консультацию
        </h2>
        <p className={finalStyles.description}>
          Узнайте причины своих проблем, способы их решения и возможные преграды
          на вашем пути к успеху!
        </p>
        <LinkButton href="/neurotroubleshutting#message">
          <span>Записаться</span>
        </LinkButton>
      </Final>
      <Products products={neurotroubleshuttingProducts} />
      <Questions questionsContent={questionsContent} />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        // title={"ГОТОВЫ ОТКРЫТЬ ДЛЯ СЕБЯ НОВЫЕ ГОРИЗОНТЫ?"}
        type="Первая консультация (Страница: Нейротраблшутинг)"
        // description={`Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время.

        //   Первая консультация — бесплатно. 
          
        //   Подготовьте вопрос, который вас действительно беспокоит, и я помогу вам разобраться, раскрыть возможные причины и предложу решение. 
          
        //   На основе этого вы сможете понять, стоит ли продолжить работу со мной для достижения значимых изменений в вашей жизни.
        // `}
      />
    </Layout>
  );
}
