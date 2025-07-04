import Layout from "../components/Layout/Layout";
import { InnerSatisfaction } from "../components/InnerSatisfaction";
import { CirclesList } from "../components/CirclesList/CirclesList";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { PurchaseCard } from "../components/PurchaseCard/PurchaseCard";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import secondary_preview_29 from "../images/secondary_preview_29.webp";
import { Helping } from "../components/Helping/Helping";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useRouter } from "next/router";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { CourseContent } from "../components/CourseContent/CourseContent";
import { ReasonCards } from "../components/ReasonCards/ReasonCards";
import { PurchaseSuccessWidget } from "../components/PurchaseSuccessWidget/PurchaseSuccessWidget";
import { VideoBlock } from "../components/VideoBlock/VideoBlock";
import { Warranty } from "../components/Warranty/Warranty";

export default function NonverbalProgramming() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const metaConfig = {
    title: "Невербальное программирование — Управляй эмоциями через тело",
    description:
      "Мгновенно сними тревожность, выключи раздражение, избавься от стыда и включи внутреннюю устойчивость с помощью микродвижений.",
    keywords:
      "невербальное программирование, управление эмоциями, тревожность, раздражение, стыд, внутренняя устойчивость",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <PurchaseSuccessWidget />
      <SecondaryPreview
        text={"УПРАВЛЯЙ ЖИЗНЬЮ ЧЕРЕЗ ЭМОЦИИ И ДОСТИГАЙ БОЛЬШЕГО"}
        subtext={
          `14 техник. 
          Мгновенный эффект.
          Быстрые движения вместо долгой терапии`
        }
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

      <ReasonCards
        reasonCards={[
          {
            description:
              "Коллега/начальник/подчинённый несёт чушь, ваша челюсть сжимается, хочется сорваться.",
          },
          {
            description:
              "Важные переговоры, вы волнуетесь, спина становится мокрой, голос дрожит.",
          },
          {
            description:
              "Попали в неловкую ситуацию, лицо краснеет, хочется «провалиться сквозь землю».",
          },
          {
            description:
              "Сроки горят, вы начинаете суетиться и терять фокус, страдает качество работы.",
          },
          {
            description:
              "Кто-то задел вас, сделал больно, вы злитесь и раз за разом прокручиваете в голове как надо было поступить.",
          },
          {
            description:
              "Внезапно наступает сексуальное возбуждение и отвлекает вас от работы.",
          },
          {
            description:
              "Кто-то другой попал в неловкую ситуацию, и вы не можете сдержать смех, хотя в моменте это некрасиво.",
          },
          {
            description:
              "Копится стресс и становится тяжело работать и отдыхать.",
          },
          {
            description:
              "Всё идёт не совсем гладко, появляется уныние, и вы начинаете терять уверенность.",
          },
          {
            description:
              "Вам нужно действовать, но в ключевой момент приходят сомнения и мешают вам двигаться вперёд.",
          },
          {
            description:
              "Пришло время сделать что-то, что поможет вам подняться на следующий уровень, но вас парализует страх.",
          },
          { 
            description: "Вам нужно выполнить задачу, но что-то вас отвлекает.",
          },
          {
            description: "Вы долго стоите в очереди и теряете терпение.",
          },
          {
            description: "Знаете, что постоянный стресс = болезни (давление, иммунитет, ЖКТ), но не можете его выключить?",
          },
          {
            description: "Ваше тело КРИЧИТ от дискомфорта? Пора дать ему простые команды и расслабиться.",
          },
        ]}
        title="вам это пригодится?"
        titleEmpty="Когда"
      />

      <VideoBlock
        title="Пример техники "
        titleEmpty="из курса"
        videoSrc="https://vkvideo.ru/video_ext.php?oid=-231430175&id=456239017&hd=2"
        videoTitle="Невербальное программирование - Бесплатные уроки"
      />

      {/* <AboutMe
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
      /> */}

      <Helping
        title="Как проходит "
        titleEmpty="обучение"
        blocks={[
          {
            id: 1,
            className: "item2",
            title: "Короткие видео (+- 1 минута)",
            desc: "Автор показывает приёмы без лишней теории – только «как делать»",
          },
          {
            id: 2,
            className: "item5",
            title: "Вы делаете упражнения во время просмотра уроков",
            desc: "Повторяете перед зеркалом и доводите до автоматизма",
          },
          {
            id: 3,
            className: "item4",
            title: "Используете памятку в формате PDF",
            desc: "С описанием техник для быстрого доступа в критический момент",
          },
          {
            id: 4,
            className: "item3",
            title: "Закрытый чат в телеграм",
            desc: "Задаёте вопросы и обмениваетесь опытом с другими участниками",
          },
          {
            id: 5,
            className: "item6",
            title: "Личная работа с автором курса",
            desc: "По системе нейротраблшутинга для успешного освоения методики",
          },
          {
            id: 6,
            className: "item1",
            title: "Доступ 24/7",
            desc: "Ваша «аптечка» всегда под рукой в телефоне",
          },
        ]}
      />

      <AnimatedLine />
      <CourseContent />
      
      <CirclesList
        {...{
          animation: true,
          title: "Курс для тех ",
          titleEmpty: "кому важно",
          items: [
            { title: "Управлять своими эмоциями" },
            { title: "Быть независимым от внешних обстоятельств" },
            { title: "Достигать высоких результатов без перенапряжения" },
            { title: "Иметь преимущество над другими" },
          ],
        }}
      />
      <div id="message" />
      <PurchaseCard />

      <Warranty
        title="Гарантия"
        description="Возврат 100% денег в течение первых 14-ти дней по любой причине, либо спустя 2 месяца если не будет результата."
      />

      <AnimatedLine />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"Хочешь дополнительную поддержку?"}
        type="Курс по невербальному программированию"
        description={`Оставь свои контакты, и мы обсудим индивидуальный формат и доведение до результата`}
      />
    </Layout>
  );
}
