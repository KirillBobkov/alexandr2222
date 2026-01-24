import Layout from "../components/Layout/Layout";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import secondary_preview_7 from "../images/secondary_preview_7.webp";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { Form } from "../components/Form/Form";
import { InnerSatisfaction } from "../components/InnerSatisfaction";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { CirclesList } from "../components/CirclesList/CirclesList";
import { InnerQuestions } from "../components/InnerQuestions";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";

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
  {
    link: "https://vkvideo.ru/video_ext.php?oid=643721177&id=456239020&hash=6432ae2c703424ae",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8588980652761&idx=4&type=39&tkn=FOeAFn0t4WgZzuJoTeg9xs9_FKM&fn=vid_x",
    name: "Отзыв Алексея о проработке по избавлению от кандидоза",
    uploadDate: new Date("July 19, 2025").toISOString(),
  },
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
      "https://i.mycdn.me/getVideoPreview?id=7888258468546&idx=13&type=39&tkn=-p1NeEtLfKt8cuzsyS9VmzPXDNI&fn=vid_u",
    name: 'Отзыв Александра Дворянинова о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  // {
  //   link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239186&hash=04dd114246320d37",
  //   thumbnailUrl:
  //     "https://i.mycdn.me/getVideoPreview?id=7673155488303&idx=8&type=39&tkn=o9JorSfWjRpqk_VYHE3jw9nU0_I&fn=vid_x",
  //   name: 'Отзыв Дмитрия Афанасьева о работе с Александром "Интегралом" Васильевым',
  //   uploadDate: new Date("November 30, 2024").toISOString(),
  // },
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
name: "Нейротраблшутинг — комплексное устранение тревожности, депрессивных состояний, фобий и психосоматики",
  description:
    "Нейротраблшутинг — профессиональная трансформация для полного устранения тревожных расстройств, депрессивных состояний, фобических проявлений, психосоматических заболеваний, панических атак и глубинных психологических блоков. Быстрый и гарантированный результат за 4-8 терапевтических сессий. Уже свыше 100 успешно завершенных случаев различной сложности, индивидуально разработанный подход, глубинная перестройка подсознательных механизмов. Бесплатная первичная диагностика, профессиональная консультация, уникальные авторские методики. Казань, Россия и онлайн по всей стране.",
  url: "https://alexandrvasilev.ru/neurotroubleshutting",
  dateModified: new Date().toISOString(),
  lastReviewed: new Date().toISOString(),
  provider: {
    "@type": "Person",
    name: "Александр Васильев",
    url: "https://alexandrvasilev.ru/#about",
    description:
      "Нейротраблшутер. Специалист по работе с подсознанием. Более 100 успешно решенных случаев различной сложности.",
    jobTitle: "Нейротраблшутер, эксперт по работе с подсознанием",
    hasCredential: "Специалист по работе с подсознанием",
    knowsAbout: [
      "Нейротраблшутинг",
      "Гипнотерапия",
      "НЛП",
      "Работа с подсознанием",
      "Психосоматика",
    ],
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
      description:
        "Полный курс нейротраблшутинга с гарантией результата или возврат 100% денег",
      additionalProperty: {
        "@type": "PropertyValue",
        name: "Гарантия",
        value: "100% возврат денег при отсутствии результата",
      },
    },
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
    audienceType:
      "Люди с психологическими проблемами, депрессией, тревожностью, фобиями",
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
      value: "Более 200 успешно решенных случаев за последний год",
    },
    {
      "@type": "PropertyValue",
      name: "Методы работы",
      value:
        "Работа с подсознанием в альфа-ритме, кинезиология, авторские техники",
    },
    {
      "@type": "PropertyValue",
      name: "Специализация",
      value:
        "Фобии, депрессия, тревожность, психосоматика, травмы, ограничивающие убеждения",
    },
  ],
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Нейротраблшутинг | Устранение тревоги, депрессии и психосоматики",
    description:
      "Комплекс по устранению тревожности, депрессии, фобий, психосоматики и внутренних блоков через работу с подсознанием. Гарантированный результат.",
    keywords:
      "нейротраблшутинг, гипнотерапия, гипнотерапевт, НЛП, психосоматика, депрессия, тревожность, проработка страхов, экзорцизм, психология, гипноз, подсознательные блоки",
    seoContent:
      "Нейротраблшутинг — современная методика устранения тревоги, депрессии, фобий, психосоматических реакций, панических эпизодов и подсознательных ограничений. Глубинная работа с подсознанием, персональный подход, быстрые изменения за 4–8 сессий. Бесплатная первичная диагностика, консультация и авторские технологии, безопасная трансформация. Ключевые слова: нейротраблшутинг Казань, устранение тревожности, депрессивных состояний, фобий, психосоматики, гипнотерапевтические методы, терапия подсознания, избавление от страхов, персональные сессии, быстрый и гарантированный эффект, консультация нейротраблшутера.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text={"Нейротраблшутинг"}
        subtext={"ЧТОБЫ ПОМЕНЯТЬ РЕАЛЬНОСТЬ — НУЖНО ИЗМЕНИТЬ МЫШЛЕНИЕ "}
        image={secondary_preview_7}
      />
      <InnerSatisfaction
        animation={false}
        titleSuffix="Методика"
        order={2}
        description={
          <>
            В своей практике я делаю ставку на самодостаточность человека, а не
            на его зависимость от консультаций, как это делают психологи.
            <br />
            <br />
            Сначала проводим бесплатную диагностику, на которой выявляем, где
            именно в подсознании прячется решение вашей задачи, а вы сами
            определяете, идти дальше или нет.
            <br />
            <br />
            Работа идёт в состоянии, когда сознание остаётся активным, но доступ
            к подсознанию открыт. Это полностью осознанный и безопасный процесс,
            в котором вы сами видите скрытые причинно-следственные связи.
            <br />
            <br />
            В ходе дальнейшей работы, мы вместе: <br />
            <br />
            <b style={{ color: "var(--accent)" }}>●</b> выходим к корневому
            эпизоду (чаще всего детскому или вытесненному);
            <br />
            <br />
            <b style={{ color: "var(--accent)" }}>●</b> переписываем внутреннюю
            структуру восприятия;
            <br />
            <br />
            <b style={{ color: "var(--accent)" }}>●</b> закрепляем результат на
            уровне ощущений, решений и действий.
            <br />
            <br />
            Эффект вы чувствуете сразу. Улучшается состояние, уходят внутренние
            зажимы, возвращается ясность, налаживается ваш контакт с самим
            собой.
          </>
        }
      />
      <AboutMe
        {...{
          title: "В ЧЁМ ",
          titleEmpty: "Я МОГУ ВАМ ПОМОЧЬ?",
          order: 2,
          items: [
            { title: "Физические недуги" },
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
      <VideoWidget videos={videos} />
      <InnerQuestions
        title="ЕСЛИ ВАШ"
        subtitle="ВНУТРЕННИЙ ГОЛОС ВСЁ ЧАЩЕ ЗАДАЁТ ВОПРОСЫ"
        questions={[
          "Почему у других получается, а у меня нет?",
          "Тем ли делом я занимаюсь?",
          "Почему я постоянно разочаровываюсь в людях?",
          "Сколько будут длиться эти страдания?",
          "Из-за чего то, что должно вызывать радость в жизни, становится обузой?",
          "Неужели жизнь действительно не имеет смысла?",
          "Отчего я постоянно хочу уйти из жизни?",
        ]}
        description={
          <>
            Это говорит о том, что пришло время основательно разобраться в самом
            себе. Не в образе себя, не в роли, а именно в подлинной сути.
            <br />
            <br />
            Спокойно, без суеты, устранить психотравмы, которые тяжёлым грузом
            тянут вас вниз, и, в первую очередь, наладить контакт с самим собой,
            а потом уже со всеми окружающими.
          </>
        }
      />
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
      <AnimatedLine />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ"}
        type="Первая консультация (Страница: Нейротраблшутинг)"
      />
    </Layout>
  );
}
