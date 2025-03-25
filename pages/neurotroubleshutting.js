import Layout from "../components/Layout/Layout";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Warranty } from "../components/Warranty/Warranty";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Suggest } from "../components/Suggests/Suggests";
import { Helping } from "../components/Helping/Helping";
import { Products } from "../components/Products/Products";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import secondary_preview_7 from '../images/secondary_preview_7.webp';
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { Questions } from "../components/Questions/Questions";
import { Final } from "../components/Final/Final";
import { Form } from "../components/Form/Form";
import { products as neurotroubleshuttingProducts } from "../consts/products";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";

export const questionsContent = {
  blocks: [
    {
      title: "Как это отличается от всего того, что я до этого видел?",
      answer: `Нейротраблшуттинг – это абсолютно новое направление, которое безопасно и быстро обеспечивает ощутимый результат. 
          Зачастую, достаточно всего одной сессии, чтобы вы стали лучшей версией себя. 
          При этом, а вам не нужно рассказывать о своём прошлом, то есть сохраняется приватность. 
          В случае отсутствия результата, я возвращаю вам 100% денег.`,
    },
    {
      title: "Что это мне даст?",
      answer: `Вы получаете гарантированное решение вашего вопроса, будь он связан со здоровьем, деньгами или отношениями. Ценность в сотни раз выше цены.`,
    },
    {
      title: "Как я узнаю, что это не обман?",
      answer: `Посмотрите отзывы моих заказчиков и убедитесь сами в реальности результатов моих проработок.`,
    },
    {
      title: "Что меня останавливает?",
      answer: `Люди часто боятся неизвестности, и это нормально. Посмотрите отзывы тех, кто уже «рискнул», заказал мои услуги и получил результат – это даст придаст вам уверенности в том, что я действительно помогаю людям.`,
    },
    {
      title: "Кто или что виновато в моих проблемах?",
      answer: `Большинство людей живёт плохо – факт. Учителя, родители, общество – никто не учил нас жить красиво, строить гармоничные отношения, грамотно следить за здоровьем и зарабатывать деньги, чаще всего они сами ничего из этого не умеют. Я помогу вам исправить их ошибки так, чтобы ваша жизнь изменилась к лучшему.`,
    },
    {
      title: "Почему именно сейчас?",
      answer: `Подумайте, сколько ежегодно вы не добираете в заработке, отношениях и здоровье, пока остаётесь в том состоянии, которое привело вас на это сайт. Жизнь одна, неужели ам не хочется сделать её красивой уже сейчас?`,
    },
    {
      title: "Почему я должен тебе доверять?",
      answer: `Результаты говорят сами за себя. То, как я помог себе и другим людям, по идее, считается чудом, но это реальность. Более того, напоминаю, вы получаете 100% возврат денег при отсутствии результата.`,
    },
    {
      title: "Как оно работает?",
      answer: `Расскажу только в общих чертах. Стоматолог ведь не посвящает вас во все детали, для вас они и не важны, главное – здоровые зубы. Здесь то же самое. Созваниваемся онлайн, вы закрываете глаза, делаем секретные техники, а потом у вас нет проблем, чувствуете себя отдохнувшим и довольным, фактически становитесь другим человеком.`,
    },
    {
      title: "Как начать?",
      answer: `Запишитесь на бесплатную консультацию. Далее, я свяжусь с вами, проведём предварительно короткое интервью. Если мы с и понравимся друг другу, дальнейшие шаги я расскажу вам лично.`,
    },
    {
      title: "Что я потеряю, если откажусь?",
      answer: `К сожалению, в таком случае вы потеряете возможность избавиться от своих проблем и продолжите дальше страдать. Что это если не предательство себя?`,
    },
  ],
}


const videos = [
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239192&hash=fc6f543804a18fff",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7895760833071&idx=2&type=39&tkn=M56cNKVKS2eNz_YBO5he2T9jdWM&fn=vid_l",
    name: 'Отзыв Булата Рустамовича о проработках с Александром "Интегралом" Васильевым',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239201&hash=21fab855e5d11724",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285451979311&idx=2&type=39&tkn=_jMrqV-BhCK-tbXnuUzkM1tM7Do&fn=vid_l",
    name: 'Отзыв Андрея о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239191&hash=344bfa2e09b67aa6",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7749927766575&idx=12&type=39&tkn=wU7VVedkp7QlCuStZ29SMqQSNt0&fn=vid_x",
    name: 'Отзыв Тины о проработке с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 14, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239188&hash=8a160ed8a99c6834",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673156733487&idx=13&type=39&tkn=Q8JRpXn2Vz83D9N5E57aw5QCUIQ&fn=vid_x",
    name: 'Отзыв Александра Дворянинова о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239186&hash=04dd114246320d37",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673155488303&idx=8&type=39&tkn=o9JorSfWjRpqk_VYHE3jw9nU0_I&fn=vid_x",
    name: 'Отзыв Дмитрия Афанасьева о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239187&hash=6a6e9fc7449f1510",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673156012591&idx=6&type=39&tkn=m9S6n3h5E9xZhBraLacW2jnP_Tg&fn=vid_x",
    name: 'Отзыв Сергея Хана о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239185&hash=d1b034b0ccc2b6d2",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673149262383&idx=9&type=39&tkn=EfhvQoeYxbOiNWqNgax2vu0la4M&fn=vid_x",
    name: 'Отзыв Кирилла Бобкова о работе Александра "Интеграла" Васильева',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239190&hash=a23c38103b4eb288",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673158765103&idx=15&type=39&tkn=HG3N2h6DiDmo9jGfOjBZWO-jRn8&fn=vid_x",
    name: 'Отзыв Никиты Цыпленкова о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239189&hash=3f37fe408dafc519",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=7673158044207&idx=11&type=39&tkn=tyaKcHE9DvZStOsL9Uf6fwCYgXs&fn=vid_x",
    name: 'Отзыв Ксении о работе с Александром "Интегралом" Васильевым',
    uploadDate: new Date("November 30, 2024").toISOString(),
  },
];

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Нейротраблшуттинг | Устранение тревоги, депрессии и психосоматики',
    description: "Проработка подсознательных блоков: тревожность, депрессия, фобии, психосоматика.",
    keywords: "нейротраблшуттинг, гипнотерапия, гипнотерапевт, НЛП, психосоматика, депрессия, тревожность, проработка страхов, экзорцизм, психология, гипноз, подсознательные блоки",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={"Нейротраблшуттинг"} image={secondary_preview_7} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Ваш ключ к жизни без страхов, ограничений и внутренних конфликтов
          </VisibilityManager>

          <VisibilityManager as="p">
            Устали годами бороться с проблемами, которые возвращаются снова и снова?
          </VisibilityManager>

          <VisibilityManager as="p">
            Психологи, медитации, врачи — вы уже пробовали всё. Но что, если решение кроется не в разговорах или таблетках, а в глубинах вашего подсознания?
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Нейротраблшуттинг — это метод, который:
            </h3>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Находит и устраняет корень проблем — от фобий до аллергии, от ночных кошмаров до хронической усталости.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Работает быстро: результат за 1-8 сессий. Не годы терапии, а фокус на решении.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Сохраняет приватность: мы не разбираем ваше прошлое — мы меняем его влияние на вас здесь и сейчас.
            </p>
          </VisibilityManager>

  

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_middle}>

              Как это работает?
            </h3>

            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Страхи, заложенные в детстве или даже до рождения.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Психосоматические реакции (аллергии, панические атаки).
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ограничивающие убеждения: «Я не достоин», «У меня не получится».
            </p>
          </VisibilityManager>
          <VisibilityManager as="div" className={contentStyles.textBlock}>
          <h3 className={contentStyles.title_middle}>
            Ваш результат
          </h3>

            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Свобода от того, что годами держало вас в клетке.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Гармония с собой и миром.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Энергия двигаться к целям без страха и сомнений.
            </p>
          </VisibilityManager>
        </div>
      </LineAnimation>
      <Suggest />
      <Helping href={{ pathname: '/neurotroubleshutting', hash: '#message'}} />
      <Warranty href={{ pathname: '/neurotroubleshutting', hash: '#message'}}/>
      <AnimatedLine />
      <VideoWidget videos={videos} />
      <Final
        title="Запишитесь на бесплатную консультацию"
        description="Узнайте причины своих проблем, способы их решения и возможные преграды на вашем пути к успеху!"
        buttonText="Записаться"
        buttonHref="/neurotroubleshutting#message"
      />
      <Products products={neurotroubleshuttingProducts} />
      <Questions questionsContent={questionsContent} />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        title={"Готовы жить лучше?"}
        type="Первая консультация (Страница: Нейротраблшуттинг)"
        description={`Запишитесь на бесплатную консультацию, и я свяжусь с вами в ближайшее время.

          Первая консультация 20 минут — бесплатно. 
          
          Подготовьте вопрос, который вас интересует, и я раскрою и решу вашу проблему, а вы уже сможете сделать вывод, обращаться ко мне в дальнейшем или нет.
        `}
      />
    </Layout>
  );
}
