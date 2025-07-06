import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../components/LineAnimation/LineAnimation";
import { VisibilityManager } from "../components/shared/VisibilityManager";
import containerStyles from "../styles/container.module.css";
import contentStyles from "../styles/contentStyles.module.css";
import secondary_preview_8 from "../images/secondary_preview_8.webp";
import { Button } from "../components/shared/Button/Button";

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);
  useScrollToLocation();

  const metaConfig = {
    title: "Обо мне - Александр Васильев",
    description: "История моего пути от личных испытаний к призванию целителя",
    keywords: "целитель, духовные практики, личная история",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={"Обо мне"} image={secondary_preview_8} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            МОЯ ИСТОРИЯ: ОТ ЛИЧНЫХ ИСПЫТАНИЙ К ИСТИННОМУ ПРИЗВАНИЮ
          </VisibilityManager>

          <VisibilityManager as="p">
            Меня зовут Александр «Интеграл» Васильев, хочу поделиться с вами своей историей. Как я прошёл через трудности, чтобы найти своё истинное призвание — помогать людям исцеляться и обретать гармонию в жизни.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            НАЧАЛО ПУТИ: ПОИСКИ СЕБЯ И БОРЬБА С ТРУДНОСТЯМИ
          </VisibilityManager>

          <VisibilityManager as="p">
            По отцовской линии в нашем роду было много целителей и знахарей, и, казалось, сама судьба вела меня по этому пути. С детства я видел, как отец исцеляет людей, наблюдал за его работой и поражался тому, как болезни и недуги отступают после его вмешательства.
          </VisibilityManager>

          <VisibilityManager as="p">
            Когда мне было 17 лет, он провёл обряд посвящения, открыв мне двери в мир сакральных знаний. Он обучил меня различным техникам глубинного улучшения самочувствия человека, включая экстатические практики, позволяющие работать с внетелесным опытом.
          </VisibilityManager>

          <VisibilityManager as="p">
            Но, несмотря на это, я долгое время отрицал своё призвание как шамана. Мечтал стать врачом, но понял, что традиционная медицина — это не совсем моё. Затем пытался найти себя в бизнесе, в обычной жизни, но это лишь уводило меня от истинного пути.
          </VisibilityManager>

          <VisibilityManager as="p">
            При этом, мистика идёт со мной рука об руку всю мою жизнь. Видел и переживал вещи, которые невозможно объяснить с точки зрения сухого материализма. Однако, не стремлюсь уходить с головой в эзотерику. В своей практике опираюсь на научные данные, знания древних и личный опыт взаимодействия с Высшими Силами. Для меня важно, чтобы всё, что я делаю, давало реальные, ощутимые результаты.
          </VisibilityManager>

          <VisibilityManager as="p">
            Высшие Силы многократно пытались направить меня, посылая испытания и знаки. Болезни, финансовые кризисы, выгорание, экзистенциальные проблемы— всё это преследовало меня до тех пор, пока не начал серьёзно задумываться, почему жизнь снова и снова возвращает к теме улучшения жизни других людей.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            ПЕРЕЛОМНЫЙ МОМЕНТ: ВСТРЕЧА С СОБОЙ НАСТОЯЩИМ
          </VisibilityManager>

          <VisibilityManager as="p">
            Ключевым моментом в моей жизни стал опыт, который я получил во время ритуала с использованием Мухомора. В этом состоянии получил чёткое послание: моя задача — исцелять людей.
          </VisibilityManager>

          <VisibilityManager as="p">
            И на этот раз уже не мог отвернуться от своего пути. Всё, что происходило со мной раньше, наконец обрело смысл. Пришло осознание того, что все мои страдания были не просто случайными трудностями, а частью более великого замысла. Высшие Силы посылали испытания, чтобы я, пройдя их, смог серьёзно отнестись к этому посланию и принять своё истинное призвание как основу жизни.
          </VisibilityManager>

          <VisibilityManager as="p">
            После этого, больше не сомневался и оставил очередной перспективный проект, полностью посвятив себя целительству.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            РЕЗУЛЬТАТЫ: ПОМОЩЬ ЛЮДЯМ И НОВАЯ ЖИЗНЬ
          </VisibilityManager>

          <VisibilityManager as="p">
            С того момента моя жизнь изменилась кардинально. Практически сразу начал видеть результаты своей работы. Люди, обращавшиеся ко мне за помощью, начинали чувствовать себя лучше, избавлялись от зависимостей, находили решение своих проблем со здоровьем и обретали внутреннюю гармонию.
          </VisibilityManager>

          <VisibilityManager as="p">
            Моя практика быстро расширялась. Объездил практически всю Россию — от Санкт-Петербурга до Владивостока. Ко мне стали приезжать люди со всей страны, и я почувствовал, что наконец-то нашёл своё место в этом мире. Сегодня живу в Казани, куда приезжают те, кто ищет улучшения и перемен в жизни. Также консультирую людей онлайн.
          </VisibilityManager>

          <div style={{ height: "1px" }} />
          <Button className={contentStyles.message} href={{ hash: "#message" }} status="Записаться" />

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            ЧТО ПРЕДЛАГАЮ СЕГОДНЯ
          </VisibilityManager>

          <VisibilityManager as="p">Сейчас помогаю людям:</VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>✔</span>
              {"  "}
              Избавиться от вредных привычек и зависимостей
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>✔</span>
              {"  "}
              Восстановить физическое и эмоциональное здоровье
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>✔</span>
              {"  "}
              Найти внутреннюю гармонию и смысл жизни
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>✔</span>
              {"  "}
              Обрести уверенность в себе и своих силах
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>✔</span>
              {"  "}
              Узнать своё истинное предназначение
            </p>
          </VisibilityManager>

          <VisibilityManager as="p">
            Мой подход сочетает в себе древние традиции и современные методы: вегетализм, работу с подсознанием, кинезиологию и авторские техники, которые разработал за годы практики. Уникальность моего подхода также заключается в переданных мне шаманских знаниях, которые позволяют работать на более глубоком уровне.
          </VisibilityManager>

          <VisibilityManager as="p">
            Каждый случай для меня уникален, всегда нахожу индивидуальный подход к своим клиентам.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h2" className={contentStyles.title_middle}>
            ПОЧЕМУ МНЕ МОЖНО ДОВЕРЯТЬ?
          </VisibilityManager>

          <VisibilityManager as="p">
            Я не теоретик, а человек, который прошёл через множество испытаний и нашёл выход. Моё посвящение в шаманские традиции, знания, переданные отцом, и личный опыт исцеления позволяют мне не просто говорить о трансформациях — сам прошёл этот путь и знаю, как привести к изменениям других.
          </VisibilityManager>

          <VisibilityManager as="p">
            При этом, мой подход не строится только на мистике. Изучаю современные научные исследования, связанные с работой мозга, психосоматикой и изменёнными состояниями сознания. Объединяю эти знания с древними традициями и практическим опытом, чтобы добиваться реальных, ощутимых результатов.
          </VisibilityManager>

          <VisibilityManager as="p">
            Знаю, каково это — чувствовать себя потерянным, больным и несчастным, и знаю, как вернуть себе здоровье, радость и смысл жизни.
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Первая консультация (Страница: Обо мне)"
        title={"ПРИГЛАШАЮ ВАС НА ПУТЬ УЛУЧШЕНИЯ ЖИЗНИ"}
        description={`Если вы чувствуете, что застряли в жизни, страдаете от болезней или просто хотите узнать своё предназначение и наконец-то обрести гармонию, то готов стать вашим проводником.

Вместе мы найдём корень ваших проблем и создадим условия для улучшения самочувствия и желаемой трансформации.`}
      />
    </Layout>
  );
}
