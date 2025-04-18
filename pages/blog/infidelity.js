import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_18 from "../../images/secondary_preview_18.webp";
import { Button } from "../../components/shared/Button/Button";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title:
      "Как нейротраблшуттинг помогает пережить измену: восстановление доверия через работу с подсознанием",
    description:
      "Глубокий анализ психологических последствий измены и методов восстановления способности доверять через работу с подсознательными паттернами",
    keywords:
      "измена, доверие, психология, нейротраблшуттинг, травмы, отношения",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview
        text="Как нейротраблшуттинг помогает пережить измену"
        image={secondary_preview_18}
      />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Как нейротраблшуттинг помогает пережить измену: восстановление
            доверия через работу с подсознанием
          </VisibilityManager>

          <VisibilityManager as="p">
            Измена — это не просто предательство партнёра. Это глубокий удар по
            вашей способности доверять — не только другим, но и себе.
          </VisibilityManager>

          <VisibilityManager as="p">
            Большинство методов терапии фокусируются на анализе ситуации, поиске
            причин или попытках «простить и забыть». Но что, если корень
            проблемы лежит гораздо глубже — в подсознательных паттернах,
            сформированных ещё в детстве?
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшуттинг предлагает не «закрыть гештальт», а
            перепрограммировать саму основу ваших реакций. Рассказываем, как это
            работает.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему после измены бывает так сложно завести новые отношения?
          </VisibilityManager>

          <VisibilityManager as="p">
            Даже если отношения закончились, последствия измены часто остаются:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Страх повторного предательства — «Все мужчины/женщины одинаковы».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Чувство неполноценности — «Это я что-то сделал(а) не так».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Потеря веры в себя — «Больше не смогу никому открыться».
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Но эти реакции редко связаны с самой изменой. Чаще они коренятся в
            детских сценариях:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Родитель, который нарушал обещания.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ситуации предательства в школе («лучший друг перестал общаться»).
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Ощущение, что ваши эмоции игнорировались («не реви, ты же
              мальчик»).
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Подсознание запоминает эти моменты как шаблон: «Людям нельзя
            доверять». И когда случается измена, старые раны вскрываются, а
            страх становится невыносимым.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как нейротраблшуттинг «перезаписывает» травму предательства?
          </VisibilityManager>

          <VisibilityManager as="p">
            Метод работает не с сознательными мыслями («я должен простить»), а с
            глубинными установками, которые управляют вашими эмоциями.
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            Этапы работы:
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            1.
            {"  "}
            Диагностика: С помощью специальных техник находим событие из
            прошлого, которое стало триггером для страха предательства.
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            {"  "}
            Пример из практики: Мария после измены мужа испытывала панику при
            мысли о новых отношениях. Диагностика показала детскую травму: в 7
            лет отец ушёл из семьи, пообещав «вернуться через неделю», но исчез
            на годы.
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            2.
            {"  "}
            Проработка: Убираем эмоциональный заряд травмы, «отвязывая» её от
            текущей ситуации.
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
          Как это происходит:
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            <span className={contentStyles.textSymbol}>●</span>
            {"  "}
            Перепрограммируется реакция мозга на триггеры (например, фраза «Я
            тебя люблю» больше не вызывает ожидания подвоха).
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            <span className={contentStyles.textSymbol}>●</span>
            {"  "}
            Подсознание учится различать прошлое и настоящее: «Тогда меня
            предали, но сейчас я в безопасности».
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            3.
            {"  "}
            Интеграция: Формируем новые нейронные связи, которые помогают:
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            <span className={contentStyles.textSymbol}>●</span>
            {"  "}
            Отличать здоровые отношения от токсичных.
          </VisibilityManager>

          <VisibilityManager as="p" className={contentStyles.textDescription}>
            <span className={contentStyles.textSymbol}>●</span>
            {"  "}
            Доверять без страха.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Кейсы: Как изменилась жизнь заказчиков после проработки
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            История 1: «Я перестала проверять телефон мужа каждые 10 минут».
          </VisibilityManager>

          <VisibilityManager as="p">
            Анна, 34 года: После измены в прошлых отношениях Анна панически
            боялась, что новый муж её обманет. Даже его опоздание с работы на 15
            минут вызывало истерику.
          </VisibilityManager>

          <VisibilityManager as="p">Проработка:</VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Обнаружили, что её страх уходил корнями в подростковый возраст:
              мать постоянно повторяла: «Все мужчины — бабники».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Убрали установку «Доверять = быть дураком».
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Результат через 3 месяца: «Я наконец поняла, что мой муж — не мой
            папа и не бывший. Мы даже съездили в отпуск отдельно — я не звонила
            ему ни разу».
          </VisibilityManager>

          <VisibilityManager as="h4" className={contentStyles.title_small}>
            История 2: «Я разрешил себе злиться».
          </VisibilityManager>

          <VisibilityManager as="p">
            Дмитрий, 40 лет: После измены жены Дмитрий «заморозил» эмоции: «Я не
            чувствую ничего, просто пустота».
          </VisibilityManager>

          <VisibilityManager as="p">Проработка:</VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Нашли детский паттерн: в 5 лет его предала няня, которую он
              обожал. Родители сказали: «Не плачь, ты же мужчина».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Раскрыли подавленный гнев и позволили ему выйти безопасно.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Результат через 2 месяца: «Я впервые за год заплакал. Но это были
            слёзы облегчения, а не боли. Сейчас я общаюсь с женщинами и не
            боюсь, что они «увидят мою слабость».
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как детские паттерны влияют на восприятие измены?
          </VisibilityManager>

          <VisibilityManager as="p">
            Ваше подсознание не отличает «тогда» от «сейчас». Оно реагирует на
            триггеры по старым шаблонам:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Родители игнорировали ваши чувства → «Мои эмоции не важны. Лучше
              молчать и терпеть»
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Предательство друга в школе → «Все в итоге уйдут. Не стоит
              привязываться»
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Сравнение с другими детьми → «Я недостаточно хорош(а), чтобы меня
              любили»
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшуттинг не стирает память, но меняет эмоциональный код
            этих воспоминаний. Вы помните событие, но оно больше не управляет
            вами.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            3 шага для самостоятельной работы с доверием
          </VisibilityManager>

          <VisibilityManager as="p">
            Пока вы ищете специалиста, попробуйте эти техники:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              1.
              {"  "}
              Напишите письмо «тому, кто предал». Не отправляйте! Цель —
              выплеснуть эмоции. Сожгите или порвите лист.
            </p>
            <p className={contentStyles.textDescription}>
              2.
              {"  "}
              Задайте себе вопрос: «Что я чувствую на самом деле под страхом?»
              (Гнев? Стыд? Одиночество?).
            </p>
            <p className={contentStyles.textDescription}>
              3.
              {"  "}
              Практикуйте «малое доверие»: Начните с мелочей: попросите коллегу
              помочь с задачей, доверьте другу выбор кафе. Фиксируйте, как
              реагирует тело и мысли.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Когда нейротраблшуттинг необходим?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Если страх предательства мешает строить новые отношения.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Если вы «застряли» в цикле «притягиваю ненадёжных людей → страдаю
              → снова влюбляюсь».
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Если измена вызвала панические атаки, бессонницу или потерю
              аппетита.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Если другие специалисты не помогают.
            </p>
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Главное, что нужно понять
          </VisibilityManager>

          <VisibilityManager as="p">
            Измена — не ваша вина. Но ваша реакция на неё зависит от «файлов»,
            которые хранятся в подсознании.
          </VisibilityManager>

          <VisibilityManager as="p">
            Нейротраблшуттинг не вернёт прошлые отношения, но подарит свободу
            выбора: больше не бежать от любви, а встречать её с открытым
            сердцем.
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
        type="Пережить измену (статья)"
        title={"Восстановите способность доверять"}
        description={`Начните с одного шага — запишитесь на консультацию. Мы найдём корень проблемы и поможем вам вернуть способность доверять и создавать счастливые отношения.
          `}
      />
    </Layout>
  );
}
