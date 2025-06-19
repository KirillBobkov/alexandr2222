import Layout from "../components/Layout/Layout";
import { InnerSatisfaction } from "../components/InnerSatisfaction";
import { CirclesList } from "../components/CirclesList/CirclesList";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Final } from "../components/Final/Final";
import finalStyles from "../styles/finalContent.module.css";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import secondary_preview_29 from "../images/secondary_preview_29.webp";
import { Helping } from "../components/Helping/Helping";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { CourseContent } from "../components/CourseContent/CourseContent";
import { ReasonCards } from "../components/ReasonCards/ReasonCards";
import LinkButton from "../components/shared/LinkButton/LinkButton";

export default function NonverbalProgramming() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const metaConfig = {
    title: "Невербальное программирование — Управляй эмоциями через тело",
    description:
      "Мгновенно сними тревожность, выключи раздражение, избавься от стыда и включи внутреннюю устойчивость с помощью микродвижений.",
    keywords:
      "невербальное программирование, управление эмоциями, тревожность, раздражение, стыд, внутренняя устойчивость",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview
        text={"Освой невербальное программирование"}
        subtext={"Управляй эмоциями через тело легко"}
        image={secondary_preview_29}
      />

      <InnerSatisfaction
        titlePrefix="Что такое"
        titleSuffix="невербальное программирование?"
        description={
          <>
            Методика, основанная на простых, но точных движениях, которые влияют
            на эмоциональное состояние.
            <br />
            <br />
            Это работает быстрее, чем медитации, психологи и аффирмации — потому
            что воздействует напрямую на нейронные паттерны через тело.
          </>
        }
      />

      <AboutMe
        {...{
          title: "трансформируем?",
          titleEmpty: "Какие состояния мы ",
          items: [
            { title: "снять тревожность" },
            { title: "включить терпение" },
            { title: "убрать голод" },
            { title: "выключить раздражительность" },
            { title: "активировать концентрацию" },
            { title: "повысить стрессоустойчивость" },
            { title: "победить страх" },
            { title: "убрать суету" },
            { title: "отбросить сомнения" },
            { title: "отбиться от уныния" },
            { title: "отключить стыд" },
            { title: "включить смирение" },
            { title: "избавиться от обиды" },
          ],
        }}
      />

      <Helping
        title="Что внутри "
        titleEmpty="курса?"
        blocks={[
          {
            id: 1,
            className: "item2",
            title: "Вводный урок",
            desc: "Объясняет суть методики и подход к её освоению",
          },
          {
            id: 2,
            className: "item5",
            title: "12 видеоупражнений",
            desc: "YouTube, доступ по закрытым ссылкам",
          },
          {
            id: 3,
            className: "item4",
            title: "Финальный урок — чит-код",
            desc: "как применять движения в жизни, чтобы никто не заметил",
          },
        ]}
      />
      <AnimatedLine />
      <CourseContent />

      <ReasonCards />

      <CirclesList
        {...{
          animation: true,
          title: "Курс для всех ",
          titleEmpty: "кто хочет",
          items: [
            { title: "Быстро управлять своим состоянием" },
            { title: "Не зависеть от внешних обстоятельств" },
            { title: "Работать с эмоциями без слов и «разборов»" },
            { title: "Перестать бояться, раздражаться, суетиться" },
            { title: "Укрепить внутренний стержень и устойчивость" },
            { title: "Взять контроль над собой" },
          ],
        }}
      />
      <Final animation>
        <h2 className={finalStyles.title} style={{ marginTop: "0" }}>
          Стоимость курса
        </h2>
        <div className={finalStyles.price}>6 000 ₽</div>
        <ul
          className={finalStyles.description}
          style={{
            listStyle: "disc",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingLeft: "22px",
            textAlign: "left",
          }}
        >
          <li>Доступ к курсу навсегда — никакой спешки: возвращайтесь к урокам в любое время</li>
          <li>Всего 6000₽ за полный курс вместо многомесячных программ или консультаций</li>
          <li>Поддержка возможна, но не обязательна — курс самодостаточный и завершённый</li>
          <li>Материалы курса будут отправлены на почту или в Telegram в течение 24 часов после оплаты.</li>
        </ul>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
          cursor: "pointer"
        }}>
          <input
            type="checkbox"
            id="offer-checkbox"
            checked={isOfferAccepted}
            onChange={(e) => setIsOfferAccepted(e.target.checked)}
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              border: "2px solid var(--accent)",
              flexShrink: 0,
              backgroundColor: isOfferAccepted ? "var(--accent)" : "transparent"
            }}
          />
          <label 
            htmlFor="offer-checkbox"
            style={{
              fontSize: "13px",
              lineHeight: "16px",
              color: "var(--font-color)",
              cursor: "pointer",
              textAlign: "left"
            }}
          >
            Подтверждаю, что ознакомлен с{" "}
            <a
              href="/oferta.txt"
              target="_blank"
              style={{
                cursor: "pointer",
                color: "var(--accent)",
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              офертой
            </a>
          </label>
        </div>
  
        <div style={{ 
          opacity: isOfferAccepted ? 1 : 0.5,
          pointerEvents: isOfferAccepted ? "auto" : "none",
          transition: "opacity 0.3s ease"
        }}>
          <LinkButton href="https://yookassa.ru/">
            <span>Приобрести курс</span>
          </LinkButton>
        </div>
      </Final>
      <AnimatedLine />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"Хочешь дополнительную поддержку?"}
        type="Курс по невербальному программированию"
        description={`Оставь свои контакты, и мы обсудим индивидуальный формат и доведение до
          результата`}
      />
    </Layout>
  );
}
