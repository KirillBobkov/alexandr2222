import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_24 from "../../images/secondary_preview_24.webp";
import { Button } from "../../components/shared/Button/Button";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Как избавиться от бессонницы и ночных кошмаров? Глубинный разбор причин",
    description:
      "Связь сна с подсознательными программами и методы их устранения",
    keywords:
      "бессонница, кошмары, сон, психика, подсознание, нейротраблшуттинг, терапия",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview 
        text="Как избавиться от бессонницы и ночных кошмаров?" 
        image={secondary_preview_24} 
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Как избавиться от бессонницы и ночных кошмаров? Глубинный разбор причин
          </VisibilityManager>

          <VisibilityManager as="p">
            Многие ищут таблетки, медитации или смену распорядка дня, чтобы наконец-то выспаться. Кто-то боится засыпать из-за постоянных кошмаров, кто-то просыпается среди ночи с ощущением тревоги или внутреннего ужаса. Но всё это — не причины, а следствия.
          </VisibilityManager>

          <VisibilityManager as="p">
            Настоящая причина кроется гораздо глубже.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Сон — зеркало подсознания
          </VisibilityManager>

          <VisibilityManager as="p">
            Состояние сна напрямую связано с тем, что происходит у вас внутри. Подсознательные конфликты, вытесненные эмоции, непрожитые травмы — всё это продолжает жить внутри вас, даже если вы о них не думаете днём. А ночью — выходит на поверхность.
          </VisibilityManager>

          <VisibilityManager as="p">
            Бессонница и кошмары — сигналы. Это не враги. Это послания от вашего подсознания. Оно не желает вам зла. Оно просто устало не быть услышанным.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему традиционные методы не работают
          </VisibilityManager>

          <VisibilityManager as="p">
            Валерьянка, мелатонин, медитации, дыхательные практики — всё это может лишь временно заглушить симптом. Но если в глубине вашей психики живёт страх, вытесненный гнев, детская травма или даже подсознательная установка вроде «мир небезопасен» — ни один сонный ритуал не даст вам глубокого отдыха.
          </VisibilityManager>

          <VisibilityManager as="p">
            Потому что мозг продолжит «дежурить» даже ночью.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Нейротраблшуттинг — ключ к настоящему покою
          </VisibilityManager>

          <VisibilityManager as="p">
            В моей практике я использую метод, который позволяет работать не с симптомом, а с корневой причиной. Нейротраблшуттинг — это точечная, бережная и очень глубокая работа с подсознанием. Мы находим тот самый узел, который мешает вам уснуть, который запускает тревожные сны или прерывает ваш сон на полпути.
          </VisibilityManager>

          <VisibilityManager as="p">
            И мы его развязываем.
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              страх быть беззащитным (часто уходит корнями в детство);
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              запрет на отдых (часто у тех, кто с детства должен был быть «хорошим» и «удобным»);
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              ощущение угрозы, даже когда её объективно нет;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              навязчивая попытка всё контролировать — даже во сне;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              пережитая травма, которая возвращается в снах, как фантом боли.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что вы получаете после проработки
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              нормализацию сна: вы засыпаете легко, без борьбы с собой;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              пробуждение без тревоги, в ощущении опоры внутри;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              исчезновение кошмаров или их трансформацию в осознанные сны;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              восстановление жизненных сил;
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              ощущение глубокого внутреннего покоя, которого не хватало долгие годы.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Сон — это не только отдых, это духовная и психическая перезагрузка
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы не спите — это значит, подсознание не может «отпустить» вас. Оно продолжает бороться, тревожиться, искать выход. И до тех пор, пока вы не услышите его послание — сна не будет.
          </VisibilityManager>

          <VisibilityManager as="p">
            Но как только вы поворачиваетесь к себе — начинается настоящее улучшение самочувствия.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если чувствуете, что описанное отзывается вам, и вы хотите вернуть себе спокойный, глубокий сон — я помогу вам пройти этот путь. Максимальное количество сессий — восемь. Но результат обычно заметен уже после первой встречи.
          </VisibilityManager>

          <VisibilityManager as="p">
            Позвольте себе отдыхать.<br />
            Позвольте себе безопасность.<br />
            Позвольте себе спать.
          </VisibilityManager>
          <p
              style={{
                fontSize: "12px",
                fontStyle: "italic",
                
                
              }}
            >
              Метод не является медицинским и не заменяет консультации
              специалиста
            </p>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Как избавиться от бессонницы и ночных кошмаров? (статья)"
        title={"Консультация по избавлению от бессонницы и кошмаров"}
        description={`Хотите вернуть себе здоровый сон и избавиться от ночных кошмаров? 
          
          Запишитесь на консультацию, и мы обсудим, как метод нейротраблшуттинга может помочь именно вам.`}
      />
    </Layout>
  );
} 