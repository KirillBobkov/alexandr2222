import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_22 from "../../images/secondary_preview_22.webp";
import { Button } from "../../components/shared/Button/Button";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Аллергия — это не приговор: психосоматические причины и их устранение",
    description:
      "Глубокий анализ психосоматических причин аллергии и как нейротраблшуттинг помогает людям избавиться от нее навсегда",
    keywords:
      "аллергия, психосоматика, нейротраблшуттинг, подсознание, здоровье, психология",
    seoContent: "Профессиональный нейротраблшуттер предлагает эффективный прогресс у меньшении аллергии через работу с подсознанием. Узнайте, как навсегда избавиться от аллергии без таблеток и уколов.  Cпециалист по нейротраблшуттингу поможет устранить психосоматические причины аллергических реакций. Работаем с аллергией любой сложности: пищевая аллергия, поллиноз, аллергия на животных, бытовая аллергия. Безопасные и проверенные методики нейротраблшуттинга для лечения аллергии у взрослых и детей. Запишитесь на консультацию к опытному нейротраблшуттеру и забудьте об аллергии. Гарантированный результат через работу с подсознанием. Более 500 успешных случаев излечения от аллергии. Индивидуальный подход и профессиональная помощь в избавлении от аллергических реакций. Современные методы нейротраблшуттинга для устранения первопричин аллергии.",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview 
        text="Аллергия — это не приговор" 
        image={secondary_preview_22} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Аллергия — это не приговор: психосоматические причины и их устранение
          </VisibilityManager>

          <VisibilityManager as="p">
            Аллергия воспринимается многими как неизлечимое состояние, с которым остаётся лишь смириться. Врачи предлагают таблетки, уколы, диеты — всё это помогает на время облегчить симптомы, но не устраняет саму проблему.
          </VisibilityManager>

          <VisibilityManager as="p">
            Однако, если взглянуть глубже, становится ясно: аллергия — это не просто реакция тела, а сигнал подсознания, который можно расшифровать и устранить.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Аллергия и подсознание: в чём связь?
          </VisibilityManager>

          <VisibilityManager as="p">
            Тело человека напрямую связано с его эмоциональным состоянием. Каждое заболевание, включая аллергию, несёт в себе скрытый смысл. Оно показывает, что внутри есть конфликт, который сознание не замечает, но который отчётливо ощущает организм.
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему возникает аллергия?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Подавленные эмоции. Часто аллергия формируется в детстве, когда ребёнок сталкивается с сильными переживаниями, но не может их выразить.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Защитный механизм. Иногда аллергия служит способом «оградиться» от чего-то неприятного.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Родительские установки. Дети часто перенимают не только модели поведения родителей, но и их болезни.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как нейротраблшуттинг помогает избавиться от аллергии?
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшуттинг — это метод, который позволяет работать с глубинными установками, страхами и внутренними конфликтами, создающими аллергические реакции.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Диагностика подсознательных причин. Я помогаю выявить, с чем связана аллергия.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Перепрограммирование реакции организма. Через работу с подсознанием мы устраняем саму причину.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Закрепление изменений. Человек замечает, как аллергическая реакция ослабевает и исчезает.
            </p>
          </VisibilityManager>
          <p
              style={{
                fontSize: "12px",
                fontStyle: "italic",
                
                
              }}
            >
              Метод не является медицинским и не заменяет консультации
              специалиста
            </p>

          <div style={{ height: '1px' }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Реальные результаты: можно ли избавиться от аллергии навсегда?
          </VisibilityManager>

          <VisibilityManager as="p">
            Ответ — да. Я работал с людьми, которые годами страдали от аллергии на пыльцу, животных, еду, запахи — и полностью избавились от неё. После проработки они спокойно едят продукты, которых раньше избегали, держат дома кошек и гуляют в сезон цветения без страха перед приступом.
          </VisibilityManager>

          <VisibilityManager as="p">
            В отличие от традиционной медицины, которая предлагает лишь временное снятие симптомов, нейротраблшуттинг устраняет первопричину, благодаря чему аллергия уходит навсегда.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы устали жить с ограничениями и хотите освободиться от аллергии, это возможно. Позвольте себе шагнуть в жизнь, где ваше тело больше не сопротивляется, а живёт в гармонии с окружающим миром.
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Аллергия — это не приговор (статья)"
        title="Консультация по избавлению от аллергии"
        description="Хотите узнать, как избавиться от аллергии через работу с подсознанием? Запишитесь на консультацию, и мы обсудим, как нейротраблшуттинг может помочь именно вам."
      />
    </Layout>
  );
} 