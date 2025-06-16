import Layout from "../components/Layout/Layout";
import { InnerSatisfaction } from "../components/InnerSatisfaction";
import { CirclesList } from "../components/CirclesList/CirclesList";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Final } from "../components/Final/Final";
import enter_hole_1 from "../images/enter_hole_1.webp";
import finalStyles from "../styles/finalContent.module.css";
import Link from "next/link";
import contentStyles from "../styles/contentStyles.module.css";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import secondary_preview_7 from "../images/secondary_preview_7.webp";
import { Helping } from "../components/Helping/Helping";
import { Button } from "../components/shared/Button/Button";
import { Form } from "../components/Form/Form";
import { useState } from "react";

export default function NonverbalProgramming() {
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        text={"Невербальное программирование"}
        subtext={"Управляй эмоциями через тело."}
        image={secondary_preview_7}
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
          ],
        }}
      />

      <Final animation>
        <h2 className={finalStyles.title} style={{ marginTop: "0" }}>
        Сколько стоит?
        </h2>
        <div className={finalStyles.price}>6 000 ₽</div>
        <div className={finalStyles.description}>
        Доступ ко всем урокам без ограничений по времени.
        </div>
        <Button
          className={contentStyles.message}
          href={{ pathname: "/nonverbal-programming", hash: "#message" }}
          status="Приобрести курс"
        />
      </Final>
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"Хочешь дополнительную поддержку?"}
        type="Курс по невербальному программированию"
        description={`Напиши в Telegram — обсудим индивидуальный формат и доведение до
          результата`}
      />
    </Layout>
  );
}
