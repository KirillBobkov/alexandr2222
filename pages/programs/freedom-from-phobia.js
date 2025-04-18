import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_14 from "../../images/secondary_preview_14.webp"; // You might want to use a different image
import { Button } from "../../components/shared/Button/Button";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Свобода от фобии - Александр "Интеграл" Васильев',
    pageTitle: "Свобода от фобии",
    description: "Жизнь без страха за 1-8 сессий",
    keywords: "фобия, страх, нейротраблшуттинг, психотерапия, устранение фобий",
    content: "",
    href: "/programs/freedom-from-phobia",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={metaConfig.pageTitle} image={secondary_preview_14} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Представьте, что завтра вы сможете делать то, что сегодня кажется невозможным.
          </VisibilityManager>

          <VisibilityManager as="p">
            Вы избегаете высоты, замкнутых пространств или общения с людьми? 
            Страх парализует вас, превращая жизнь в череду «нельзя» и «опасно»? 
            Пора вернуть себе контроль.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему фобии не уходят сами?
          </VisibilityManager>

          <VisibilityManager as="p">
            Фобия — это не просто страх. Это глубокая программа подсознания, которая 
            кричит: «Опасно! Беги!». Она могла сформироваться из-за:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Детской травмы (даже той, которую вы не помните)
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Внутриутробного стресса (например, эмоций матери во время беременности)
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Унаследованных» страхов (опыт прошлых поколений)
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Обычные методы (разговоры, медикаменты, дыхательные техники) дают временный 
            эффект, потому что не устраняют корень проблемы.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как работает нейротраблшуттинг?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мы не боремся со страхом — мы стираем саму причину его появления.
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Диагностика за 1 сессию"}
            </h3>
            <p className={contentStyles.textDescription}>
              Находим событие или установку, которая запустила фобию. Часто это то, 
              что вы даже не осознаёте.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Проработка на уровне подсознания"}
            </h3>
            <p className={contentStyles.textDescription}>
              Без гипноза и болезненных воспоминаний. Мы перепрограммируем реакцию 
              вашего мозга на раздражитель.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Результат: жизнь без ограничений"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы больше не бежите от страха — вы просто перестаёте его чувствовать.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что вы получите?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Свободу передвижения: Летайте, плавайте, водите машину без паники
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уверенность: Перестаньте избегать людей, мест и ситуаций
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Энергию: Тратьте силы на жизнь, а не на борьбу со страхом
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему стоит выбрать эту программу?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Без лекарств и гипноза: Работаем только с вашим подсознанием
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Конфиденциально: Не нужно рассказывать о травмах — мы найдём их без вашего участия
            </p>
            <p className={contentStyles.textDescription}>
            <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гарантия результата: Если проблема не уйдёт за 8 сессий — я возвращаю вам деньги
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как начать?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
             1.
              {"  "}
              Оставьте заявку на сайте
            </p>
            <p className={contentStyles.textDescription}>
             2.
              {"  "}
              Пройдите диагностику (онлайн или очно)
            </p>
            <p className={contentStyles.textDescription}>
             3.
              {"  "}
              Начните жить без страха уже через несколько дней
            </p>
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type={'Программа: ' + metaConfig.pageTitle}
        title={"Готовы начать жизнь без страха?"}
        description={`Оставьте заявку, и я свяжусь с вами в ближайшее время.
        `}
      />
    </Layout>
  );
} 