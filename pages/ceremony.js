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
import { Button } from "../components/shared/Button/Button";

const videos = [
    // New videos added on March 2024
    {
      link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239037&hash=0395dd995453c326",
      thumbnailUrl:
        "https://i.mycdn.me/getVideoPreview?id=8011482597949&idx=14&type=39&tkn=2N2-OvszIn7EgxYI2Z-GF-bu2P0&fn=vid_u",
      name: 'Отзыв Романа о мухоморном ретрите',
      uploadDate: new Date("April 09, 2025").toISOString(),
    },
    {
      link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239035&hash=41d73acd4693cddf",
      thumbnailUrl:
        "https://i.mycdn.me/getVideoPreview?id=8024136747545&idx=1&type=39&tkn=wR32eObJAgzIULrQyKVDYp52URM&fn=vid_u",
      name: 'Отзыв Дмитрия о мухоморном ретрите',
      uploadDate: new Date("April 09, 2025").toISOString(),
    },
    {
      link: "https://vkvideo.ru/video_ext.php?oid=-230061059&id=456239032&hash=bff15b594870bd69",
      thumbnailUrl:
        "https://i.mycdn.me/getVideoPreview?id=7999049697985&idx=4&type=39&tkn=Dayw1QUCYUXqC9NBc8WG1yJSzAM&fn=vid_u",
      name: 'Отзыв Святослава мухоморном ретрите',
      uploadDate: new Date("April 09, 2025").toISOString(),
    },
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
    title: "Мухоморные ретриты | Шаманизм, церемонии и работа с растениями-учителями",
    description:
      "Погрузитесь в мистические церемонии с мухомором под руководством шамана. Изучайте трип-репорты, избегайте бэд-трипов, практикуйте микродозинг. Духовные ретриты для исцеления души через народную медицину и психоделические практики.",
    keywords:
      "мухомор, шаманизм, шаман, ретрит, растения учителя, мистика, трип репорт, бэд трип, микродозинг, психоделика, церемония, народная медицина, дух, душа, ритуалы, эзотерика",
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
            Мухоморный ретрит — это уникальная практика, позволяющая вам погрузиться в глубины подсознания, освободиться от внутренних блоков и получить ценный духовный и терапевтический опыт.
          </VisibilityManager>

          <VisibilityManager as="p">
            Пантерный Мухомор содержит мощные активные вещества (мусцимол, иботеновую кислоту, мускарин, мускаридин, скополамин, гиосциамин и другие), которые способны трансформировать восприятие реальности, открывая доступ к истинной сути вещей. Однако, его сила требует осознанного подхода и грамотного сопровождения.
          </VisibilityManager>

          <VisibilityManager as="p">
            Расскажу вам о пользе и результатах мухоморного ретрита, процессе его проведения, а также о важных аспектах безопасности и интеграции опыта.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Преимущества моего ретрита
          </VisibilityManager>

          <VisibilityManager as="p">
            Почему вам стоит выбрать именно этот путь?
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Назначен проводником непосредственно от самого Мухомора
            </h3>
            <p className={contentStyles.textDescription}>
              Этот путь был принят мною не из любопытства или моды. Когда мне было 17 лет, отец провёл обряд посвящения, передав древние знания. А в трипе на Мухоморе, мне было прямо указано проводить людей через этот опыт, помогая им исцелиться и найти путь к себе.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Глубокая работа с подсознанием
            </h3>
            <p className={contentStyles.textDescription}>
              Страх, волнение или сомнения перед ретритом? Это естественно. По необходимости, провожу предварительную работу с подсознанием, помогая устранить внутреннее напряжение и настроиться на взаимодействие с Мухомором.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Быстрый, но эффективный формат
            </h3>
            <p className={contentStyles.textDescription}>
              В отличие от большинства ретритных центров, где практика длится по 3–4 дня, мой ретрит занимает не более суток. Вы получаете мощный трансформационный опыт, без необходимости выпадать из жизни на несколько дней.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Безопасность и грамотная интеграция
            </h3>
            <p className={contentStyles.textDescription}>
              Ретрит проходит в комфортном и защищённом месте. После церемонии, помогаю участникам осознать и правильно внедрить полученный опыт в повседневную жизнь.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Индивидуальная дозировка и перепроверка через кинезиологический тест
            </h3>
            <p className={contentStyles.textDescription}>
              Каждому участнику подбираю дозировку Мухомора, которую дополнительно проверяю через кинезиологический тест, исключая риск передозировки и даже минимальную вероятность случайного попадания в партию Бледной Поганки. Это позволяет обеспечивать безопасность на каждом этапе.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />


          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Польза и результаты мухоморного ретрита
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Эмоциональное исцеление
            </h3>
            <p className={contentStyles.textDescription}>
              Освобождение от подавленных эмоций, травм и страхов.
            </p>
            <p className={contentStyles.textDescription}>
              Уменьшение тревожности, депрессии и посттравматического синдрома (ПТСР).
            </p>
            <p className={contentStyles.textDescription}>
              Чувство внутреннего спокойствия и гармонии после церемонии.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Физическое оздоровление
            </h3>
            <p className={contentStyles.textDescription}>
              Снижение воспалительных процессов, хронических болей.
            </p>
            <p className={contentStyles.textDescription}>
              Улучшение сна и общего самочувствия.
            </p>
            <p className={contentStyles.textDescription}>
              Потенциальное исцеление заболеваний, считающихся неизлечимыми.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Личностный рост и осознание предназначения
            </h3>
            <p className={contentStyles.textDescription}>
              Обретение ясности в мыслях и понимание своих истинных целей.
            </p>
            <p className={contentStyles.textDescription}>
              Улучшение качества жизни, отношений, карьеры.
            </p>
            <p className={contentStyles.textDescription}>
              Повышение личной эффективности и продуктивности.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Гармонизация сексуальности
            </h3>
            <p className={contentStyles.textDescription}>
              Освобождение от внутренних блоков, стыда, травм.
            </p>
            <p className={contentStyles.textDescription}>
              Переосмысление отношения к своему телу и интимности.
            </p>
            <p className={contentStyles.textDescription}>
              Пробуждение естественной сексуальной энергии.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Глубинная связь с природой и Высшими Силами
            </h3>
            <p className={contentStyles.textDescription}>
              Единение с миром и понимание своего места во Вселенной.
            </p>
            <p className={contentStyles.textDescription}>
              Ощущение потока жизни, благодарности и осознанности.
            </p>
            <p className={contentStyles.textDescription}>
              Мистические переживания, способные изменить мировоззрение.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как проходит мухоморный ретрит?
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Подготовка
            </h3>
            <p className={contentStyles.textDescription}>
              Вы получаете рекомендации по диете и грамотную настройку на трип. Это позволяет сделать церемонию более осмысленной, безопасной и продуктивной.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Священная церемония
            </h3>
            <p className={contentStyles.textDescription}>
              Подбирается индивидуальная дозировка.
            </p>
            <p className={contentStyles.textDescription}>
              Мухомор употребляется в виде сомы, с добавлением других Растений-Учителей, разрешённых в РФ.
            </p>
            <p className={contentStyles.textDescription}>
              Проводятся очистительные и исцеляющие ритуалы, полученные мною от Высших Сил.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Интеграция опыта
            </h3>
            <p className={contentStyles.textDescription}>
              После ретрита, помогу вам осознать смысл полученного опыта, дать ему верное применение в жизни и закрепить трансформацию.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Исторические примеры использования Мухомора
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Шаманизм и древние традиции
            </h3>
            <p className={contentStyles.textDescription}>
              В Сибири шаманы использовали Мухомор для общения с духами, целительства и предсказаний.
            </p>
            <p className={contentStyles.textDescription}>
              В славянской культуре его применяли охотники для повышения выносливости.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Воинская доблесть и обострение чувств
            </h3>
            <p className={contentStyles.textDescription}>
              Викинги предположительно употребляли Мухоморы, чтобы войти в боевой раж и стать бесстрашными в сражении.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Духовные ритуалы индейцев
            </h3>
            <p className={contentStyles.textDescription}>
              В ритуалах североамериканских индейцев Мухоморы использовались для очищения, исцеления и получения видений.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Современные исследования
            </h3>
            <p className={contentStyles.textDescription}>
              В западной науке изучается влияние Мухомора на психику и его потенциал в терапии психических расстройств.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Риски и меры предосторожности
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Токсичность и побочные эффекты
            </h3>
            <p className={contentStyles.textDescription}>
              Мухомор содержит активные вещества, которые могут вызвать тошноту, головокружение и даже отравление при неправильном употреблении. Самостоятельное использование без опыта и знаний может быть опасным.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Риск десоциализации
            </h3>
            <p className={contentStyles.textDescription}>
              Глубокие переживания требуют осознанной интеграции. Без поддержки проводника можно потерять связь с реальностью или столкнуться с внутренними конфликтами.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Юридические аспекты
            </h3>
            <p className={contentStyles.textDescription}>
              В России Мухомор не запрещён и его использование абсолютно легально.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Заключение
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор является Величайшим источником духовного, эмоционального и физического исцеления.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор помогает человеку раскрыться максимально, отбросить всё лишнее и прийти к счастливой благодатной жизни и изобилию.
          </VisibilityManager>

          <VisibilityManager as="p">
            После трипа, человек испытывает «самые приятные ощущения в жизни» - прямая цитата одного из участников.
          </VisibilityManager>

          <VisibilityManager as="p">
            При этом, неграмотное взаимодействие с Мухомором сопряжено с серьёзными рисками.
          </VisibilityManager>

          <VisibilityManager as="p">
            Успешный опыт зависит от правильной подготовки, дозировки и поддержки опытного проводника.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы рассматриваете участие в мухоморном ретрите, важно тщательно изучить все отзывы, проконсультироваться с проводником и учитывать свои индивидуальные особенности.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор — это великий учитель и целитель, но он требует уважения и мудрости. Если вы готовы пройти этот путь, я буду вашим проводником. Будьте честны с собой и проявляйте уважение. Мухомор дарует вам силу и здоровье.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы чувствуете, что пришло время изменений, и готовы довериться процессу, я проведу вас через этот опыт.
          </VisibilityManager>
        </div>
      </LineAnimation>
      <VideoWidget videos={videos} />
      <Questions questionsContent={questionsContent} />
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Мухоморный ретрит в Казани (Страница: Церемония)"
        title={"Приглашаю вас на мухоморный ретрит в Казани"}
        description={`Если вы чувствуете готовность к глубокому исцелению и трансформации, я помогу вам безопасно пройти этот путь. 

          Свяжитесь со мной, чтобы узнать больше или записаться на консультацию. Ваше путешествие к исцелению начинается здесь.
        `}
      />
    </Layout>
  );
}
