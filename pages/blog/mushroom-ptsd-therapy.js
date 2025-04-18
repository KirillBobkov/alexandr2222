import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_25 from "../../images/secondary_preview_25.webp";
import { Button } from "../../components/shared/Button/Button";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Мухомор и терапия ПТСР: улучшение самочувствия через связь с подсознанием",
    description:
      "Как Мухомор помогает в лечении ПТСР и работе с травмами через глубинную связь с подсознанием",
    keywords:
      "мухомор, ПТСР, травма, подсознание, терапия, психика, проводник",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview 
        text="Мухомор и терапия ПТСР" 
        image={secondary_preview_25} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Мухомор и терапия ПТСР: улучшение самочувствия через связь с подсознанием
          </VisibilityManager>

          <VisibilityManager as="p">
            Травма не уходит с годами. Она может затаиться, стать фоном, но при определённых условиях — снова проявиться. Вспышкой агрессии. Панической атакой. Оцепенением. Ощущением, будто ты больше не принадлежишь себе. Это и есть посттравматическое стрессовое расстройство (ПТСР).
          </VisibilityManager>

          <VisibilityManager as="p">
            Большинство методов терапии работают с симптомами. Но есть путь глубже — туда, где живёт сама причина. Этот путь открывает Мухомор.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как Мухомор воздействует на психику при ПТСР
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор содержит активные вещества (мусцимол, иботеновая кислота), которые оказывают влияние на ГАМК-рецепторы — ключевые структуры, отвечающие за торможение перевозбуждения в нервной системе.
          </VisibilityManager>

          <VisibilityManager as="p">
            При этом Мухомор работает не как психоделик, а как Растение-Учитель, проводник в подсознание.
          </VisibilityManager>

          <VisibilityManager as="p">
            Во время церемонии, если всё сделано правильно, человек соприкасается с корнем своей травмы. Но не умом, а всем существом. Возвращается в эпизод, который оставил шрам.
          </VisibilityManager>

          <VisibilityManager as="p">
            И — проживает его заново, но в безопасных условиях, под моим проводничеством, с возможностью осознанного выбора, принятия и исцеления.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что происходит во время ретрита
          </VisibilityManager>

          <VisibilityManager as="p">
            В погружении человек может:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              «Увидеть» своё травмирующее событие с новой стороны
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Встретиться с обидчиком — и отпустить его
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вернуть себе утраченную силу и целостность
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Найти слова для боли, которую невозможно было выразить
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ощутить глубокое облегчение — как будто груз, носимый годами, наконец-то снят
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Я провожу людей через такие сессии бережно и точно. Потому что сам прошёл через травмы. Потому что Мухомор назначил меня Проводником не случайно.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Живые примеры
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Женщина с ПТСР после домашнего насилия прожила в погружении сцену, где она не была жертвой, а могла постоять за себя. Её тело впервые расслабилось после многих лет напряжения.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Мужчина после фронта, страдавший от кошмаров, увидел себя в погружении, умывающимся светом и отпускающим души погибших товарищей. Сон восстановился уже на третью ночь после ретрита.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Молодой человек, переживший утрату, в церемонии впервые смог попрощаться с близким и сказать те слова, которые не успел при жизни. После этого ушло чувство вины и замороженность чувств.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что говорит наука о потенциале Мухомора
          </VisibilityManager>

          <VisibilityManager as="p">
            Хотя Пантерный и Красный мухоморы до сих пор слабо изучены в официальной науке, интерес к ним растёт.
          </VisibilityManager>

          <VisibilityManager as="p">
            Известно, что мусцимол оказывает анксиолитическое (противотревожное) и седативное действие, а главное — способен вызывать осознанные сновидные состояния, при которых память и восприятие переплетаются, позволяя «переписать» травматичный опыт.
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейробиологи уже исследуют, как это может быть применено в терапии ПТСР.
          </VisibilityManager>

          <VisibilityManager as="p">
            Психологи отмечают, что именно мягкий и неагрессивный характер погружения на Мухоморе создаёт условия для глубинной внутренней работы без шокирующих эффектов, свойственных другим веществам.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Заключение
          </VisibilityManager>

          <VisibilityManager as="p">
            ПТСР — не приговор.
          </VisibilityManager>

          <VisibilityManager as="p">
            Но для исцеления нужно не забыть, а встретиться с болью и пройти сквозь неё. С поддержкой. С пониманием. С Мухомором как союзником.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если чувствуете, что готовы к этому шагу, я помогу вам сделать его бережно и осознанно.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мухомор даёт не только возможность прожить травму заново, но и изменить её место в вашей жизни.
          </VisibilityManager>

          <VisibilityManager as="p">
            Из центра боли — в точку силы.
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Мухомор и терапия PTSD (статья)"
        title={"Консультация по терапии ПТСР с Мухомором"}
        description={`Хотите узнать больше о том, как Мухомор может помочь в работе с ПТСР и травмами? 
          
          Запишитесь на консультацию, и мы обсудим ваш индивидуальный путь к исцелению.`}
      />
    </Layout>
  );
} 