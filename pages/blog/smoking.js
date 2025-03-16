import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_12 from "../../images/secondary_preview_12.webp";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Курение как подсознательный крик души: почему мы травим себя и как это остановить",
    description:
      "Глубокий анализ психологических причин курения и методов избавления от зависимости через работу с подсознательными травмами",
    keywords:
      "курение, зависимость, психология, нейротраблшуттинг, травмы, исцеление",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text="Курение как подсознательный крик души" image={secondary_preview_12} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Курение как подсознательный крик души: почему мы травим себя и как это остановить
          </VisibilityManager>

          <VisibilityManager as="p">
            Курение — это не просто вредная привычка. Это сложный психологический механизм, который часто маскирует глубокие внутренние конфликты. Многие курильщики годами борются с зависимостью, но срываются снова и снова. Почему? Потому что они борются с симптомом, а не с причиной.
          </VisibilityManager>

          <VisibilityManager as="p">
            В этой статье мы разберём, как подсознательные травмы, включая внутриутробные, могут стать причиной курения, и как нейротраблшуттинг помогает не только избавиться от никотиновой зависимости, но и вернуть любовь к жизни.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Курение: привычка или крик о помощи?
          </VisibilityManager>

          <VisibilityManager as="p">
            На поверхности курение выглядит как способ справиться со стрессом, расслабиться или даже «вписаться» в коллектив. Но если копнуть глубже, становится ясно: сигарета — это лишь инструмент, который помогает заглушить внутреннюю боль.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что скрывается за зависимостью?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Подсознательное нежелание жить. Это может звучать пугающе, но многие курильщики на глубинном уровне не чувствуют себя достойными счастья или здоровья.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Потребность в самонаказании. Курение становится способом «наказать» себя за ошибки, которые, как кажется, человек совершил.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Страх перед жизнью. Сигарета становится «щитом», который помогает спрятаться от реальности.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Откуда берётся нежелание жить?
          </VisibilityManager>

          <VisibilityManager as="p">
            Корни этого состояния часто уходят в самые ранние этапы жизни, включая период до рождения.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              1.
              {"  "}
              Внутриутробные травмы. Ребёнок в утробе матери чувствует её эмоции. Если мать испытывала стресс, страх или даже думала об аборте, это может оставить отпечаток на психике будущего человека.
            </p>
            <p className={contentStyles.textDescription}>
              2.
              {"  "}
              Родовые травмы. Трудные роды, разлука с матерью после рождения или другие травмирующие события могут закрепить ощущение: «Мир небезопасен, я не могу доверять жизни».
            </p>
            <p className={contentStyles.textDescription}>
              3.
              {"  "}
              Детские травмы. Эмоциональное отвержение, насилие или отсутствие поддержки в детстве формируют убеждения: «Я не достоин любви», «Я должен быть незаметным».
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему сила воли не работает?
          </VisibilityManager>

          <VisibilityManager as="p">
            Многие курильщики пытаются бросить с помощью силы воли, пластырей, таблеток или даже гипноза. Но если причина зависимости лежит в подсознательных травмах, эти методы дают лишь временный эффект.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Они не устраняют корень проблемы.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Они не меняют подсознательные установки.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Они не возвращают человеку любовь к себе и жизни.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как нейротраблшуттинг помогает избавиться от курения?
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшуттинг — это метод, который работает не с симптомами, а с причинами. Он позволяет:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              1.
              {"  "}
              Выявить корень проблемы. С помощью специальных техник мы находим событие или установку, которая запустила программу саморазрушения.
            </p>
            <p className={contentStyles.textDescription}>
              2.
              {"  "}
              Нейтрализовать травму. Мы не только находим причину, но и убираем её эмоциональный заряд.
            </p>
            <p className={contentStyles.textDescription}>
              3.
              {"  "}
              Восстановить связь с жизнью. После проработки человек начинает чувствовать себя по-другому.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            История из практики
          </VisibilityManager>

          <VisibilityManager as="p">
            Один из моих клиентов начал курить в школе, чтобы чувствовать себя «своим» среди одноклассников. На поверхности это казалось попыткой вписаться в коллектив, но на глубинном уровне это было связано с потребностью в безопасности.
          </VisibilityManager>

          <VisibilityManager as="p">
            Во время сессии мы обнаружили, что корень проблемы уходил в период его внутриутробного развития. Когда его мать была беременна, в их дом пришла полиция с обыском и арестовала отца. Хотя отца в итоге отпустили, стресс, который пережила мать, оставил глубокий отпечаток на психике будущего ребёнка.
          </VisibilityManager>

          <VisibilityManager as="p">
            Подсознательно он «усвоил»: «Мир опасен, я должен быть настороже». Это убеждение привело к тому, что в школе он начал курить, чтобы «защитить» себя и почувствовать принадлежность к группе.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Пропала тяга к сигаретам.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Он перестал чувствовать потребность «быть как все».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Появилось ощущение внутренней безопасности: «Я могу быть собой, и мир меня примет».
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как проходит работа?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
             1. 
              {"  "}
              Диагностика. Мы находим событие или установку, которая запустила программу саморазрушения.
            </p>
            <p className={contentStyles.textDescription}>
              2.
              {"  "}
              Проработка. Убираем эмоциональный заряд травмы, меняем подсознательные сценарии.
            </p>
            <p className={contentStyles.textDescription}>
              3.
              {"  "}
              Интеграция. Учимся жить по-новому, без потребности «заедать» или «закуривать» боль.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Это не гипноз и не разговоры «о прошлом». Это точная работа с вашим подсознанием, как перепрограммирование устаревшего кода.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Пора вернуть себе право дышать свободно
          </VisibilityManager>

          <VisibilityManager as="p">
            Курение — не ваша вина. Это крик души, который говорит: «Посмотри на меня! Исцели меня!».
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы готовы разобраться с истинными причинами зависимости, освободиться от груза прошлых травм и научиться принимать жизнь без страха и саботажа, я готов стать вашим проводником на этом пути.
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Курение (статья)"
        title={"Освободитесь от зависимости"}
        description={`Начните с одного шага — запишитесь на консультацию. Мы найдём корень проблемы и превратим ваше «нежелание жить» в энергию для счастья. 
          
          P.S. Дышать полной грудью — не метафора. Это ваше врождённое право. Не откладывайте его на завтра. 
          `}
      />
    </Layout>
  );
} 