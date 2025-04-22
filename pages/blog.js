import { useState, useDeferredValue } from "react";
import Layout from "../components/Layout/Layout";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { BlogCard } from "../components/BlogCard/BlogCard";
import { SearchWidget } from "../components/SearchWidget/SearchWidget";
import secondary_preview_9 from "../images/secondary_preview_9.webp";
import secondary_preview_12 from "../images/secondary_preview_12.webp";
import secondary_preview_11 from "../images/secondary_preview_11.webp";
import secondary_preview_13 from "../images/secondary_preview_13.webp";
import secondary_preview_17 from "../images/secondary_preview_17.webp";
import secondary_preview_18 from "../images/secondary_preview_18.webp";
import secondary_preview_19 from "../images/secondary_preview_19.webp";
import secondary_preview_20 from "../images/secondary_preview_20.webp";
import secondary_preview_21 from "../images/secondary_preview_21.webp";
import secondary_preview_22 from "../images/secondary_preview_22.webp";
import secondary_preview_23 from "../images/secondary_preview_23.webp";
import secondary_preview_24 from "../images/secondary_preview_24.webp";
import secondary_preview_25 from "../images/secondary_preview_25.webp";
import secondary_preview_26 from "../images/secondary_preview_26.webp";
import secondary_preview_27 from "../images/secondary_preview_27.webp";
import styles from "../styles/blog.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import { useScrollToLocation } from "../hooks/useScrollToLocation";

const articles = [
  {
    id: 14,
    title: "Почему не получается держать дисциплину — и как это изменить",
    description:
      "Вы точно знаете, что вам нужно делать. Ставите цели, пишете списки, начинаете и… снова срываетесь. День проходит — и всё не так. Но это — не лень. И не слабая воля.",
    date: "22 апреля 2025",
    image: secondary_preview_27,
    slug: "discipline",
  },
  {
    id: 13,
    title: "Нейротраблшуттинг для предпринимателей: преодоление внутренних блоков роста",
    description:
      "Выстроили воронку, собрали команду, инвестировали в рост. Всё вроде бы по плану — но есть внутренняя точка, где будто «не едет». Почему?",
    date: "15 апреля 2025",
    image: secondary_preview_26,
    slug: "neurotroubleshutting-entrepreneurs",
  },
  {
    id: 12,
    title: "Мухомор и терапия ПТСР: улучшение самочувствия через связь с подсознанием",
    description:
      "Травма не уходит с годами. Она может затаиться, стать фоном, но при определённых условиях — снова проявиться. Вспышкой агрессии. Панической атакой. Оцепенением. Ощущением, будто ты больше не принадлежишь себе. Это и есть посттравматическое стрессовое расстройство (ПТСР).",
    date: "10 апреля 2025",
    image: secondary_preview_25,
    slug: "mushroom-ptsd-therapy",
  },
  {
    id: 11,
    title: "Как избавиться от бессонницы и ночных кошмаров? Глубинный разбор причин",
    description:
      "Связь сна с подсознательными программами и методы их устранения.",
    date: "07 апреля 2025",
    image: secondary_preview_24,
    slug: "insomnia-nightmares-solutions",
  },
  {
    id: 10,
    title: "Как работает Пантерный Мухомор?",
    description:
      "Пантерный Мухомор — это мощный инструмент для тех, кто готов к глубинной работе. Если вас зовёт этот путь, важно пройти его осознанно и в сопровождении опытного проводника.",
    date: "03 апреля 2025",
    image: secondary_preview_23,
    slug: "panther-mushroom-mechanisms",
  },
  {
    id: 9,
    title: "Аллергия — это не приговор: психосоматические причины и их устранение",
    description:
      "Аллергия воспринимается многими как неизлечимое состояние, с которым остаётся лишь смириться. Врачи предлагают таблетки, уколы, диеты — всё это помогает на время облегчить симптомы, но не устраняет саму проблему. Однако, если взглянуть глубже, становится ясно: аллергия — это не просто реакция тела, а сигнал подсознания, который можно расшифровать и устранить.",
    date: "30 марта 2025",
    image: secondary_preview_22,
    slug: "allergy-psychosomatic",
  },
  {
    id: 8,
    title: "Мухомор и тонкая настройка восприятия: Как гриб открывает скрытые измерения реальности",
    description:
      "Мухоморные практики чаще всего обсуждаются в контексте улучшения самочувствия, духовных переживаний и трансформации личности. Однако мало кто говорит о том, как именно этот древний союзник изменяет сам механизм восприятия, позволяя видеть мир по-новому.",
    date: "25 марта 2025",
    image: secondary_preview_21,
    slug: "amanita-perception-tuning",
  },
  {
    id: 7,
    title: "Как перестать быть «вечным спасателем»: нейротраблшуттинг в борьбе с созависимостью",
    description:
      "Созависимость — это не забота, а подсознательная ловушка, которая заставляет вас жертвовать собой ради других. Узнайте, как освободиться от роли «вечного спасателя».",
    date: "21 марта 2025",
    image: secondary_preview_20,
    slug: "codependency",
  },
  {
    id: 6,
    title: "Для чего нужна интеграция после мухоморного погружения?",
    description:
      "Как избежать десоциализации и других рисков после духовного опыта с мухомором через грамотную интеграцию полученных инсайтов",
    date: "19 марта 2025",
    image: secondary_preview_19,
    slug: "integration",
  },
  {
    id: 5,
    title: "Как нейротраблшуттинг помогает пережить измену: восстановление доверия через работу с подсознанием",
    description:
      `Измена — это не просто предательство партнёра. Это глубокий удар по вашей способности доверять — не только другим, но и себе. 

        Большинство методов терапии фокусируются на анализе ситуации, поиске причин или попытках «простить и забыть». Но что, если корень проблемы лежит гораздо глубже — в подсознательных паттернах, сформированных ещё в детстве?  

        Нейротраблшуттинг предлагает не «закрыть гештальт», а перепрограммировать саму основу ваших реакций. Рассказываем, как это работает.`,
    date: "18 марта 2025",
    image: secondary_preview_18,
    slug: "infidelity",
  },
  {
    id: 4,
    title: "Микродозинг Мухомора: как это работает, кому подходит и как начать безопасно",
    description:
      `Мухомор — один из самых загадочных грибов, веками использовавшийся шаманами для духовных практик. 

        Сегодня, благодаря работам исследователя Михаила Вишневского, популяризировавшего его свойства в русскоязычном пространстве, микродозинг Мухомора набирает популярность как инструмент для улучшения ментального здоровья, креативности и эмоционального баланса. 

        Что говорит наука? Чем отличаются виды Мухомора? И как интегрировать практику в повседневную жизнь? Разбираемся в деталях.`,
    date: "16 марта 2025",
    image: secondary_preview_17,
    slug: "microdosing",
  },
  {
    id: 2,
    title: "Курение как подсознательный крик души: почему мы травим себя и как это остановить",
    description:
      "Курение — это не просто вредная привычка. Это сложный психологический механизм, который часто маскирует глубокие внутренние конфликты. Многие курильщики годами борются с зависимостью, но срываются снова и снова.",
    date: "15 марта 2025",
    image: secondary_preview_12,
    slug: "smoking",
  },
  {
    id: 3,
    title: "Что такое откаты и как с ними работать?",
    description:
      "Откаты — это естественная часть процесса личностного роста. Они могут возникать в любой момент, и их преодоление требует особого подхода. В этой статье мы рассмотрим, как правильно с ними работать и что делать, если они возникают.",
    date: "14 марта 2025",
    image: secondary_preview_13,
    slug: "rollback",
  },
  {
    id: 1,
    title: "Вегетализм: путь к гармонии через силу растений",
    description:
      "Вегетализм — это древняя традиция, которая объединяет человека с мудростью природы через взаимодействие с растениями. Это не просто практика, а целое мировоззрение, основанное на уважении к силе растений.",
    date: "13 марта 2025", 
    image: secondary_preview_9,
    slug: "vegetalism",
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    // Разрешаем только буквы, цифры и знаки препинания
    const sanitizedValue = value.replace(/[^а-яА-Яa-zA-Z0-9\s.,!?-]/g, "");
    setSearchQuery(sanitizedValue);
  };

  const filteredArticles = articles.filter((article) => {
    const searchLower = deferredSearchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.description.toLowerCase().includes(searchLower)
    );
  });

  const metaConfig = {
    seoContent: 'Блог о духовных практиках и природной мудрости. Исследуйте статьи о шаманских практиках, традициях и пути к гармонии через природу. Шаманизм, духовные практики, мухомор, природа, гармония.',
    title: "Блог о духовных практиках и природной мудрости",
    description:
      "Исследуйте статьи о шаманских практиках, традициях и пути к гармонии через природу",
    keywords: "шаманизм, духовные практики, мухомор, природа, гармония",
  };

  useScrollToLocation();

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text="Блог" image={secondary_preview_11} />
      <LineAnimation>
        <div className={styles.blogContainer}>
          <div className={styles.articlesColumn}>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <BlogCard key={article.id} {...article} />
              ))
            ) : (
              <div className={styles.noResults}>
                <div style={{ height: '1px' }} />
                <h2 className={contentStyles.title_middle}>По вашему запросу ничего не найдено</h2>
                <p>Попробуйте изменить поисковый запрос или использовать другие ключевые слова</p>
              </div>
            )}
          </div>
          <VisibilityManager className={styles.sidebar}>
            <SearchWidget 
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              resultsCount={filteredArticles.length}
            />
          </VisibilityManager>
        </div>
      </LineAnimation>
    </Layout>
  );
}
