import { FullWidthImage } from "../components/FullWidthImage/FullWidthImage";
import Layout from "../components/Layout/Layout";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";
import { Bio } from "../components/Bio/Bio";
import { VisibilityManager } from "../components/VisibilityManager";
import alex2 from "../public/images/alex2.webp";
import alex3 from "../public/images/alex3.webp";
import alex5 from "../public/images/alex5.webp";
import styles from "../styles/content.module.css";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Button } from "../components/Button/Button";
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
      <Bio />

      <ContentBlock background="#053d09" color="#eeeeee">
        <VisibilityManager as="h2" className={styles.title__middle}>
          <br />Я уверен в своей методике на 100%
        </VisibilityManager>
        <div className={styles.description} style={{ textAlign: "center" }}>
          <VisibilityManager as="p">
          Если после работы со мной, Вы не почувствуете<br/>  улучшения,я верну Вам все деньги.
          </VisibilityManager>
          <br />
          <VisibilityManager as="p" style={{ textAlign: "center" }}>
          Моя цель – сделать так, чтобы Вы были довольны<br/>  и рекомендовали меня своим близким.
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
            каждый шаг направлен на то, чтобы Вам стало легче достигать успехов
            <b> именно в тех аспектах, которые важны для Вас</b>.
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
              <b>Стремитесь к успеху </b>— я предлагаю Вам практический мгновенный результат, чтобы Вы преодолели внутренние барьеры и добились желаемых результатов.
            </VisibilityManager>

            <br />

            <VisibilityManager as="li">
              <b>Желаете улучшить отношения</b> — построить или восстановить гармоничные и глубокие связи, с доведением до результата.
            </VisibilityManager>

            <br />

            <VisibilityManager as="li">
              <b>Достаточно дисциплинированы</b> — важно немедленно.
            </VisibilityManager>

            <br />

            <VisibilityManager as="li">
              <b>Цените своё время.</b> Вам нужно действие <b>сейчас</b>.
            </VisibilityManager>
          </ul>
        </div>
      </ContentBlock>

      <FullWidthImage
        src={alex5}
        alt={"Александр Васильев 4"}
        description={"WHITE PLACE by PLOMBIR PROMO GROUP KAZAN"}
      />
      <div id="message"/>
   <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />
      <h2
        className={styles.title}
        style={{ background: "#ffffff", paddingTop: "90px" }}
        id="cases"
      >
        Посмотрите отзывы людей, <br/>которым я помог
      </h2>

      <VideoWidget />

      <ContentBlock background="#301f1e" color="#ffffff">
        <br />
        <VisibilityManager as="h2" className={styles.title__middle}>
          Запишитесь на бесплатную консультацию.
        </VisibilityManager>
        <div className={styles.description} style={{ textAlign: "center" }}>
          <VisibilityManager as="p">
            Узнайте причины своих проблем, способы их решения и возможные
            преграды на вашем пути к успеху!
          </VisibilityManager>
        </div>
        <a href="#message" style={{ display: 'block', border: "2px solid white", maxWidth: '360px', width: '100%', margin: "0 auto" }}>


        <Button status={"БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ"} isSubmitted={false} disabled={false} />
        </a>
      </ContentBlock>  
    </Layout>
  );
}
