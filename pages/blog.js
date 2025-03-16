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
import styles from "../styles/blog.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";

const articles = [
  {
    id: 4,
    title: "Микродозинг Мухомора: как это работает, кому подходит и как начать безопасно",
    description:
      `Мухомор — один из самых загадочных грибов, веками использовавшийся шаманами для духовных практик. 

        Сегодня, благодаря работам исследователя Михаила Вишневского, популяризировавшего его свойства в русскоязычном пространстве, микродозинг Мухомора набирает популярность как инструмент для улучшения ментального здоровья, креативности и эмоционального баланса. 

        Что говорит наука? Чем отличаются виды Мухомора? И как интегрировать практику в повседневную жизнь? Разбираемся в деталях.`,
    date: "16 марта 2024",
    image: secondary_preview_17,
    slug: "microdosing",
  },
  {
    id: 2,
    title: "Курение как подсознательный крик души: почему мы травим себя и как это остановить",
    description:
      "Курение — это не просто вредная привычка. Это сложный психологический механизм, который часто маскирует глубокие внутренние конфликты. Многие курильщики годами борются с зависимостью, но срываются снова и снова.",
    date: "15 марта 2024",
    image: secondary_preview_12,
    slug: "smoking",
  },
  {
    id: 3,
    title: "Что такое откаты и как с ними работать?",
    description:
      "Откаты — это естественная часть процесса личностного роста. Они могут возникать в любой момент, и их преодоление требует особого подхода. В этой статье мы рассмотрим, как правильно с ними работать и что делать, если они возникают.",
    date: "16 марта 2024",
    image: secondary_preview_13,
    slug: "rollback",
  },
  {
    id: 1,
    title: "Вегетализм: путь к гармонии через силу растений",
    description:
      "Вегетализм — это древняя традиция, которая объединяет человека с мудростью природы через взаимодействие с растениями. Это не просто практика, а целое мировоззрение, основанное на уважении к силе растений.",
    date: "14 марта 2024", 
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
    title: "Блог о духовных практиках и природной мудрости",
    description:
      "Исследуйте статьи о шаманских практиках, традициях и пути к гармонии через природу",
    keywords: "шаманизм, духовные практики, мухомор, природа, гармония",
  };

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
          <div className={styles.sidebar}>
            <SearchWidget 
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              resultsCount={filteredArticles.length}
            />
          </div>
        </div>
      </LineAnimation>
    </Layout>
  );
}
