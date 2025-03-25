import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_4 from "../../images/secondary_preview_4.webp";
import { Button } from "../../components/shared/Button/Button";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Увеличить заработок - Александр "Интеграл" Васильев',
    pageTitle: "Увеличить заработок",
    description: "Увеличить заработок",
    keywords: "очищение интеграл ретрит грибы дурман",
    content: "",
    href: "/programs/grow-money",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview
        text={metaConfig.pageTitle}
        image={secondary_preview_4}
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Вы работаете усердно, но ваш доход не растет так, как вам хотелось
            бы? Вы знаете, что заслуживаете большего.
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваше отношение к деньгам формируется на подсознательном уровне.
            Возможно, у вас есть убеждения, которые ограничивают ваш финансовый
            рост, например, "деньги достаются тяжелым трудом" или "большие
            деньги – это опасно".{" "}
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшуттинг - это мощный инструмент, который позволяет выявить
            и устранить эти подсознательные ограничения. Я помогу вам
            перепрограммировать установки в отношении денег, открыть новые
            возможности и реально начать зарабатывать больше.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Результаты, которые вы получите
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

          <div style={{ height: "1px" }} />
          <Button
            className={contentStyles.message}
            href={{ hash: "#message" }}
            status="Записаться"
          />

          <div style={{ height: "1px" }} />
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
            вашего дохода прямо сейчас!{" "}
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type={'Программа: ' + metaConfig.pageTitle}
        title={"Готовы жить лучше?"}
        description={`Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время.

          Первая консультация 20 минут — бесплатно. 
          
          Подготовьте вопрос, который вас интересует, и я раскрою и решу вашу проблему, а вы уже сможете сделать вывод, обращаться ко мне в дальнейшем или нет.
        `}
      />
    </Layout>
  );
}
