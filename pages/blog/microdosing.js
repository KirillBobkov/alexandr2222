import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_17 from "../../images/secondary_preview_17.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Микродозинг Мухомора: как это работает, кому подходит и как подойти к практике осознанно",
  "description": "Научный подход к микродозингу мухомора, виды грибов, практические рекомендации и советы экспертов",
  "image": "/_next/static/media/secondary_preview_17.webp",
  "url": "https://alexandrvasilev.ru/blog/microdosing",
  "inLanguage": "ru",
  "datePublished": "2025-03-16",
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
    "description": "Нейротраблшутер, специалист по работе с подсознанием и грибной терапии",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/microdosing"
  },
  "keywords": "микродозинг, мухомор, психоделики, ментальное здоровье, духовные практики",
  "about": [
    {
      "@type": "Thing",
      "name": "Микродозинг",
      "description": "Использование малых количеств растительных или грибных веществ для улучшения психологического и физического состояния"
    },
    {
      "@type": "Thing",
      "name": "Виды мухоморов",
      "description": "Красный Мухомор (Amanita muscaria), Пантерный Мухомор (Amanita pantherina), Королевский Мухомор (Amanita regalis)"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/microdosing#message",
    "description": "Запишитесь на консультацию, чтобы узнать больше о практике микродозинга."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Микродозинг Мухомора: как это работает, кому подходит и как подойти к практике осознанно",
    description: "Научный подход к микродозингу мухомора, виды грибов, практические рекомендации и советы экспертов",
    keywords: "микродозинг, мухомор, психоделики, ментальное здоровье, духовные практики",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview text="Микродозинг" image={secondary_preview_17} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Микродозинг Мухомора: как это работает, кому подходит и как подойти к практике осознанно
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — один из самых загадочных грибов, с древности используемый в ритуальной и целительной традиции разных народов мира.
          </VisibilityManager>

          <VisibilityManager as="p">
            Сегодня интерес к нему возрождается — не в контексте «грибной моды», а как поиск диалога с природой, телом и бессознательным.
            Благодаря популяризации, начатой Михаилом Вишневским, и всё более глубокому изучению свойств Мухомора, растёт число людей, которые осознанно подходят к практике его микродозинга — как части пути самопознания, мягкой саморегуляции и расширения восприятия.
          </VisibilityManager>

          <VisibilityManager as="p">
            Что известно об этом подходе? Чем отличаются виды Мухомора? И как подойти к практике так, чтобы она была безопасной и экологичной? Давайте разберёмся.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что такое микродозинг: взгляд с научной и этнографической стороны
          </VisibilityManager>

          <VisibilityManager as="p">
            Микродозингом называют использование малых количеств растительных или грибных веществ — в дозах, не вызывающих выраженных изменений сознания, но затрагивающих тонкие слои восприятия, эмоционального фона и чувствительности.
          </VisibilityManager>

          <VisibilityManager as="p">
            В случае с Мухомором — это высушенный и термически обработанный гриб, содержащий биологически активные вещества, в первую очередь мусцимол и иботеновую кислоту.
            В микроколичествах они воздействуют на глубинные процессы регуляции сна, эмоциональной адаптации и чувствительности к телесным сигналам.
          </VisibilityManager>

          <VisibilityManager as="p">
            В 2020–2023 гг. в разных странах проводились исследовательские проекты (например, при Университете Тарту), где фиксировались следующие результаты:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              улучшение субъективного качества сна и снижения тревожности;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              повышение гибкости мышления и креативности;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              усиление осознанности в телесной и эмоциональной сфере.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Важно подчеркнуть: речь не идёт о медикаментозном или клиническом эффекте, а о мягкой работе в зоне ощущений, внимания и внутреннего фона.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Виды Мухомора: особенности взаимодействия
          </VisibilityManager>

          <VisibilityManager as="p">
            Каждый вид Мухомора обладает своим характером и спектром действия. Вот краткие наблюдения от тех, кто уже сталкивался с практикой:
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Красный Мухомор (Amanita muscaria)
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Создаёт состояние внутреннего покоя и расслабления.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Часто углубляет сны и усиливает контакт с телом.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Подходит тем, кто хочет смягчить тревожность и восстановить спокойствие.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Пантерный Мухомор (Amanita pantherina)
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Даёт энергию и ментальную чёткость.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Может активизировать креативное мышление и ощущение потока.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Подходит для чувствительных людей осторожно, только при сопровождении и внимательном самонаблюдении.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Королевский Мухомор (Amanita regalis)
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Восстанавливает баланс между телом и разумом.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Может давать ощущение цельности, мягкой эйфории и глубинного заземления.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Подходит тем, кто ищет внутреннюю гармонию и тонкую, сбалансированную практику.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Иногда практики комбинируют виды, создавая индивидуальные микросмеси — но только после глубокого знакомства с реакциями организма на каждый гриб по отдельности.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Практическое взаимодействие: как подойти к опыту экологично
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Подготовка
          </VisibilityManager>

          <VisibilityManager as="p">
            Соблюдение температурного режима при сушке (50–60°C) помогает преобразовать иботеновую кислоту в более мягкий мусцимол. После этого гриб измельчается — для более точного дозирования и наблюдения за телесными откликами.
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Форматы
          </VisibilityManager>

          <VisibilityManager as="p">
            Некоторые люди применяют практику через день, другие — пять дней в неделю, оставляя выходные на интеграцию. Оптимально подбирать ритм под себя и фиксировать ощущения в дневнике.
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Сопровождающие практики
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Осознанное дыхание, медитация или мягкое движение усиливают телесную осознанность.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Утренние практики — как правило, наиболее глубоко связывают с телом и настроем на день.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Практики творчества (рисование, письмо, музыка) позволяют вывести наружу тонкие состояния.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Внимание к телу — ключ
          </VisibilityManager>

          <VisibilityManager as="p">
            Важно быть внимательным: если организм даёт сигналы в виде дискомфорта, лучше сделать паузу и понаблюдать. Каждое тело уникально. Здесь нет универсальных рецептов — только живой контакт с собой.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Кому может быть интересна эта практика
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Людям с повышенным уровнем тревоги — особенно в сочетании с городской загруженностью и внутренним напряжением.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Творческим профессионалам — микродозинг Мухомора способен активизировать нестандартное мышление и углубить потоковое состояние.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Искателям баланса — если вы на пути самонаблюдения и работы с энергиями, Мухомор может стать тонким союзником.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Голос опыта
          </VisibilityManager>

          <VisibilityManager as="p">
            <strong>Анна, 29 лет, дизайнер:</strong><br />
            «Мухомор помог мне по-новому выстроить границы — как в себе, так и в работе. Я начала слышать, чего действительно хочу, и научилась отдыхать».
          </VisibilityManager>

          <VisibilityManager as="p">
            <strong>Иван, 37 лет, разработчик:</strong><br />
            «Раньше я постоянно выгорал. Пантерный гриб будто бы включил внутренний генератор. Словно мозг начал думать по-другому — и легче».
          </VisibilityManager>

          <VisibilityManager as="p">
            <strong>Ольга, 45 лет, преподавательница йоги:</strong><br />
            «С Королевским Мухомором медитации стали глубже. Тело стало отзывчивым, внимание — спокойным. Это не психоделика, это — тонкая настройка».
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему важно идти в сопровождении
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — не игрушка. Он требует внимания, уважения и честности.
          </VisibilityManager>

          <VisibilityManager as="p">
            Опытный проводник — это не человек, который «даёт гриб», а тот, кто помогает вам услышать тело, заметить отклики и не заблудиться в ощущениях.
          </VisibilityManager>

          <VisibilityManager as="p">
            Проводник — это зеркало, а не навигатор. Всё важное всё равно произойдёт внутри вас.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Хочется глубже разобраться?
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы на перепутье — и чувствуете, что готовы к исследованию тонких состояний через взаимодействие с Растениями,
            вы можете получить индивидуальную консультацию по вопросам самонаблюдения, интеграции и подготовки.
          </VisibilityManager>

          <p
            style={{
              fontSize: "12px",
              fontStyle: "italic",
            }}
          >
            Важно: Этот материал носит исключительно ознакомительный и этнографический характер.
            Он не является медицинской рекомендацией и не побуждает к употреблению веществ.
            Все описанные состояния — субъективный опыт отдельных людей и не претендуют на универсальность.
            Принимая решения о взаимодействии с природными веществами, важно действовать осознанно, с уважением к себе, телу и законам своего региона.
          </p>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Микродозинг мухомора (статья)"
        title="Готовы начать?"
        description={`Микродозинг Мухомора — это путь к диалогу с глубинным «Я». Но помните: ключ к успеху — осознанность, умеренность и помощь проводника.  

        Оставьте заявку, если хотите получить индивидуальную консультацию по микродозингу Мухомора.

        P.S. Мухомор не даёт ответов — он задаёт вопросы, которые ведут к истине.`}
      />
    </Layout>
  );
} 