import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";

import secondary_preview_2 from "../../images/secondary_preview_2.webp";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Полюбить себя - Александр "Интеграл" Васильев',
    pageTitle: "Полюбить себя",
    description: "Полюбить себя",
    keywords: "очищение интеграл ретрит грибы дурман",
    content: "",
    href: "love-myself",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview
        text={metaConfig.pageTitle}
        image={secondary_preview_2}
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Часто ли вы замечаете свои достоинства? Чувствуете ли себя
            достойными любви и уважения? Если ответ отрицательный, то настало
            время изменить это. Я помогу вам обрести гармонию с собой и
            научиться любить себя.
          </VisibilityManager>
          <VisibilityManager as="p">
            Нейротраблшуттинг — это уникальный метод работы с подсознанием,
            который помогает вам трансформировать негативные убеждения и эмоции,
            мешающие вам полюбить себя.{" "}
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            С помощью специальных техник я помогу вам
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

          <div style={{ height: "1px" }} />
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
            вашего подсознания абсолютно всё, что может мешать вам любить себя.
            Ваша жизнь станет ярче.
          </VisibilityManager>

          <VisibilityManager as="p">
            Запишитесь на бесплатную консультацию прямо сейчас и начните менять
            свою жизнь к лучшему.{" "}
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"Готовы жить лучше?"}
        description={
          "Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время."
        }
        type={metaConfig.pageTitle + " (программа)"}
      />
    </Layout>
  );
}
