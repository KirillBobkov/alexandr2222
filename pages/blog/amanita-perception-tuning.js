import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_21 from "../../images/secondary_preview_21.webp";
import { Button } from "../../components/shared/Button/Button";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Мухомор и тонкая настройка восприятия: Как гриб открывает скрытые измерения реальности",
    description:
      "Глубокий анализ влияния мухомора на механизмы восприятия и его роль в расширении сознания и улучшении качества жизни",
    keywords:
      "мухомор, восприятие, сознание, психология, трансформация, осознанность, микродозинг",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview 
        text="Мухомор и тонкая настройка восприятия" 
        image={secondary_preview_21} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Мухомор и тонкая настройка восприятия: Как гриб открывает скрытые измерения реальности
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухоморные практики чаще всего обсуждаются в контексте исцеления, духовных переживаний и трансформации личности. Однако мало кто говорит о том, как именно этот древний союзник изменяет сам механизм восприятия, позволяя видеть мир по-новому.
          </VisibilityManager>

          <VisibilityManager as="p">
            Сегодня мы разберёмся, почему Мухомор делает восприятие более точным, многослойным и живым, а также как использовать этот эффект для улучшения качества жизни.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Обычное восприятие vs. «настроенное» восприятие
          </VisibilityManager>

          <VisibilityManager as="p">
            Человеческий мозг привык обрабатывать мир в режиме «экономии энергии». Мы видим только то, что уже знакомо, и игнорируем всё, что не вписывается в привычные шаблоны. Представьте себе радио, настроенное на одну частоту, в то время как вокруг звучат сотни других волн.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор действует как тюнер, позволяя настроиться на более широкий диапазон реальности.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Цвета становятся глубже, детали – чётче, а звук – объёмнее.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вещи, кажущиеся ранее незначительными, обретают смысл.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Простые повседневные моменты наполняются ощущением «настоящего присутствия».
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Это не просто изменённое состояние сознания — это пробуждение к более полному восприятию жизни.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как Мухомор убирает «шум» ума?
          </VisibilityManager>

          <VisibilityManager as="p">
            Обычное состояние сознания перегружено внутренним диалогом, автоматическими реакциями и фоновыми страхами. Это как если бы вы пытались слушать музыку на старой плёнке, покрытой шумами и помехами.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор мягко выключает лишний шум, оставляя чистое восприятие.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Уходит ментальная зацикленность на прошлых неудачах или тревоге о будущем.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Внимание обостряется, позволяя видеть суть вещей без лишней ментальной интерпретации.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Появляется ощущение живого контакта с миром, будь то общение с природой, творческий процесс или глубокий разговор.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Практические аспекты работы с восприятием
          </VisibilityManager>

          <VisibilityManager as="p">
            Эффект можно использовать не только в церемониях, но и в повседневной жизни:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              1.
              {"  "}
              Для улучшения концентрации и творческого потока.
            </p>
            <p className={contentStyles.textDescription}>
              2.
              {"  "}
              Для более глубокого погружения в медитативные практики.
            </p>
            <p className={contentStyles.textDescription}>
              3.
              {"  "}
              Для развития осознанности в повседневных действиях.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Безопасность и осознанность
          </VisibilityManager>

          <VisibilityManager as="p">
            Важно помнить, что работа с Мухомором требует:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Правильной подготовки и знания дозировок.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Чёткого намерения и уважительного отношения.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Понимания своего текущего состояния и готовности к изменениям.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Заключение
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — это не просто «психоделик», а инструмент тонкой настройки восприятия. Он помогает видеть реальность более глубоко и ясно, убирая ментальные фильтры, которые мешают ощущать жизнь во всей её полноте.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вас привлекает такой подход — я здесь, чтобы помочь вам освоить безопасную и осознанную работу с Мухомором. Это не магия и не эзотерика, а практика, проверенная веками.
          </VisibilityManager>

          <VisibilityManager as="p">
          P.S.  Чем чище восприятие, тем богаче становится сама жизнь. Иногда важно не «добавить» что-то, а просто убрать лишний шум.
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Мухомор и тонкая настройка восприятия (статья)"
        title={"Консультация по работе с Мухомором"}
        description={`Хотите узнать больше о безопасной работе с Мухомором и развитии восприятия? Запишитесь на консультацию, и мы обсудим, как этот древний союзник может помочь именно вам.`}
      />
    </Layout>
  );
} 