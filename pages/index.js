import Layout from "../components/Layout/Layout";
import { Bio } from "../components/Bio/Bio";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Preview } from "../components/Preview/Preview";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Final } from "../components/Final/Final";
import { Products } from "../components/Products/Products";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { CirclesList } from "../components/CirclesList/CirclesList";
import enter_hole_1 from "../images/enter_hole_1.webp";
import enter_hole_2 from "../images/enter_hole_2.webp";
import logo from "../images/logo.webp";
import { products as neurotroubleshuttingProducts } from "../consts/products";

const schemaOrg = `
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Александр \"Интеграл\" Васильев — Нейротраблшуттер",
  "description": "Благословенный портал мечты, созданный для помощи людям в преодолении сложностей, улучшении жизни и устранении страданий с использованием различных методик.",
  "url": "https://alexandrvasilev.ru",
  "inLanguage": "ru",
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
    "description": "Я устраняю причины ваших страданий навсегда, помогая вам достичь гармонии и счастья.",
    "image": {
      "@type": "ImageObject",
      "url": "/_next/static/media/alex3.57d8e42f.webp",
      "width": 2561,
      "height": 1728
    },
    "jobTitle": "Нейротраблшуттер, специалист по работе с подсознанием"
  },
  "mainEntity": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Нейротраблшуттер, устраняющий причины страданий с использованием авторских методик, работы с подсознанием, вегетализма и кинезиологии.",
    "sameAs": [
      "https://alexandrvasilev.ru",
      "https://alexandrvasilev.ru/#about"
    ]
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Услуги помощи",
      "description": "Помощь в устранении зависимостей, усталости, психосоматики, ночных кошмаров, психических травм, управления эмоциями, поиска предназначения, подавленного состояния и ментальных ограничений."
    },
    {
      "@type": "ItemList",
      "name": "Инструменты",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Thing",
            "name": "Вегетализм"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Thing",
            "name": "Кинезиология"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Thing",
            "name": "Работа с подсознанием"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Thing",
            "name": "Авторские методики"
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "Услуги",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "Мухоморный ретрит в Казани",
            "url": "https://alexandrvasilev.ru/ceremony",
            "description": "Практика, связанная с использованием Мухомора в духовных и терапевтических целях"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Нейротраблшуттинг",
            "url": "https://alexandrvasilev.ru/neurotroubleshutting",
            "description": "Эффективный способ работы с подсознанием для переработки травмирующих событий и освобождения от ограничивающих убеждений"
          }
        }
      ]
    }
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://alexandrvasilev.ru/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Программы",
        "item": "https://alexandrvasilev.ru/#programs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Обо мне",
        "item": "https://alexandrvasilev.ru/#about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Отзывы",
        "item": "https://alexandrvasilev.ru/#reviews"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Вопросы и ответы",
        "item": "https://alexandrvasilev.ru/#faq"
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/#message",
    "description": "Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время. Первая консультация 20 минут — бесплатно."
  },
  "keywords": "очищение интеграл ретрит грибы дурман нейротраблшуттинг мухоморный ретрит вегетализм кинезиология"
}
`;

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
    seoContent: 'Александр Васильев - нейротраблшуттер в Казани. Профессиональная помощь в избавлении от психологических травм, страхов и ограничений. Опытный нейротраблшуттер предлагает эффективные методики работы с подсознанием: устранение психосоматики, проработка детских травм, избавление от зависимостей, ночных кошмаров и тревожности. Индивидуальные сессии нейротраблшуттинга для улучшения качества жизни. Авторские техники работы с сознанием, включая вегетализм, кинезиологию и медитативные практики. Организация мухоморных ретритов в Казани с опытным проводником. Безопасные и эффективные методы трансформации сознания. Бесплатная консультация для определения стратегии работы. Гарантированный результат через глубинную работу с подсознанием. Более 1000 успешных случаев. Профессиональный нейротраблшуттер поможет найти и устранить причины ваших проблем. Записывайтесь на консультацию прямо сейчас!',
    title: 'Александр "Интеграл" Васильев — Нейротраблшуттер',
    description: "Благословенный портал мечты, созданный для помощи людям в преодолении сложностей, улучшении жизни и устранении страданий с использованием различных методик.",
    keywords: "очищение интеграл ретрит грибы дурман нейротраблшуттинг мухоморный ретрит вегетализм кинезиология",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <Preview />
      <Bio />
      <AboutMe
        {...{
          title: "могу вам помочь",
          titleEmpty: "Чем я",
          items: [
            { title: "Зависимости" },
            { title: "Усталость" },
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
        title="Мухоморный ретрит в Казани"
        description="Практика, связанная с использованием Мухомора в духовных и терапевтических целях"
        buttonText="Подробнее"
        buttonHref="/ceremony"
        image={enter_hole_1}
      />
      <AnimatedLine />
      <Final
        title="Нейротраблшуттинг"
        description="Эффективный способ работы с подсознанием для переработки травмирующих событий и освобождения от ограничивающих убеждений"
        buttonText="Подробнее"
        buttonHref="/neurotroubleshutting"
        image={enter_hole_2}
      />
      <AnimatedLine />
      <Final
        title="Запишитесь на бесплатную консультацию"
        description="Узнайте причины своих проблем, способы их решения и возможные преграды на вашем пути к успеху!"
        buttonText="Записаться"
        buttonHref="#message"
      />
      <Products products={products} />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"Готовы жить лучше?"}
        type="Первая консультация (Страница: Главная)"
        description={`Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время.

          Первая консультация 20 минут — бесплатно. 
          
          Подготовьте вопрос, который вас интересует, и я раскрою и решу вашу проблему, а вы уже сможете сделать вывод, обращаться ко мне в дальнейшем или нет.
        `}
      />
    </Layout>
  );
}




