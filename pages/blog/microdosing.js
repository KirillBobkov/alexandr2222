import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_17 from "../../images/secondary_preview_17.webp";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Микродозинг Мухомора: как это работает, кому подходит и как начать безопасно",
    description: "Научный подход к микродозингу мухомора, виды грибов, практические рекомендации и советы экспертов",
    keywords: "микродозинг, мухомор, психоделики, ментальное здоровье, духовные практики",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text="Микродозинг" image={secondary_preview_17} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Микродозинг Мухомора: как это работает, кому подходит и как начать безопасно
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — один из самых загадочных грибов, веками использовавшийся шаманами для духовных практик.
          </VisibilityManager>

          <VisibilityManager as="p">
            Сегодня, благодаря работам исследователя Михаила Вишневского, популяризировавшего его свойства в русскоязычном пространстве, микродозинг Мухомора набирает популярность как инструмент для улучшения ментального здоровья, креативности и эмоционального баланса.
          </VisibilityManager>

          <VisibilityManager as="p">
            Что говорит наука? Чем отличаются виды Мухомора? И как интегрировать практику в повседневную жизнь? Разбираемся в деталях.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Научные основы микродозинга: что известно?
          </VisibilityManager>

          <VisibilityManager as="p">
            Микродозинг — это приём малых доз психоделических веществ (в 10–20 раз меньше стандартной «ритуальной» дозы). В случае с Мухомором речь идёт о 0,3–1 г сушёного гриба, но из-за индивидуальной чувствительности первый приём лучше начинать с 0,05 г. (размером с половину рисового зёрнышка). Если в течение 24 часов нет реакций (тошнота, головокружение), можно переходить к стандартной дозировке.
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Активные компоненты:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Мусцимол — отвечает за расслабление, снижение тревоги и антидепрессивный эффект.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Иботеновая кислота — в малых дозах стимулирует нейропластичность, в больших — токсична.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Исследования (2020–2023 гг.):
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Снижение тревожности на 40% (Университет Тарту).
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Улучшение когнитивной гибкости и креативности (журнал Psychopharmacology).
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Виды Мухомора и различия в микродозинге
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            1. Красный Мухомор (Amanita muscaria)
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Химия: высокое содержание мусцимола, умеренное — иботеновой кислоты.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Эффекты: расслабление, эмоциональный баланс, усиление сновидений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Дозировка: 0,3–0,5 г сушёного гриба.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Курс: 3–4 недели с перерывом 2 месяца.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            2. Пантерный Мухомор (Amanita pantherina)
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Химия: больше иботеновой кислоты, меньше мусцимола.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Эффекты: энергия, фокус, лёгкая стимуляция (подходит для творчества).
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Дозировка: 0,1–0,3 г (выше токсичность!).
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Курс: не более 2 недель.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            3. Королевский Мухомор (Amanita regalis)
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Химия: сбалансированное соотношение мусцимола и иботеновой кислоты.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Эффекты: гармонизация тела и ума, мягкая эйфория.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Дозировка: 0,3–0,7 г.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Курс: до 6 недель.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Можно ли смешивать виды?
          </VisibilityManager>

          <VisibilityManager as="p">
            Да, но с осторожностью. Например:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Красный + Королевский (1:1): для глубокой релаксации.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Красный + Пантерный (1:0,5): для баланса энергии и спокойствия.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Важно: начинайте с микросмесей (0,1–0,2 г) и отслеживайте реакцию.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Практические рекомендации
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            1. Подготовка гриба
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Сушка при 50–60°C (снижает токсичность иботеновой кислоты).
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Измельчите в порошок для точной дозировки.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            2. Схемы приёма
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              3 дня приёма / 2 дня перерыва — для новичков.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              5 дней приёма / 2 дня перерыва — для продвинутых.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            3. Сочетание с другими практиками
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Медитация: утренний приём + 15 минут осознанного дыхания.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Йога: Красный Мухомор усиливает связь с телом.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Творчество: Пантерный Мухомор + рисование/письмо.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Совместимость
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Кофе: только с Красным Мухомором (не более 1 чашки).
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Алкоголь: категорически нет!
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Кому подходит микродозинг?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Тревожным людям: Красный Мухомор снижает стресс.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Креативным профессионалам: Пантерный Мухомор раскрывает потенциал.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Искателям гармонии: Королевский Мухомор балансирует энергии.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Противопоказания
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Беременность, психические расстройства (шизофрения, БАР).
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Приём антидепрессантов (риск серотонинового синдрома).
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Советы от опытных проводников
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Первый раз: начните с 0,05 г Королевского Мухомора.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ведите дневник: фиксируйте дозы, эффекты и эмоции.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ищите проводника: опытный наставник поможет избежать ошибок.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Отзывы: как микродозинг изменил жизни
          </VisibilityManager>

          <VisibilityManager as="p">
            <strong>Анна, 29 лет, дизайнер:</strong><br />
            «Красный Мухомор (0,3 г через день) помог мне справиться с выгоранием. Теперь я спокойно работаю над проектами и даже начала рисовать».
          </VisibilityManager>

          <VisibilityManager as="p">
            <strong>Иван, 37 лет, IT-специалист:</strong><br />
            «Пантерный Мухомор (0,2 г 5/2) подарил мне фокус. За месяц я закончил проект, который тянул полгода».
          </VisibilityManager>

          <VisibilityManager as="p">
            <strong>Ольга, 45 лет, учитель йоги:</strong><br />
            «Королевский Мухомор (0,5 г 3/2) углубил мои медитации. Теперь я чувствую энергию учеников как никогда».
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему важно консультироваться с проводником?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — мощный инструмент, но он требует уважения. Опытный проводник:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Поможет подобрать вид и дозу.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Научит распознавать сигналы тела.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Предостережёт от ошибок (например, смешивания видов без подготовки).
            </p>
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Микродозинг (статья)"
        title="Готовы начать?"
        description={`Микродозинг Мухомора — это путь к диалогу с глубинным «Я». Но помните: ключ к успеху — осознанность, умеренность и помощь проводника.  

        Оставьте заявку, если хотите получить индивидуальную консультацию по микродозингу Мухомора.

        P.S. Мухомор не даёт ответов — он задаёт вопросы, которые ведут к истине.`}
      />
    </Layout>
  );
} 