import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { content } from "../content/remove-bad-memories";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={content.pageTitle} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Негативный опыт прошлого может блокировать Ваш потенциал и мешать
            Вам двигаться вперед. Нейротраблшуттинг предлагает эффективный
            способ работы с подсознанием для переработки травмирующих событий и
            освобождения от ограничивающих убеждений.
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title}>
            Что Вас ждёт
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Освобождение от боли и обид прошлого.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Внутренняя свобода и легкость.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Новый взгляд на себя и свою жизнь.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title}>
            Как это работает?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мы работаем с Вашим подсознанием, чтобы найти источник негатива. Вы
            узнаете, как прошлые события влияют на Вашу жизнь сегодня, и
            получитe инструменты для их трансформации. Это не просто разговорная
            терапия — это мощный процесс, который мгновенно помогает Вам
            перепрограммировать свои убеждения и изменить реакцию на прошлые
            события.
          </VisibilityManager>

          <VisibilityManager as="p">
            Позвольте себе исцелиться и двигаться вперед к жизни, которую вы
            заслуживаете.{" "}
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} type={content.pageTitle}/>
    </Layout>
  );
}
