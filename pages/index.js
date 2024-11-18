import { FullWidthImage } from "../components/FullWidthImage/FullWidthImage";
import Layout from "../components/Layout/Layout";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { Preview } from "../components/Preview/Preview";
import { Bio } from "../components/Bio/Bio";
import { VisibilityManager } from "../components/VisibilityManager";
import alex2 from "../public/images/alex2.webp";
import alex3 from "../public/images/alex3.webp";
import alex5 from "../public/images/alex5.webp";
import alex6 from "../public/images/alex6.webp";

import styles from "../styles/content.module.css";
import { AskMe } from "../components/AskMe/AskMe";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { TextReviews } from "../components/TextReviews/TextReviews";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
export default function MainPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Александр "Интеграл" Васильев',
    description: "Благословенный портал мечты",
    keywords: "очищение интеграл ретрит грибы дурман",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <Preview />
      <Bio />

      <ContentBlock background="#053d09" color="#eeeeee">
        <VisibilityManager as="h2" className={styles.title__middle}>
          <br />Я настолько уверен в своей методике, что предоставляю Вам 100%
          гарантию.
        </VisibilityManager>
        <div className={styles.description} style={{ textAlign: "center" }}>
          <VisibilityManager as="p">
            Если после работы со мной, Вы не почувствуете улучшения, <br />я
            верну Вам все деньги.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p" style={{ textAlign: "center" }}>
            Моя цель – сделать так, <br /> чтобы Вы были довольны и
            рекомендовали меня своим близким.
          </VisibilityManager>
        </div>
        <VisibilityManager
          as="span"
          className={styles.uptitle}
          style={{ textAlign: "center" }}
        >
          ИN
        </VisibilityManager>
      </ContentBlock>

      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />
      <FullWidthImage
        src={alex3}
        alt={"Александр Васильев 2"}
        description={'Ресторан "Вишня Золотая" г.Казань'}
      />
      <ContentBlock background="#ffffff" color="#000000">
        <VisibilityManager as="span" className={styles.uptitle}>
          ИN
        </VisibilityManager>
        <VisibilityManager as="h2" className={styles.title}>
          Что я предлагаю Вам?
        </VisibilityManager>
        <div className={styles.description}>
          <VisibilityManager as="p">
            <b>Мгновенные результаты во всех сферах</b>. Независимо от того, что
            Вас беспокоит — бизнес, отношения или здоровье — я помогу Вам
            устранить проблемы и начать действовать с новой силой. Ваша жизнь
            меняется сразу, без долгих ожиданий.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            <b>Полная персонализация</b>. Я разрабатываю индивидуальный подход
            под Ваши уникальные потребности и цели. Это не шаблонные решения —
            каждый шаг направлен на то, чтобы Вам стало легче достигать успехов{" "}
            <b>именно в тех аспектах, которые важны для Вас</b>.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            <b>Гарантия результата</b>. Вы можете быть уверены, что получите
            именно то, за чем пришли. Если проблема не решена — Вы всегда можете
            рассчитывать на <b>100% возврат средств</b>. Это полная уверенность
            в том, что результат будет достигнут.
          </VisibilityManager>
        </div>
      </ContentBlock>

      <FullWidthImage
        src={alex2}
        alt={"Александр Васильев"}
        description={"Вечеринка PLMBR (кейс №1) г.Казань"}
      />

      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />

      <ContentBlock background="#053d09" color="#eeeeee">
        <VisibilityManager as="span" className={styles.uptitle}>
          ИN
        </VisibilityManager>
        <VisibilityManager as="h2" className={styles.title}>
          Я помогу, если Вы:
        </VisibilityManager>
        <div className={styles.description}>
          <ul>
            <VisibilityManager as="li">
              <b>Стремитесь к успеху в бизнесе </b>— Я предлагаю практический
              мгновенный результат, чтобы Вы преодолели внутренние барьеры и
              принимали уверенные решения.
            </VisibilityManager>

            <br />

            <VisibilityManager as="li">
              <b>Желаете улучшить отношения</b> — Я помогаю Вам построить или
              восстановить гармоничные и глубокие связи, с доведением до
              результата.
            </VisibilityManager>

            <br />

            <VisibilityManager as="li">
              <b>Заботитесь о своём здоровье </b>— Стрессы могут влиять на
              физическое состояние, баланс и энергию. С помогу Вам избавиться от
              напряжения и восстановить энергию.
            </VisibilityManager>

            <br />

            <VisibilityManager as="li">
              <b>Цените своё время.</b> Вам нужно действие <b>сейчас</b>. Я
              гарантирую результат на 100%.
            </VisibilityManager>
          </ul>
        </div>
      </ContentBlock>

      <FullWidthImage
        src={alex5}
        alt={"Александр Васильев 4"}
        description={"WHITE PLACE by PLOMBIR PROMO GROUP KAZAN"}
      />
      <h2
        className={styles.title__middle}
        style={{ background: "#ffffff", paddingTop: "90px" }}
        id="cases"
      >
        Посмотрите отзывы людей, которым я помог
      </h2>
      <TextReviews />

      <AskMe />

      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />

      <ContentBlock background="#053d09" color="#eeeeee">
        <VisibilityManager as="span" className={styles.uptitle}>
          ИN
        </VisibilityManager>
        <VisibilityManager as="h2" className={styles.title}>
          Почему это стоит того?
        </VisibilityManager>
        <div className={styles.description}>
          <VisibilityManager as="p">
            <b>Быстрые изменения</b>. Если Вы чувствуете, что застряли на одном
            месте или Вам сложно принимать важные решения, я помогу Вам
            избавиться от внутренних барьеров и увидеть ситуацию с новой
            перспективы. Вы начнёте действовать более уверенно и успешно.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            <b>Гармония в отношениях</b>. Вопросы, которые долго оставались
            нерешёнными, начнут проясняться. Вы почувствуете эмоциональное
            облегчение и сможете построить более крепкие и доверительные
            отношения, как в личной жизни, так и в профессиональной сфере.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            <b>Физическое и эмоциональное здоровье</b>. Я помогаю устранить
            внутренние стрессы и напряжение, которые влияют на Ваше
            самочувствие. Вы почувствуете прилив энергии, улучшение настроения и
            общее восстановление баланса.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            <b>Инвестиция в себя и своё будущее</b>. Это не просто решение
            текущих проблем — это шаг к вашему успешному и здоровому будущему.
            Всё, что Вы получите, многократно окупится в виде улучшения всех
            сфер Вашей жизни.
          </VisibilityManager>
        </div>
      </ContentBlock>


      <ContentBlock background="#ffffff" color="#000000">
        <VisibilityManager as="span" className={styles.uptitle}>
          ИN
        </VisibilityManager>
        <VisibilityManager as="h2" className={styles.title}>
          Почему Датура?
        </VisibilityManager>
        <div className={styles.description}>
          <VisibilityManager as="p">
            Датура (Datura) - это род растений семейства Паслёновые
            (Solanaceae), который включает в себя несколько видов, известных
            своими лекарственными и ядовитыми свойствами. Ниже перечислены
            некоторые из полезных свойств Датуры:
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            <b>Обезболивающие свойства</b>
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Датура содержит алкалоиды, такие как скополамин и гиосциамин,
            которые обладают обезболивающим действием. Эти вещества могут быть
            использованы для лечения болей различного происхождения, включая
            головные боли, боли в мышцах и суставах.
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            <b>Спазмолитические свойства</b>
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Датура может быть использована для лечения спазмов гладкой
            мускулатуры, таких как спазмы кишечника, мочевого пузыря и матки.
            Это свойство делает ее полезной для лечения заболеваний, таких как
            колит, цистит и дисменорея.
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            <b>Седативные и снотворные свойства</b>
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Алкалоиды Датуры могут оказывать седативное и снотворное действие,
            что делает ее полезной для лечения бессонницы, тревоги и нервного
            возбуждения.
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            <b>Противосудорожные свойства</b>
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Датура может быть использована для лечения судорог и эпилептических
            припадков, так как ее алкалоиды обладают противосудорожным
            действием.
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            <b>Антигистаминные свойства</b>
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Датура содержит вещества, которые могут блокировать действие
            гистамина, что делает ее полезной для лечения аллергических реакций,
            таких как крапивница, зуд и отеки.
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            <b>Антибактериальные свойства</b>
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Некоторые исследования показали, что Датура обладает
            антибактериальными свойствами, что делает ее полезной для лечения
            бактериальных инфекций.
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            <b>Антивирусные свойства</b>
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Датура также может быть использована для лечения вирусных инфекций,
            таких как грипп и герпес.
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            <b>Ревматические свойства</b>
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Датура может быть использована для лечения ревматических
            заболеваний, таких как артрит и ревматизм, благодаря ее
            обезболивающим и противовоспалительным свойствам.
          </VisibilityManager>
          <br />
          <br />
          <VisibilityManager as="p">
            Однако, следует отметить, что Датура является ядовитым растением, и
            ее использование должно быть осуществлено под строгим контролем и
            только под наблюдением квалифицированного врача или специалиста.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            Не рекомендуется использовать Датуру самостоятельно, так как ее
            алкалоиды могут вызвать серьезные побочные эффекты, включая
            галлюцинации, бред, судороги и даже смерть.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p">
            В заключение, Датура обладает рядом полезных свойств, но ее
            использование должно быть осуществлено с крайней осторожностью и
            только под наблюдением опытного специалиста.
          </VisibilityManager>
        </div>
      </ContentBlock>

      <VideoWidget />

      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />

      <FullWidthImage
        src={alex6}
        alt={"Александр Васильев 5"}
        description={"С Айдаром Рустамовичем на Мамаевом Кургане"}
      />


      <ContentBlock background="#ffffff" color="#000000">
        <div className={styles.description}>
          <VisibilityManager as="p" style={{ textAlign: "center" }}>
            <b>Запишитесь на бесплатную консультацию, на которой вы узнаете первопричину своего состояния, варианты решения проблемы и возможные препятствия на пути к исцелению.</b>
          </VisibilityManager>
        </div>
      </ContentBlock>


      <div
        style={{
          color: "#bcbcbc",
          backgroundColor: "#281a19",
          width: "100%",
          height: "110px",
          textAlign: "center",
          fontSize: "15px",
          lineHeight: "1.55",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ИN
      </div>
    </Layout>
  );
}
