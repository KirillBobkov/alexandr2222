import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { content } from "../content/drop-smoking";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import secondary_preview_6 from '../public/images/secondary_preview_6.webp';

export default function() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={content.pageTitle} image={secondary_preview_6} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Устали от сигарет? Хотите покончить с курением раз и навсегда? Я
            помогу Вам быстро и эффективно избавиться от никотиновой
            зависимости.
          </VisibilityManager>
          <VisibilityManager style={{ width: '100%' }} as="p">
            Зависимость от курения – это не просто вредная привычка, это глубоко
            укоренившаяся подсознательная программа. Она влияет на Ваше
            поведение, эмоции и даже Ваше самочувствие. 
          </VisibilityManager>
    
          <VisibilityManager as="p">
            Моя методика направлена на работу с Вашим подсознанием, чтобы
            переписать эти программы. 
            Я использую эффективные техники, которые
            помогают Вам выявить и трансформировать подсознательные установки,
            которые сейчас поддерживают Вашу зависимость.
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Результаты, которые Вы получите
          </VisibilityManager>
          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Снижение тяги к сигаретам.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Легкое и естественное отвыкание от курения.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Повышение качества вашей жизни.
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Давайте рассмотрим все ключевые плюсы отказа от курения. Они
            охватывают физическое и психологическое здоровье, а также социальные
            и финансовые аспекты жизни.
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Физическое здоровье
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Снижение риска развития рака"}
            </h3>
            <p className={contentStyles.textDescription}>
              Отказ от курения значительно снижает риск развития различных видов
              рака, включая рак легких, гортани, полости рта, пищевода, желудка,
              поджелудочной железы, мочевого пузыря и шейки матки.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение работы сердечно-сосудистой системы"}
            </h3>
            <p className={contentStyles.textDescription}>
              Бросая курить, Вы снижаете риск развития сердечных заболеваний,
              инфарктов, инсультов, атеросклероза и других сосудистых проблем.
              Кровяное давление и пульс приходят в норму.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение функции легких"}
            </h3>
            <p className={contentStyles.textDescription}>
              Отказ от курения способствует очищению легких от смол и токсинов,
              улучшается дыхание, снижается риск развития хронического бронхита
              и эмфиземы. Повышается выносливость при физических нагрузках.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Снижение риска респираторных заболеваний"}
            </h3>
            <p className={contentStyles.textDescription}>
              Уменьшается риск простуд, гриппа, пневмонии и других заболеваний
              дыхательных путей.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение иммунитета"}
            </h3>
            <p className={contentStyles.textDescription}>
              Организм становится более устойчивым к инфекциям.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Снижение риска развития диабета 2 типа"}
            </h3>
            <p className={contentStyles.textDescription}>
              Курение повышает риск развития диабета, отказ от него снижает этот
              риск.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение фертильности"}
            </h3>
            <p className={contentStyles.textDescription}>
              У женщин и мужчин улучшается репродуктивная функция.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение состояния кожи, волос и зубов"}
            </h3>
            <p className={contentStyles.textDescription}>
              Кожа становится более здоровой, волосы более блестящими, зубы
              белее, снижается риск развития заболеваний десен.
            </p>
          </VisibilityManager>
          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Увеличение продолжительности жизни"}
            </h3>
            <p className={contentStyles.textDescription}>
              Бросая курить, Вы добавляете годы к своей жизни.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Психологическое здоровье
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Повышение уверенности в себе"}
            </h3>
            <p className={contentStyles.textDescription}>
              Избавление от зависимости даёт ощущение контроля над своей жизнью
              и повышает самооценку.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Снижение уровня стресса и тревоги"}
            </h3>
            <p className={contentStyles.textDescription}>
              Несмотря на стереотип, курение не снимает стресс, а, наоборот,
              усиливает его. Отказ от курения способствует стабилизации
              эмоционального состояния.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение настроения"}
            </h3>
            <p className={contentStyles.textDescription}>
              Возвращается способность радоваться жизни, улучшается
              эмоциональная стабильность.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Снижение риска депрессии"}
            </h3>
            <p className={contentStyles.textDescription}>
              У курильщиков выше риск развития депрессивных расстройств, отказ
              от курения снижает этот риск.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Повышение когнитивных функций"}
            </h3>
            <p className={contentStyles.textDescription}>
              Улучшается память, концентрация внимания и ясность мышления.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Социальные аспекты
          </VisibilityManager>
          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение отношений с окружающими"}
            </h3>
            <p className={contentStyles.textDescription}>
              Некурящие люди часто чувствуют себя некомфортно рядом с
              курильщиками. Отказ от курения позволит Вам свободно общаться с
              любыми людьми и не чувствовать себя изгоем.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Избавление от неприятного запаха"}
            </h3>
            <p className={contentStyles.textDescription}>
              Запах табака от рук, одежды и волос неприятен для окружающих,
              отказ от курения устраняет эту проблему.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Пример для подражания"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы станете хорошим примером для своих детей и других членов семьи.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Повышение социальной активности"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы сможете участвовать в мероприятиях, где курение запрещено, не
              испытывая дискомфорта.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Финансовые выгоды
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Экономия денег"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы сможете сэкономить значительную сумму денег, которую раньше
              тратили на сигареты.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Меньшие затраты на медицинское обслуживание"}
            </h3>
            <p className={contentStyles.textDescription}>
              Снижение риска заболеваний означает меньшие траты на лекарства и
              медицинские услуги.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {
                "Возможность использовать сэкономленные деньги на что-то приятное"
              }
            </h3>
            <p className={contentStyles.textDescription}>
              Путешествия, хобби, образование и т.д.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Другие плюсы
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение вкусовых ощущений"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы начнете лучше чувствовать вкус пищи и напитков.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Улучшение обоняния"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы сможете ощущать запахи более ярко.
            </p>
          </VisibilityManager>

          <VisibilityManager as="div" className={contentStyles.textBlock}>
            <h3 className={contentStyles.textTitle}>
              <span className={contentStyles.textSymbol}>//</span>
              {"  "}
              {"Общее улучшение качества жизни"}
            </h3>
            <p className={contentStyles.textDescription}>
              Вы почувствуете себя более здоровым, энергичным и счастливым.
            </p>
          </VisibilityManager>

          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            В заключение
          </VisibilityManager>

          <VisibilityManager as="p">
            Отказ от курения – это одно из самых важных и выгодных решений,
            которое Вы можете принять для своего здоровья и благополучия.
            Преимущества отказа от курения огромны и затрагивают все сферы
            жизни. Независимо от того, сколько Вы курили и как долго, никогда не
            поздно бросить и начать новую, более здоровую и счастливую жизнь.
          </VisibilityManager>

          <VisibilityManager as="p">
          Забудьте о курении и начните дышать полной грудью. Запишитесь на бесплатную консультацию прямо сейчас!
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} type={content.pageTitle}/>
    </Layout>
  );
}
