import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { content } from "../content/grow-money";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import secondary_preview_4 from '../public/images/secondary_preview_4.webp';


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
      <SecondaryPreview text={content.pageTitle} image={secondary_preview_4} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Вы работаете усердно, но Ваш доход не растет так, как Вам хотелось
            бы? Вы знаете, что заслуживаете большего.
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваше отношение к деньгам формируется на подсознательном уровне.
            Возможно, у Вас есть убеждения, которые ограничивают ваш финансовый
            рост, например, "деньги достаются тяжелым трудом" или "большие
            деньги – это опасно".{" "}
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшуттинг - это мощный инструмент, который позволяет выявить
            и устранить эти подсознательные ограничения. Я помогу Вам
            перепрограммировать установки в отношении денег, открыть новые
            возможности и реально начать зарабатывать больше.
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Результаты, которые Вы получите
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Освободитесь от подсознательных блоков, препятствующих финансовому
              успеху.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Сформируете позитивное отношение к деньгам и их возможностям.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Разовьёте качества, необходимые для увеличения дохода.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Повысите свою финансовую грамотность.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Представьте себе:
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы с легкостью привлекаете новые источники дохода.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы уверены в своей ценности и не боитесь просить достойную оплату
              за свой труд.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вы чувствуете себя финансово свободным и независимым.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Хватит откладывать финансовый успех на потом. Позвольте себе
            процветать. Запишитесь на бесплатную консультацию для увеличения
            Вашего дохода прямо сейчас!{" "}
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} type={content.pageTitle}/>
    </Layout>
  );
}
