import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import secondary_preview_10 from "../images/secondary_preview_10.webp";
import { Final } from "../components/Final/Final";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { Questions } from "../components/Questions/Questions";



const videos = [
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239202&hash=3d55b190e311b0e6",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8289797409327&idx=14&type=39&tkn=CVnXi5ILpSTIee7srOJvmd8ptIk&fn=vid_x",
    name: 'Отзыв Алексея о мухоморном ретрите в Казани',
    uploadDate: new Date("March 14, 2025").toISOString(),
  },

  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239200&hash=1f59e4c38e95320f",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285454010927&idx=13&type=39&tkn=eg0RhO-KpcZbQcdGGWmyi5ks118&fn=vid_l",
    name: 'Отзыв Айдара о Мухоморном ретрите в Казани',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239195&hash=c7ee923a88bf9b4e",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285396077103&idx=0&type=39&tkn=SSoFVhoZ0lQOctJ6vjF6OwmE2lY&fn=vid_l",
    name: 'Отзыв Вероники о Мухоморном ретрите в Казани',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239199&hash=16d0076dfe68de70",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285457877551&idx=5&type=39&tkn=t4ee7KnrznQu1Xjv3VQZ5V1X0us&fn=vid_l",
    name: 'Отзыв Кирилла о Мухоморном ретрите в Казани',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239198&hash=3d85099eca3aead0",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285432580655&idx=7&type=39&tkn=JSqPlkPTxNZtEx7xA1YL5UUiegs&fn=vid_l",
    name: 'Отзыв Игоря о Мухоморном ретрите в Казани',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239197&hash=20f58a9af5b24acf",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285427599919&idx=15&type=39&tkn=rI9YJkYSMhbD588WULwlAN7EdKU&fn=vid_l",
    name: 'Отзыв Булата о Мухоморном ретрите в Казани',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },

  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239194&hash=4e6c5032e0306911",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285376285231&idx=0&type=39&tkn=Qn5Sjxdkq1-WeKVypbSloCMph4g&fn=vid_l",
    name: 'Отзыв Андрея о Мухоморном ретрите в Казани',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
  {
    link: "https://vkvideo.ru/video_ext.php?oid=290538287&id=456239196&hash=9e93dff6cda11e19",
    thumbnailUrl:
      "https://i.mycdn.me/getVideoPreview?id=8285423798831&idx=10&type=39&tkn=S0XDiAMyHgOjpCL3c2nuIizK53Y&fn=vid_l",
    name: 'Отзыв Никиты о Мухоморном ретрите в Казани',
    uploadDate: new Date("March 13, 2025").toISOString(),
  },
];


export const questionsContent = {
  blocks: [
    {
      title: "Что такое мухоморный ретрит?",
      answer: `Мухоморный ретрит — это возможность глубоко погрузиться в себя, восстановить связь с природой, поправить здоровье и получить новый опыт. 
      
      Вы сможете узнать и исследовать себя настоящих, освободиться от внутренних блоков и ощутимо улучшить качество жизни.`,
    },
    {
      title: "Кому подойдёт этот ретрит?",
      answer: `Этот ретрит для вас, если:
          - Вы чувствуете, что застряли на одном месте и не знаете как и куда двигаться дальше
          - Вы хотите лучше понять себя и свои цели
          - Вам понятен вектор развития, но дела идут тяжело и/или ничего не получается
          - Вы ищете способы справиться с внутренними страхами и ограничениями
          - Вы готовы к трансформации и новому опыту
          - Вы желаете качественно отдохнуть и обрести гармонию с собой и миром`,
    },
    {
      title: "Безопасно ли это?",
      answer: `Да, ваша безопасность — мой главный приоритет.
          - Я лично сопровождаю каждого участника на всех этапах
          - Дозировки и процесс строго контролируются
          - Я создаю поддерживающую атмосферу, где вы будете чувствовать себя комфортно и защищённо`,
    },
    {
      title: "Что вы получаете от участия?",
      answer: `- Глубокое очищение, понимание себя и своего предназначения
          - Освобождение от страхов, тревог и внутренних блоков
          - Новый взгляд на жизнь и свои возможности
          - Укрепление здоровья
          - Состояние гармонии`,
    },
    {
      title: "Как проходит ретрит?",
      answer: `- Мы начинаем с подготовки: я помогаю вам грамотно подготовиться и настроиться на церемонию
          - Основная часть включает взаимодействие с Мухомором в безопасной и комфортной обстановке
          - Завершаем интеграцией: я помогаю вам осмыслить полученный опыт и грамотно применить его в жизни`,
    },
    {
      title: "Нужно ли иметь опыт взаимодействия с Мухомором?",
      answer: `Нет, опыт не обязательно. Я работаю как с новичками, так и с теми, кто уже знаком с подобными практиками. Главное — ваше доверие.`,
    },
    {
      title: "Что взять с собой?",
      answer: `- Домашнюю одежду
          - Душевые принадлежности
          - Открытость к новому опыту`,
    },
    {
      title: "Где и когда проходит ретрит?",
      answer: `Ретрит проводится в загородной резиденции, недалеко от Казани. Даты согласовываются индивидуально, исходя из моего расписания и ваших пожеланий.`,
    },
    {
      title: "Как записаться?",
      answer: `Просто оставьте заявку на сайте, и я свяжусь с вами.`,
    },
  ],
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Мухоморный ретрит — путь к духовному и физическому исцелению",
    description:
      "Священная церемония с использованием Мухомора (Amanita muscaria) для духовного роста и терапевтических целей",
    keywords:
      "мухомор, ретрит, духовные практики, исцеление, церемония, шаманизм",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview
        text="Мухоморный ретрит в Казани"
        image={secondary_preview_10}
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Мухоморный ретрит — это практика, связанная с использованием
            Мухомора (Amanita muscaria) в духовных и терапевтических целях.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор содержит психоактивные вещества, такие как мусцимол и
            иботеновая кислота, которые могут быть как полезными, так и
            опасными.
          </VisibilityManager>

          <VisibilityManager as="p">
            Ниже я подробно опишу пользу, реальные результаты, исторические и
            современные примеры, а также риски, связанные с мухоморным трипом.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Польза и результаты мухоморного ретрита
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Духовное пробуждение и мистический опыт
            </h3>
            <p className={contentStyles.textDescription}>
              Люди часто сообщают о глубоких духовных переживаниях, явном
              чувстве единства со Вселенной и Высшими Силами.
            </p>
            <p className={contentStyles.textDescription}>
              Такие переживания приводят к переоценке жизненных ценностей,
              усилению чувства благодарности и осознанности.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Эмоциональное исцеление
            </h3>
            <p className={contentStyles.textDescription}>
              Мухомор способствует высвобождению подавленных эмоций,
              освобождению от травм и страхов.
            </p>

            <p className={contentStyles.textDescription}>
              Ретрит помогает людям справиться с депрессией, тревогой и даже
              посттравматическим стрессовым расстройством (ПТСР).
            </p>
            <p className={contentStyles.textDescription}>
              После Священной Церемонии, человек чувствует себя спокойным и
              уравновешенным.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Физическое оздоровление
            </h3>
            <p className={contentStyles.textDescription}>
              Мухомор используется для лечения боли, воспалений и даже
              хронических заболеваний.
            </p>

            <p className={contentStyles.textDescription}>
              На данный момент, собирается доказательная база эффективности
              Мухомора в исцелении людей от заболеваний, признанных
              неизлечимыми.
            </p>
            <p className={contentStyles.textDescription}>
              Участники ретритов отмечают улучшение сна и общего самочувствия.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Личностный рост
            </h3>
            <p className={contentStyles.textDescription}>
              Мухомор помогает человеку лучше понять себя, свои цели и мотивы,
              открывает истинное предназначение.
            </p>
            <p className={contentStyles.textDescription}>
              Приводит к позитивным изменениям в образе жизни, карьере и
              отношениях.
            </p>
            <p className={contentStyles.textDescription}>
              После мухоморного ретрита, люди отмечают повышение личной
              эффективности и ясности мышления.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Связь с природой
            </h3>
            <p className={contentStyles.textDescription}>
              Церемония проводится за городом, в комфортном, спокойном и
              безопасном месте, что позволяет человеку полноценно отдохнуть и
              прочувствовать гармонию с самим собой и Миром.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} /> 
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Исторические примеры
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Сибирь и шаманизм
            </h3>
            <p className={contentStyles.textDescription}>
              Мухоморы издавна используются сибирскими шаманами в ритуалах для
              общения с духами, предсказания будущего и исцеления.
            </p>
            <p className={contentStyles.textDescription}>
              Шаманы употребляют мухоморы, чтобы войти в изменённое состояние
              сознания и путешествовать в "другие миры".
            </p>
            <p className={contentStyles.textDescription}>
              Издревле, в славянской культуре Мухомор также используется для
              повышения выносливости охотников.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Викинги
            </h3>
            <p className={contentStyles.textDescription}>
              Принято считать, что викинги использовали мухоморы для повышения
              боевого духа и бесстрашия перед сражениями.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Индейские племена
            </h3>
            <p className={contentStyles.textDescription}>
              Некоторые индейские племена Северной Америки использовали мухоморы
              в ритуалах для духовного очищения и исцеления.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} /> 
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Современные примеры
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Ретриты в Казани
            </h3>
            <p className={contentStyles.textDescription}>
              В последние годы, мухоморные ретриты набирают всё большую
              популярность.
            </p>
            <p className={contentStyles.textDescription}>
              Я, Александр «Интеграл» Васильев, помогаю участникам безопасно
              пройти через опыт.
            </p>
            <p className={contentStyles.textDescription}>
              После мухоморного ретрита, люди освобождаются от зависимостей,
              депрессии и находят свой истинный смысл жизни.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Западные эксперименты
            </h3>
            <p className={contentStyles.textDescription}>
              На Западе Мухоморы изучаются в контексте психотерапии и лечения
              психических расстройств. Некоторые люди используют их для
              самопознания и духовного роста.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} /> 
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как это происходит
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Подготовка
            </h3>
            <p className={contentStyles.textDescription}>
              Я помогаю людям пройти подготовку, которая включает диету, работу
              с подсознанием и настройку на предстоящий опыт. Это помогает
              сделать трип спокойнее и усилить пользу.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Ритуал
            </h3>
            <p className={contentStyles.textDescription}>
              Мухоморы употребляются в индивидуальной дозировке, в виде сомы, с
              добавлением других Растений-Учителей, разрешённых в Российской
              Федерации.
            </p>
            <p className={contentStyles.textDescription}>
              Процесс сопровождается определёнными ритуалами, направленными на
              очищение и исцеление человека, пробуждение его истинного Духа. Эти
              ритуалы я получил в трипе от Высших Сил, и они действительно
              помогают - смотрите отзывы.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Интеграция
            </h3>
            <p className={contentStyles.textDescription}>
              После ретрита, участники обсуждают свой трип с проводником и
              получают помощь в конструктивной интеграции полученного опыта в
              повседневную жизнь.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} /> 
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Опасность и побочные эффекты
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Токсичность
            </h3>
            <p className={contentStyles.textDescription}>
              Мухоморы содержат токсичные вещества, которые могут вызвать
              отравление, рвоту, головокружение и даже смерть при неграмотном
              использовании. Именно поэтому, я настоятельно призываю вас не
              употреблять Мухомор самостоятельно.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Юридические риски
            </h3>
            <p className={contentStyles.textDescription}>
              В Российской Федерации, Мухомор разрешён на законодательном
              уровне, и его использование абсолютно легально.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} /> 
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Заключение
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор является Величайшим источником духовного, эмоционального и
            физического исцеления.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор помогает человеку раскрыться максимально, отбросить всё
            лишнее и прийти к счастливой благодатной жизни и изобилию.
          </VisibilityManager>

          <VisibilityManager as="p">
            После трипа, человек испытывает «самые приятные ощущения в жизни» -
            прямая цитата одного из участников.
          </VisibilityManager>

          <VisibilityManager as="p">
            При этом, неграмотное взаимодействие с Мухомором сопряжено с
            серьёзными рисками.
          </VisibilityManager>

          <VisibilityManager as="p">
            Успешный опыт зависит от правильной подготовки, дозировки и
            поддержки опытного проводника.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы рассматриваете участие в мухоморном ретрите, важно тщательно
            изучить все отзывы, проконсультироваться с проводником и учитывать
            свои индивидуальные особенности.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — это великий учитель и целитель, но он требует уважения и
            мудрости. Если вы готовы пройти этот путь, я буду вашим проводником.
            Будьте честны с собой и проявляйте уважение. Мухомор дарует вам силу
            и здоровье.
          </VisibilityManager>
        </div>
      </LineAnimation>
      <VideoWidget videos={videos} />
      <Questions questionsContent={questionsContent} />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Мухоморный ретрит в Казани"
        title={"Приглашаю вас на мухоморный ретрит в Казани"}
        description={`Если вы чувствуете готовность к глубокому исцелению и трансформации, я помогу вам безопасно пройти этот путь. 
          
          Свяжитесь со мной, чтобы узнать больше или записаться на консультацию. Ваше путешествие к исцелению начинается здесь.
        `}
      />
    </Layout>
  );
}
