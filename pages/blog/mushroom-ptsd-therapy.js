import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_25 from "../../images/secondary_preview_25.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Мухомор и терапия ПТСР: улучшение самочувствия через связь с подсознанием",
  "description": "Мухомор и шаманские практики — эффективный путь к исцелению ПТСР, психологических травм, тревожности и хронического стресса. Глубокая работа с подсознанием, безопасная терапия, индивидуальный подход, поддержка опытного проводника. Узнайте, как избавиться от последствий травмы, восстановить сон, вернуть энергию и радость жизни. Ключевые слова: ПТСР, мухомор, психологическая травма, терапия травмы, подсознание, шаманские практики, консультация, Казань, работа с подсознанием, безопасная терапия, эмоциональное исцеление, восстановление сна, избавление от страхов.",
  "image": "/_next/static/media/secondary_preview_25.webp",
  "url": "https://alexandrvasilev.ru/blog/mushroom-ptsd-therapy",
  "inLanguage": "ru",
  "datePublished": "2025-04-10",
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
    "description": "Нейротраблшутер, специалист по работе с подсознанием и преодолению травм",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием" 
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/mushroom-ptsd-therapy"
  },
  "keywords": "ПТСР, посттравматическое стрессовое расстройство, мухомор, психологическая травма, терапия травмы, подсознание",
  "about": {
    "@type": "Thing",
    "name": "Уменьшение ПТСР",
    "description": "Посттравматическое стрессовое расстройство и подходы к его уменьшению с использованием растительных веществ"
  },
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/mushroom-ptsd-therapy#message",
    "description": "Запишитесь на консультацию, чтобы узнать больше о терапии психологических травм."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Мухомор и терапия ПТСР: улучшение самочувствия через связь с подсознанием",
    description: "Как мухомор помогает уменьшать ПТСР и работать с травмами через глубокую связь с подсознанием.",
    keywords: "ПТСР, посттравматическое стрессовое расстройство, мухомор, психологическая травма, терапия травмы, подсознание, шаманские практики, консультация, Казань, работа с подсознанием, безопасная терапия, эмоциональное исцеление",
    seoContent: "Мухоморные практики и шаманские методы — действенный путь поддержки при ПТСР, психологических травмах, тревожности и хроническом стрессе. Глубокая работа с подсознанием, безопасная организация процесса, персональный подход, сопровождение опытного проводника. Разбираем освобождение от последствий травм, восстановление сна, возвращение энергии и радости. Ключевые слова: посттравматический стресс, мухоморная практика, психологические травмы, травматерапия, работа с подсознанием, шаманские традиции, консультация, Казань, работа с подсознанием, безопасная терапия, эмоциональное восстановление, нормализация сна, освобождение от страхов.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="Мухомор и терапия ПТСР" 
        image={secondary_preview_25} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            МУХОМОР И ТЕРАПИЯ ПТСР: УЛУЧШЕНИЕ САМОЧУВСТВИЯ ЧЕРЕЗ СВЯЗЬ С ПОДСОЗНАНИЕМ
          </VisibilityManager>

          <VisibilityManager as="p">
            Травма не исчезает с годами. Она может затихнуть, стать фоном, но при определённых обстоятельствах она может вернуться. Вспышкой агрессии, панической атакой, ощущением замороженности или оторванности от себя. Это часто встречается при посттравматическом стрессовом расстройстве (ПТСР).
          </VisibilityManager>

          <VisibilityManager as="p">
            Традиционные методы терапии часто фокусируются на симптомах, но есть путь, который позволяет взглянуть на проблему с другой стороны — туда, где скрыта сама причина. Этот путь открывает Мухомор.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            КАК МУХОМОР ВОЗДЕЙСТВУЕТ НА ПСИХИКУ ПРИ ПТСР
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор содержит активные вещества, такие как мусцимол и иботеновая кислота, которые воздействуют на ГАМК-рецепторы в нервной системе, помогая снижать перевозбуждение. Мухомор работает не как психоделик, а как Растение-Учитель, проводник в подсознание, создавая условия для глубокого внутреннего восстановления.
          </VisibilityManager>

          <VisibilityManager as="p">
            В процессе погружения человек сталкивается с корнем своей травмы, но не на уровне ума, а через полное переживание этого опыта. Он возвращается в момент, который оставил в нём след, и проживает его заново в безопасных условиях, с возможностью осознанного выбора, принятия и улучшения самочувствия.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЧТО ПРОИСХОДИТ ВО ВРЕМЯ РЕТРИТА
          </VisibilityManager>

          <VisibilityManager as="p">
            Во время церемонии человек может:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Посмотреть на своё травмирующее событие с новой точки зрения
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Встретиться с тем, кто стал причиной боли, и отпустить его
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вернуть утраченную силу и целостность
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Найти слова для боли, которую невозможно было выразить
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ощутить глубокое облегчение, как будто долгие годы носивший тяжёлый груз, наконец, снят
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Я провожу такие сессии с вниманием и заботой, потому что сам прошёл через травмы. Потому что Мухомор выбрал меня Проводником не случайно.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЖИВЫЕ ПРИМЕРЫ
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Женщина с симптомами ПТСР, пережившая домашнее насилие, в погружении прожила момент, где она не была жертвой, а могла защитить себя. Её тело впервые расслабилось после долгих лет напряжения.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Мужчина, вернувшийся с фронта, страдавший от кошмаров, в процессе погружения увидел, как свет очищает его, и отпустил души погибших товарищей. Сон восстановился уже на третью ночь после ретрита.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Молодой человек, переживший утрату, в церемонии смог попрощаться с близким и сказать те слова, которые не успел при жизни. Это освободило его от чувства вины и эмоциональной блокировки.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЧТО ГОВОРИТ НАУКА О ПОТЕНЦИАЛЕ МУХОМОРА
          </VisibilityManager>

          <VisibilityManager as="p">
            Хотя Пантерный и Красный мухоморы всё ещё плохо изучены в официальной науке, интерес к ним растёт.
          </VisibilityManager>

          <VisibilityManager as="p">
            Известно, что мусцимол обладает анксиолитическими (противотревожными) и седативными эффектами, а также способен вызывать осознанные сновидные состояния, в которых восприятие и память переплетаются, позволяя переписать травматичный опыт.
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейробиологи изучают, как это может быть применено в терапии посттравматического стресса.
          </VisibilityManager>

          <VisibilityManager as="p">
            Психологи подчеркивают, что мягкий, неагрессивный характер погружения с Мухомором создаёт условия для глубокого улучшения самочувствия без шокирующих эффектов, характерных для других психоактивных веществ.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЗАКЛЮЧЕНИЕ
          </VisibilityManager>

          <VisibilityManager as="p">
            ПТСР — это не приговор.
          </VisibilityManager>

          <VisibilityManager as="p">
            Для улучшения самочувствия важно не забыть о боли, а пройти через неё. С поддержкой. С пониманием. С Мухомором как союзником.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы готовы пройти этот путь, я помогу вам сделать это безопасно и осознанно.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор даёт возможность не только пережить травму заново, но и изменить её место в вашей жизни — из центра боли в точку силы.
          </VisibilityManager>
          <p
              style={{
                fontSize: "12px",
                fontStyle: "italic",
              }}
            >
              Метод не является медицинским и не заменяет консультации
              специалиста
            </p>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Мухомор и терапия PTSD (статья)"
        title={"КОНСУЛЬТАЦИЯ ПО ТЕРАПИИ ПТСР С МУХОМОРОМ"}
        description={`Хотите узнать больше о том, как Мухомор может помочь вам в работе с посттравматическим стрессом и травмами? 
          
          Запишитесь на консультацию, и мы обсудим ваш путь к улучшению самочувствия.`}
      />
    </Layout>
  );
} 