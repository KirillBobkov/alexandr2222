import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_3 from '../../images/secondary_preview_3.webp';
export default function() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Сессия релаксации - Александр "Интеграл" Васильев',
    pageTitle: "Сессия релаксации",
    description: "Сессия релаксации",
    keywords: "очищение интеграл ретрит грибы дурман",
    content: '',
    href: '/drop-smoking',
};

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={metaConfig.pageTitle} image={secondary_preview_3} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Современный мир требует от нас постоянной активности, что приводит к
            стрессу, тревоге и перенапряжению. Ваш мозг и тело нуждаются в
            отдыхе и восстановлении.
          </VisibilityManager>

          <VisibilityManager as="p">
            Сессия релаксации - это не просто отдых, это глубокая работа с вашим
            подсознанием, направленная на снятие напряжения и восстановление
            внутреннего баланса. Используя мягкие и эффективные техники
            нейротраблшуттинга, я помогу вам достичь состояния глубокого
            расслабления и внутреннего покоя.{" "}
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            После сессии вы почувствуете
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Глубокое расслабление и ощущение легкости.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Снижение уровня стресса и тревоги.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Прилив сил и энергии.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Улучшение концентрации и ясности ума.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Позвольте себе отдохнуть и восстановить свои ресурсы. Запишитесь на
            сессию релаксации прямо сейчас!
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} type={metaConfig.pageTitle}/>
    </Layout>
  );
}
