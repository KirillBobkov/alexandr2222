import Layout from "../components/Layout/Layout";
import { InnerSatisfaction } from "../components/InnerSatisfaction";
import { CirclesList } from "../components/CirclesList/CirclesList";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import secondary_preview_29 from "../images/secondary_preview_29.webp";
import { Helping } from "../components/Helping/Helping";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { CourseContent } from "../components/CourseContent/CourseContent";
import { ReasonCards } from "../components/ReasonCards/ReasonCards";
import { ReasonCard } from "../components/ReasonCard/ReasonCard";
import { TarifCard } from "../components/TarifCard/TarifCard";
import { PurchaseSuccessWidget } from "../components/PurchaseSuccessWidget/PurchaseSuccessWidget";
import { VideoBlock } from "../components/VideoBlock/VideoBlock";
import { Warranty } from "../components/Warranty/Warranty";
import { TextReviews } from "../components/TextReviews/TextReviews";

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
      <PurchaseSuccessWidget />
      <SecondaryPreview
        text={"УПРАВЛЯЙ ЖИЗНЬЮ ЧЕРЕЗ ЭМОЦИИ И ДОСТИГАЙ БОЛЬШЕГО"}
        subtext={`14 техник 
          Мгновенный эффект
          Быстрые движения вместо долгой терапии`}
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
            description:
              "Знаете, что постоянный стресс = болезни (давление, иммунитет, ЖКТ), но не можете его выключить?",
          },
          {
            description:
              "Ваше тело КРИЧИТ от дискомфорта? Пора дать ему простые команды и расслабиться.",
          },
        ]}
        title="вам это пригодится?"
        titleEmpty="Когда"
        renderCard={({ card, index }) => (
          <ReasonCard key={index} card={card} index={index} />
        )}
      />

      <VideoBlock
        title="Пример техники "
        titleEmpty="из курса"
        videoSrc="https://vkvideo.ru/video_ext.php?oid=-231430175&id=456239017&hd=2"
        videoTitle="Невербальное программирование - Бесплатные уроки"
      />

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

      {/* <TextReviews /> */}

      <div id="message" />
      <ReasonCards
        reasonCards={[
          {
            title: "Базовый",
            tariff: "base",
            price: "4 990₽",
            features: [
              "Бессрочный доступ к урокам и обновлениям",
              "Памятка по всем урокам, в текстовом формате",
              // "Авторская релакс аудиомедитация в подарок"
            ],
            description: "Подходит для людей с высоким уровнем дисциплины и желанием развиваться самостоятельно."
          },
          {
            title: "Оптимальный",
            tariff: "optimal",
            price: "13 990₽",
            features: [
              "Бессрочный доступ к урокам и обновлениям",
              "Поддержка и обмен опытом в групповом чате",
              "Памятка по всем урокам, в текстовом формате",
              // "3 авторские аудиомедитации (релакс, мотивация, уверенность) в подарок"
            ],
            description: "Если вам интересно развиваться в сообществе единомышленников, иметь возможность задавать вопросы и делиться опытом — этот тариф для вас."
          },
          {
            title: "Премиум",
            tariff: "premium",
            price: "99 990₽",
            features: [
              "Бессрочный доступ к урокам и обновлениям",
              "Поддержка и обмен опытом в групповом чате",
              "Памятка по всем урокам, в текстовом формате",
              "8 персональных онлайн-сессий с автором. Через работу с познанием устраним корни проблем (травмы/блоки) и настроим ваше тело на применение методики в любой ситуации",
              // "3 авторские аудиомедитации (релакс, мотивация, уверенность) + 1 одна под запрос в подарок"
            ],
            description: "Для VIP клиентов, которым важен индивидуальный подход и максимально быстрый результат."
          }
        ]}
        title="Тарифы"
        renderCard={({ card, index }) => (
          <TarifCard key={index} card={card} index={index} />
        )}
      />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"ОСТАЛИСЬ ВОПРОСЫ?"}
        type="Курс по невербальному программированию"
        description={`Запишитесь на индивидуальную консультацию.`}
      />
    </Layout>
  );
}
