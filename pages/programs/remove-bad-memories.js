import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_5 from '../../public/images/secondary_preview_5.webp';
export default function() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig =  {
    title: 'Отпустить негатив - Александр "Интеграл" Васильев',
    pageTitle: "Отпустить негатив",
    description: "Удалить плохие воспоминания",
    keywords: "очищение интеграл ретрит грибы дурман",
    content: '',
    href: '/remove-bad-memories'
};

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={metaConfig.pageTitle} image={secondary_preview_5} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Негативный опыт прошлого может блокировать ваш потенциал и мешать
            вам двигаться вперед. Нейротраблшуттинг предлагает эффективный
            способ работы с подсознанием для переработки травмирующих событий и
            освобождения от ограничивающих убеждений.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что вас ждёт
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

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как это работает?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мы работаем с вашим подсознанием, чтобы найти источник негатива. Вы
            узнаете, как прошлые события влияют на вашу жизнь сегодня, и
            получитe инструменты для их трансформации. Это не просто разговорная
            терапия — это мощный процесс, который мгновенно помогает вам
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
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} type={metaConfig.pageTitle}  title={"Готовы жить лучше?"}
        description={`Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время.

          Первая консультация 20 минут — бесплатно. 
          
          Подготовьте вопрос, который вас интересует, и я раскрою и решу вашу проблему, а вы уже сможете сделать вывод, обращаться ко мне в дальнейшем или нет.
        `}/>
    </Layout>
  );
}
