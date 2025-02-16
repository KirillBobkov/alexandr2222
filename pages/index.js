import Layout from "../components/Layout/Layout";
import { Bio } from "../components/Bio/Bio";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Preview } from "../components/Preview/Preview";
import { Warranty } from "../components/Warranty/Warranty";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Suggest } from "../components/Suggests/Suggests";
import { Helping } from "../components/Helping/Helping";
import { Final } from "../components/Final/Final";
import { Products } from "../components/Products/Products";
import { Questions } from "../components/Questions/Questions";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { CirclesList } from "../components/CirclesList/CirclesList";
import enter_hole_1 from "../public/images/enter_hole_1.webp";
import enter_hole_2 from "../public/images/enter_hole_2.webp";

const schemaOrg = `
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Благословенный портал мечты",
  "description": "Сайт Александра Васильева, созданный для помощи людям в преодолении сложностей, улучшении жизни и устранении страданий с использованием различных методик.",
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
    "jobTitle": "Практик НЛП, психоаналитик, специалист по дыхательным практикам"
  },
  "mainEntity": {
    "@type": "Person",
    "name": "Александр Васильев",
    "description": "Практик, устраняющий причины страданий с использованием техник НЛП, дыхательных практик, ароматерапии и психоанализа.",
    "sameAs": [
      "https://alexandrvasilev.ru",
      "https://alexandrvasilev.ru/#about"
    ]
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Услуги помощи",
      "description": "Помощь в устранении усталости, психосоматики, ночных кошмаров, управления эмоциями и психологических ограничений."
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
            "name": "Полюбить жизнь",
            "url": "https://alexandrvasilev.ru/love-life",
            "description": "Программа для обретения радости и удовлетворения от жизни."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Полюбить себя",
            "url": "https://alexandrvasilev.ru/love-myself",
            "description": "Программа для повышения самооценки и любви к себе."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Сессия релаксации",
            "url": "https://alexandrvasilev.ru/relax-session",
            "description": "Сессия для полного расслабления и снятия стресса."
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Увеличить заработок",
            "url": "https://alexandrvasilev.ru/grow-money",
            "description": "Программа для улучшения финансового состояния."
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Service",
            "name": "Удалить плохие воспоминания",
            "url": "https://alexandrvasilev.ru/remove-bad-memories",
            "description": "Методика для устранения негативных воспоминаний."
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Service",
            "name": "Бросить курить легко",
            "url": "https://alexandrvasilev.ru/drop-smoking",
            "description": "Программа для легкого отказа от курения."
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
    "price": "Договорная",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/#message",
    "description": "Записаться на консультацию или сессию через контактную форму."
  }
}
`
export default function() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Александр "Интеграл" Васильев',
    description: "Благословенный портал мечты",
    keywords: "очищение интеграл ретрит грибы дурман",
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
          buttonHref: "#message",
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
        title="Мухоморный ретрит"
        description="Практика, связанная с использованием Мухомора (Amanita muscaria) в духовных и терапевтических целях"
        buttonText="Подробнее"
        buttonHref="/ceremony"
        image={enter_hole_1}
      />
      <AnimatedLine />
      <Final
        title="Нейротраблшуттинг"
        description="Эффективный способ работы с подсознанием для переработки травмирующих событий и освобождения от ограничивающих убеждений"
        buttonText="Подробнее"
        buttonHref="/neurotrableshutting"
        image={enter_hole_2}
      />

      <Products />
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />
      <Final
        title="Запишитесь на бесплатную консультацию"
        description="Узнайте причины своих проблем, способы их решения и возможные преграды на вашем пути к успеху!"
        buttonText="Записаться"
        buttonHref="#message"
      />
    </Layout>
  );
}
