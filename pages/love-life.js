import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { content } from "../content/love-life";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";

import secondary_preview_1 from '../public/images/secondary_preview_1.webp';

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
      <SecondaryPreview text={content.pageTitle} image={secondary_preview_1}/>
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Часто ли Вы чувствуете радость и вдохновение от своей жизни? Или,
            быть может, Вы ощущаете усталость, апатию или даже разочарование?
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваше отношение к жизни формируется на подсознательном уровне.
            Возможно, Вы привыкли видеть скорее трудности и проблемы, а не
            возможности и перспективы. Это происходит из-за ограничивающих
            убеждений и негативных установок, которые закрепились в Вашем
            подсознании.{" "}
          </VisibilityManager>

          <VisibilityManager as="p">
            Моя работа направлена на выявление и трансформацию этих негативных
            установок. Я помогу Вам изменить мышление, перестроить восприятие и
            начать видеть мир с другой стороны, полной любви, радости и
            благодарности.
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title}>
            Результаты, которые Вы получите
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уверенность и энтузиазм к жизни.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Освобождение от негативных эмоций и убеждений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Способность находить радость и вдохновение в каждом моменте.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гармония с собой и окружающим миром.
            </p>
          </VisibilityManager>
          <VisibilityManager as="h3" className={contentStyles.title}>
            Представьте себе:
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы чувствуете искреннюю радость от простых вещей.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы смотрите на мир с оптимизмом и энтузиазмом.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы полны энергии и желания действовать.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы видите в каждом дне новые возможности и перспективы.
            </p>
          </VisibilityManager>
        </div>
      </LineAnimation>

      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} type={content.pageTitle}/>
    </Layout>
  );
}
