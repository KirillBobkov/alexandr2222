import Layout from "../components/Layout/Layout";
import LinkButton from "../components/shared/LinkButton/LinkButton";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";

export default function Custom404() {
  const metaConfig = {
    title: "404 - Страница не найдена",
    pageTitle: "404",
    description: "Страница не найдена",
    keywords: "",
    content: "",
    href: "/404",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <div className={containerStyles.container}>
        <div className={contentStyles.centerContent}>
          <h1 className={contentStyles.title}>404</h1>
          <p className={contentStyles.text}>Страница не найдена</p>
          <LinkButton href="/" >Вернуться на главную</LinkButton>
        </div>
      </div>
    </Layout>
  );
} 