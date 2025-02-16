import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import secondary_preview_10 from '../public/images/secondary_preview_10.webp';
import { Final } from "../components/Final/Final";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";

const videos = [
  
];

export default function() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Мухоморный ретрит — путь к духовному и физическому исцелению",
    description: "Священная церемония с использованием Мухомора (Amanita muscaria) для духовного роста и терапевтических целей",
    keywords: "мухомор, ретрит, духовные практики, исцеление, церемония, шаманизм",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text="Мухоморный ретрит" image={secondary_preview_10} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Мухоморный ретрит — это практика, связанная с использованием Мухомора (Amanita muscaria) в духовных и терапевтических целях.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор содержит психоактивные вещества, такие как мусцимол и иботеновая кислота, которые могут быть как полезными, так и опасными. Ниже я подробно опишу пользу, реальные результаты, исторические и современные примеры, а также риски, связанные с мухоморным трипом.
          </VisibilityManager>

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
              Люди часто сообщают о глубоких духовных переживаниях, явном чувстве единства со Вселенной и Высшими Силами.
            </p>
            <p className={contentStyles.textDescription}>
              Такие переживания приводят к переоценке жизненных ценностей, усилению чувства благодарности и осознанности.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Эмоциональное исцеление
            </h3>
            <p className={contentStyles.textDescription}>
              Мухомор способствует высвобождению подавленных эмоций, освобождению от травм и страхов. Ретрит помогает людям справиться с депрессией, тревогой и даже посттравматическим стрессовым расстройством (ПТСР).
            </p>
            <p className={contentStyles.textDescription}>
              После Священной Церемонии, человек чувствует себя спокойным и уравновешенным.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Физическое оздоровление
            </h3>
            <p className={contentStyles.textDescription}>
              Мухомор используется для лечения боли, воспалений и даже хронических заболеваний. На данный момент, собирается доказательная база эффективности Мухомора в исцелении людей от заболеваний, признанных неизлечимыми.
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
              Мухомор помогает человеку лучше понять себя, свои цели и мотивы, открывает истинное предназначение. Приводит к позитивным изменениям в образе жизни, карьере и отношениях.
            </p>
            <p className={contentStyles.textDescription}>
              После мухоморного ретрита, люди отмечают повышение личной эффективности и ясности мышления.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Связь с природой
            </h3>
            <p className={contentStyles.textDescription}>
              Церемония проводится за городом, в комфортном, спокойном и безопасном месте, что позволяет человеку полноценно отдохнуть и прочувствовать гармонию с самим собой и Миром.
            </p>
          </VisibilityManager>

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
              Мухоморы издавна используются сибирскими шаманами в ритуалах для общения с духами, предсказания будущего и исцеления. Шаманы употребляют мухоморы, чтобы войти в изменённое состояние сознания и путешествовать в "другие миры".
            </p>
            <p className={contentStyles.textDescription}>
              Издревле, в славянской культуре Мухомор также используется для повышения выносливости охотников.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Викинги
            </h3>
            <p className={contentStyles.textDescription}>
              Принято считать, что викинги использовали мухоморы для повышения боевого духа и бесстрашия перед сражениями.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Индейские племена
            </h3>
            <p className={contentStyles.textDescription}>
              Некоторые индейские племена Северной Америки использовали мухоморы в ритуалах для духовного очищения и исцеления.
            </p>
          </VisibilityManager>

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
              В последние годы, мухоморные ретриты набирают всё большую попудярность. Я, Александр «Интеграл» Васильев, помогаю участникам безопасно пройти через опыт.
            </p>
            <p className={contentStyles.textDescription}>
              После мухоморного ретрита, люди освобождаются от зависимостей, депрессии и находят свой истинный смысл жизни.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Западные эксперименты
            </h3>
            <p className={contentStyles.textDescription}>
              На Западе Мухоморы изучаются в контексте психотерапии и лечения психических расстройств. Некоторые люди используют их для самопознания и духовного роста.
            </p>
          </VisibilityManager>

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
              Я помогаю людям пройти подготовку, которая включает диету, работу с подсознанием и настройку на предстоящий опыт. Это помогает сделать трип спокойнее и усилить пользу.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Ритуал
            </h3>
            <p className={contentStyles.textDescription}>
              Мухоморы употребляются в индивидуальной дозировке, в виде сомы, с добавлением других Растений-Учителей, разрешённых в Российской Федерации. Процесс сопровождается определёнными ритуалами, направленными на очищение и исцеление человека, пробуждение его истинного Духа. Эти ритуалы я получил в трипе от Высших Сил, и они действительно помогают - смотрите отзывы.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Интеграция
            </h3>
            <p className={contentStyles.textDescription}>
              После ретрита, участники обсуждают свой трип с проводником и получают помощь в конструктивной интеграции полученного опыта в повседневную жизнь.
            </p>
          </VisibilityManager>

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
              Мухоморы содержат токсичные вещества, которые могут вызвать отравление, рвоту, головокружение и даже смерть при неграмотном использовании. Именно поэтому, я настоятельно призываю вас не употреблять Мухомор самостоятельно.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.title_small}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              Юридические риски
            </h3>
            <p className={contentStyles.textDescription}>
              В Российской Федерации, Мухомор разрешён на законодательном уровне, и его использование абсолютно легально.
            </p>
          </VisibilityManager>

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
        </div>
      </LineAnimation>
      <VideoWidget videos={videos} />
      <Final
        title="Приглашаю вас на мухоморный ретрит"
        description="Если вы чувствуете готовность к глубокому исцелению и трансформации, я помогу вам безопасно пройти этот путь. Свяжитесь со мной, чтобы узнать больше или записаться на консультацию. Ваше путешествие к исцелению начинается здесь."
        buttonText="Записаться"
        buttonHref="/#message"
      />
    </Layout>
  );
} 