import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import secondary_preview_8 from '../public/images/secondary_preview_8.webp';
import { Final } from "../components/Final/Final";

export default function() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  useScrollToLocation();

  const metaConfig = {
    title: "Обо мне - Александр Васильев",
    description: "История моего пути от личных испытаний к призванию целителя",
    keywords: "целитель, духовные практики, личная история, исцеление",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={"Обо мне"} image={secondary_preview_8} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Моя история: от личных испытаний к призванию целителя
          </VisibilityManager>

          <VisibilityManager as="p">
            Меня зовут Александр «Интеграл» Васильев, и я хочу поделиться с вами своей историей. 
            Как я прошёл через трудности, чтобы найти своё истинное призвание — помогать людям исцеляться и обретать гармонию в жизни.
          </VisibilityManager>

          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            Начало пути: поиски себя и борьба с трудностями
          </VisibilityManager>

          <VisibilityManager as="p">
            По отцовской линии в нашем роду было много целителей и знахарей, и, казалось, сама судьба вела меня по этому пути. Я даже мечтал стать врачом, но в какой-то момент понял, что традиционная медицина — это не совсем моё. К тому же, в молодости я был далёк от дисциплины и ответственности, что, конечно, не способствовало реализации этой мечты.
          </VisibilityManager>

          <VisibilityManager as="p">
            Мой путь в бизнесе и работе был полон взлётов и падений. Были моменты, когда я достигал значительных успехов и зарабатывал неплохие деньги, но каждый раз всё заканчивалось выгоранием, долгами и глубоким экзистенциальным кризисом. Я постоянно задавал себе вопросы: «В чём смысл моей жизни?», «Почему, несмотря на все усилия, я чувствую себя несчастным?», «Где моё место в этом мире?».
          </VisibilityManager>

          <VisibilityManager as="p">
            Помимо ментальных трудностей, я сталкивался с серьёзными проблемами со здоровьем. Казалось, что болезни преследовали меня без конца: то одно, то другое. Врачи часто разводили руками, не находя причин или эффективных способов лечения. Дважды мне предлагали серьёзные операции, без гарантий вернуться к полноценной жизни. Но в каждой плохой ситуации есть свои плюсы. Именно благодаря этим испытаниям я начал глубоко изучать различные методы исцеления. Вегетализм, кинезиология, а также собственные разработки — всё это стало частью моего пути к здоровью и пониманию себя.
          </VisibilityManager>

          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            Переломный момент: встреча с собой настоящим
          </VisibilityManager>

          <VisibilityManager as="p">
            Ключевым моментом в моей жизни стал опыт, который я получил во время ритуала с использованием Мухомора. В этом состоянии я получил чёткое послание: моя задача — исцелять людей. Только через помощь другим я смогу обрести истинное удовлетворение и смысл жизни.
          </VisibilityManager>

          <VisibilityManager as="p">
            К тому моменту я уже знал, что такие переживания — это не просто галлюцинации, а глубокие внутренние откровения, которые стоит воспринимать как руководство к действию. Поэтому, не раздумывая, я оставил очередной перспективный проект и полностью посвятил себя целительству.
          </VisibilityManager>

          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            Результаты: помощь людям и новая жизнь
          </VisibilityManager>

          <VisibilityManager as="p">
            С того момента моя жизнь изменилась кардинально. Практически сразу я начал видеть результаты своей работы. Люди, обращавшиеся ко мне за помощью, начинали чувствовать себя лучше, избавлялись от зависимостей, находили решение своих проблем со здоровьем и обретали внутреннюю гармонию.
          </VisibilityManager>

          <VisibilityManager as="p">
            Моя практика быстро расширялась. Я объездил практически всю Россию — от Санкт-Петербурга до Владивостока. Ко мне стали приезжать люди со всей страны, и я почувствовал, что наконец-то нашёл своё место в этом мире. Сегодня я живу в Казани, куда ко мне приезжают те, кто ищет исцеления и перемен в жизни. Также консультирую людей онлайн.
          </VisibilityManager>

          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            Что я предлагаю сегодня
          </VisibilityManager>

          <VisibilityManager as="p">Сейчас я помогаю людям:</VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              Избавиться от вредных привычек и зависимостей
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              Восстановить физическое и эмоциональное здоровье
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              Найти внутреннюю гармонию и смысл жизни
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              Обрести уверенность в себе и своих силах
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              Узнать своё истинное предназначение
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Мой подход сочетает в себе древние традиции и современные методы: вегетализм, работу с подсознанием, кинезиологию и авторские техники, которые я разработал за годы практики. Каждый случай для меня уникален, и я всегда нахожу индивидуальный подход к своим клиентам.
          </VisibilityManager>

          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            Почему мне можно доверять?
          </VisibilityManager>

          <VisibilityManager as="p">
            Я не теоретик, а человек, который прошёл через множество испытаний и нашёл выход. Моя история — это доказательство того, что даже в самой сложной ситуации можно найти свет и стать тем, кто помогает другим. Я знаю, каково это — чувствовать себя потерянным, больным и несчастным. И я знаю, как вернуть себе здоровье, радость и смысл жизни.
          </VisibilityManager>


        </div>
      </LineAnimation>
      <Final
        title="Приглашаю вас на путь исцеления"
        description="Если вы чувствуете, что застряли в жизни, страдаете от болезней или просто хотите узнать своё предназначение и наконец-то обрести гармонию, то я готов стать вашим проводником. Вместе мы найдём корень ваших проблем и создадим условия для исцеления и желаемой трансформации."
        buttonText="Записаться"
        buttonHref="/#message"
      />
    </Layout>
  );
}
