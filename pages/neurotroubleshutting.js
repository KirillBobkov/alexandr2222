import Layout from "../components/Layout/Layout";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import enter_hole_2 from "../images/enter_hole_2.webp";
import point from "../images/point_2.webp";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { Form } from "../components/Form/Form";
import { InnerSatisfaction } from "../components/InnerSatisfaction";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { CirclesList } from "../components/CirclesList/CirclesList";
import { InnerQuestions } from "../components/InnerQuestions";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import {
  Collapsible,
  CollapsibleSection,
} from "../components/Collapsible/Collapsible";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";

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
    link: "https://vk.com/video_ext.php?oid=643721177&id=456239018&hash=21090df415acc25b",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8427497392857&idx=5&type=39&tkn=GlEU4u6PxO4ufRM8uL06LGlpeHc&fn=vid_x",
    name: "Отзыв Алексея о проработке",
    uploadDate: new Date("June 11, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239192&hash=fc6f543804a18fff",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7895760833071&idx=2&type=39&tkn=M56cNKVKS2eNz_YBO5he2T9jdWM&fn=vid_l",
    name: 'Отзыв Булата Рустамовича о проработках с Александром "Интегралом" Васильевым',
    uploadDate: new Date("March 13, 2025").toISOString(),
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
    link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239034&hash=0035901b2a8621d8",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7836443740675&idx=9&type=39&tkn=lrWBd6X8RCZrONsyuINlb_MXcCA&fn=vid_u",
    name: "Отзыв Александры о проработке",
    uploadDate: new Date("April 09, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=643721177&id=456239020&hash=6432ae2c703424ae",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8588980652761&idx=4&type=39&tkn=FOeAFn0t4WgZzuJoTeg9xs9_FKM&fn=vid_x",
    name: "Отзыв Алексея о проработке по избавлению от кандидоза",
    uploadDate: new Date("July 19, 2025").toISOString(),
  },

  {
    link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239033&hash=943c42d877b77217",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8081892903674&idx=4&type=39&tkn=DVITmcvAa4N91syX1BBqeNibyic&fn=vid_u",
    name: "Отзыв Виктории о проработке",
    uploadDate: new Date("April 09, 2025").toISOString(),
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
        image={enter_hole_2}
        animated={false}
      />
      <div className={containerStyles.container}>
        <Collapsible title="Описание" defaultOpen={false}>
          <div
             className={contentStyles.collapsible}
          >
            <p className={contentStyles.textDescription}>
              Даже при высокой внутренней устойчивости человек может
              сталкиваться с переживаниями, которые не поддаются рациональному
              контролю.
            </p>
            <p className={contentStyles.textDescription}>
              Это может быть связано с тем, что эмоциональный отклик
              зафиксирован на уровне нервной системы и является частью
              автоматического реагирования.
            </p>
            <p className={contentStyles.textDescription}>
              Источниками такой фиксации могут быть психотравмы, особенности
              раннего развития (даже в утробе матери), а также
              наследственность.{" "}
            </p>

            <p className={contentStyles.textDescription}>
              Формируется устойчивый паттерн, который воспроизводится независимо
              от текущих жизненных обстоятельств.
            </p>
            <p className={contentStyles.textDescription}>
              Нейротраблшутинг направлен на точечную коррекцию таких паттернов.
            </p>
            <p className={contentStyles.textDescription}>
              В ходе сессии мы находим, где именно закрепилась эта реакция, и
              аккуратно её перенастраиваем под ваш запрос.
            </p>
            <p className={contentStyles.textDescription}>
              В ситуациях, которые раньше автоматически запускали прежнюю
              программу, начинает проявляться выбранное вами состояние. Новый
              отклик становится естественным.
            </p>
            <p className={contentStyles.textDescription}>
              Вы возвращаете себе контроль.
            </p>
          </div>
        </Collapsible>

        <Collapsible title="Запросы" defaultOpen={false}>
          <div
             className={contentStyles.collapsible}
          >
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Эмоциональное выгорание
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Внутреннее напряжение
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Раздражительность
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Неуверенность
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Отчаяние
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Ревность
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Тревога
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Зависть
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Апатия
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Фобии
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Обида
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Страх
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Вина
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Стыд
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Гнев
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Боль
            </p>
            <p className={contentStyles.textDescription}>
              <img
                src={point.src}
                alt=""
                className={contentStyles.textSymbol}
              />
              Последствия шока
            </p>
          </div>
        </Collapsible>

        <Collapsible title="Преимущества" defaultOpen={false}>
          <CollapsibleSection title="Безопасность">
            <p className={contentStyles.textDescription}>
              Работа проходит в полностью осознанном состоянии, вы сохраняете
              контроль над процессом.
            </p>

            <p className={contentStyles.textDescription}>
              Вы самостоятельно определяете, к какому состоянию хотите прийти,
              без навязывания с моей стороны.
            </p>

            <p className={contentStyles.textDescription}>
              Воздействие носит точечный характер: корректируется конкретная
              реакция, а не личность в целом.
            </p>

            <p className={contentStyles.textDescription}>
              Глубина работы соотносится с текущим ресурсом психики, без
              перегрузки и давления. Формат выстраивается индивидуально.
            </p>

            <p className={contentStyles.textDescription}>
              Сессия завершается устойчивым состоянием. В отдельных случаях при
              разрешении глубинного конфликта возможны кратковременные
              адаптационные реакции. Если это происходит, я остаюсь на связи и
              спокойно сопровождаю процесс, поясняя всё, что вызывает вопросы.
            </p>

            <p className={contentStyles.textDescription}>
              В ряде случаев вместе с неприятными эмоциями ослабевают и
              психосоматические проявления.
            </p>

            <p className={contentStyles.textDescription}>
              Во время сессии могут возникать инсайты, которые помогают глубже
              понять происходящее и улучшить качество жизни.
            </p>

            <p className={contentStyles.textDescription}>
              Сеанс проходит онлайн, в привычной для вас среде.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Эффективность">
            <p className={contentStyles.textDescription}>
              Результат измерим: интенсивность переживания оценивается по
              10-балльной шкале до и после перепрошивки. Работу завершаем при
              нулевой выраженности неприятной эмоции.
            </p>

            <p className={contentStyles.textDescription}>
              Процесс длится в среднем около полутора часов. За это время
              удаётся решить то, что могло бы оставаться нерешённым годами.
            </p>

            <p className={contentStyles.textDescription}>
              Часто одного сеанса оказывается достаточно.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Гарантия">
            <p className={contentStyles.textDescription}>
              Если результат не достигнут, оплата возвращается полностью.
            </p>
          </CollapsibleSection>

          <CollapsibleSection title="Конфиденциальность">
            <p className={contentStyles.textDescription}>
              Вам не нужно делиться личными подробностями. Работаем напрямую с
              внутренним состоянием.
            </p>
          </CollapsibleSection>
        </Collapsible>
      </div>

      <VideoWidget videos={videos} />

      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Первая консультация (Страница: Нейротраблшутинг)"
      />
    </Layout>
  );
}
