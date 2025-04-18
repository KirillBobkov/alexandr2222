import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_19 from "../../images/secondary_preview_19.webp";
import { Button } from "../../components/shared/Button/Button";
export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Для чего нужна интеграция после мухоморного погружения?",
    description:
      "Как избежать десоциализации и других рисков после духовного опыта с мухомором через грамотную интеграцию полученных инсайтов",
    keywords:
      "мухомор, интеграция, трип, духовный опыт, десоциализация, эзотерика, осознанность",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text="Интеграция после мухоморного погружения" image={secondary_preview_19} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Для чего нужна интеграция после Мухоморного погружения?
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухоморный опыт часто связан с интенсивными духовными переживаниями, переосмыслением ценностей и границ реальности. Однако, если этот опыт не интегрируется в повседневную жизнь, возникают риски:
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            1.
            {"  "}
            Уход в эзотерику как форма эскапизма.
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            {"  "}
            Человек может начать воспринимать материальный мир как «иллюзию», теряя интерес к работе, отношениям и обязанностям. Вместо того чтобы применять инсайты для улучшения жизни, он погружается в духовные поиски, игнорируя практические аспекты существования.
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            2.
            {"  "}
            Дезорганизация жизненных целей.
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            {"  "}
            Резкий пересмотр ценностей без плавной интеграции приводит к внутреннему конфликту. Например, офисный сотрудник, переживший мистический опыт, может внезапно бросить карьеру, решив «жить в гармонии с природой», но без ресурсов и плана это оборачивается бедностью и маргинализацией.
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            3.
            {"  "}
            Разрушение социальных связей.
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            {"  "}
            Окружение часто не понимает радикальных изменений в поведении. Человек, говорящий на языке символов и «высших истин», теряет контакт с близкими, что ведёт к изоляции.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Сценарии десоциализации: от продвинутого человека к маргиналу
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              «Духовный бомж»
            </h3>
            <p className={contentStyles.textDescription}>
              Потеря работы, жилья, накоплений из-за убеждения, что «деньги и быт — это низковибрационные энергии». Человек существует на обочине общества, оправдывая свою ситуацию «духовным путём».
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Конфликт с реальностью
            </h3>
            <p className={contentStyles.textDescription}>
              Отрицание научных фактов, медицинской помощи, социальных норм под влиянием идей, полученных в погружении. Например, отказ от лечения болезни, так как «тело должно очиститься само».
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Зависимость от духовных практик
            </h3>
            <p className={contentStyles.textDescription}>
              Постоянные поиски «следующего откровения» через повторные погружения, медитации, ритуалы — вместо решения насущных проблем.
            </p>
          </VisibilityManager>

          
          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Психические риски, усугубляющие ситуацию
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Дереализация/деперсонализация
            </h3>
            <p className={contentStyles.textDescription}>
              Ощущение нереальности мира или собственного «Я» мешает взаимодействовать с социумом.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Паранойя или мания избранности
            </h3>
            <p className={contentStyles.textDescription}>
              Человек убеждён, что обладает «тайным знанием», недоступным другим, что ведёт к конфликтам и отчуждению.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Эмоциональная нестабильность
            </h3>
            <p className={contentStyles.textDescription}>
              Перепады настроения, неспособность концентрироваться на задачах, апатия — последствия непереработанного опыта.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как избежать разрушительных последствий?
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Работа с проводником
            </h3>
            <p className={contentStyles.textDescription}>
              Опытный наставник помогает интерпретировать опыт, отделяя ценные инсайты от иллюзий. Он направляет процесс интеграции, не позволяя уйти в крайности.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Постепенное внедрение изменений
            </h3>
            <p className={contentStyles.textDescription}>
              Не стоит рушить привычную жизнь радикально. Начните с малого: внедрите одну полезную привычку, пересмотрите отношение к работе, не отказываясь от неё сразу.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Баланс духовного и материального
            </h3>
            <p className={contentStyles.textDescription}>
              Используйте практики для улучшения качества жизни, а не бегства от неё. Например, медитация для снижения стресса на работе, а не для отрицания карьеры.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Поддержка социума
            </h3>
            <p className={contentStyles.textDescription}>
            Обсуждайте опыт с проводником и понимающими тему людьми. Это помогает оставаться «заземлённым» и проверять свои идеи на адекватность.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Отказ от повторных погружений без интеграции
            </h3>
            <p className={contentStyles.textDescription}>
              Не используйте Мухомор как «костыль» от реальности. Каждый опыт требует времени на осмысление.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Необходимо помнить!
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухоморный ретрит — инструмент, а не цель. Его ценность — в трансформации, которая делает жизнь осознаннее, гармоничнее и эффективнее. Но без ответственного подхода он может стать ловушкой, где духовные поиски подменяют собой саму жизнь.
          </VisibilityManager>

          <VisibilityManager as="p">
            Только опытный проводник может грамотно провести интеграцию и помочь достичь баланса между «духовным» и «земным». Выбирая проводника, будьте максимально внимательны — от этого выбора зависит ваша судьба.
          </VisibilityManager>

          <VisibilityManager as="p">
            P.S. Истинная духовность не противоречит успеху. Она учит не бежать от мира, а менять его, начиная с себя.
          </VisibilityManager>

          <VisibilityManager as="p">
            В конечном итоге интеграция учит главному: жить не частями, а цельно. Не «должен/нельзя», а «хочу/выбираю». И в этом — истинное освобождение.
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
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Интеграция после мухоморного погружения (статья)"
        title={"Безопасное путешествие в мир мухомора"}
        description={`Грамотная интеграция мухоморного опыта — ключ к истинной трансформации. Запишитесь на консультацию, и я помогу вам извлечь максимальную пользу из вашего духовного путешествия.
          
          Ваше развитие может быть гармоничным — и я знаю, как этого достичь.
        `}
      />
    </Layout>
  );
} 