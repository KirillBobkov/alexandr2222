import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { content } from "../content/love-myself";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";

import secondary_preview_2 from '../public/images/secondary_preview_2.webp';

export default function() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={content.pageTitle} image={secondary_preview_2} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Часто ли Вы замечаете свои достоинства? Чувствуете ли себя
            достойными любви и уважения? Если ответ отрицательный, то настало
            время изменить это. Я помогу Вам обрести гармонию с собой и
            научиться любить себя.
          </VisibilityManager>
          <VisibilityManager as="p">
            Нейротраблшуттинг — это уникальный метод работы с подсознанием,
            который помогает Вам трансформировать негативные убеждения и эмоции,
            мешающие Вам полюбить себя.{" "}
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            С помощью специальных техник я помогу Вам
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Обрести уверенность в своих достоинствах и способностях.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Избавиться от чувства вины и неполноценности.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Научиться принимать себя таким, какой вы есть.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ощутить радость и вдохновение от своей уникальности.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Результаты, которые вы получите
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уверенность в своих достоинствах и способностях.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Освобождение от негативных эмоций и убеждений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Способность принимать и любить себя без ограничений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гармония с собой и окружающим миром.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваша любовь к себе — это основа счастливой жизни. Я могу убрать из
            Вашего подсознания абсолютно всё, что может мешать Вам любить себя.
            Ваша жизнь станет ярче.
          </VisibilityManager>

          <VisibilityManager as="p">
            Запишитесь на бесплатную консультацию прямо сейчас и начните менять
            свою жизнь к лучшему.{" "}
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} type={content.pageTitle}/>
    </Layout>
  );
}
