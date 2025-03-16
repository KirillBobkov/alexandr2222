import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { LineAnimation } from "../../components/LineAnomation/LineAnimation";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_9 from "../../images/secondary_preview_9.webp";
export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Вегетализм: путь к гармонии через силу растений",
    description:
      "Древняя традиция, объединяющая человека с мудростью природы через взаимодействие с растениями",
    keywords:
      "вегетализм, растения, духовные практики, исцеление, мухомор, шаманизм",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text="Вегетализм" image={secondary_preview_9} />
      <LineAnimation>
        <div className={containerStyles.container}>
          <VisibilityManager as="h1" className={contentStyles.title_middle}>
            Вегетализм: путь к гармонии через силу растений
          </VisibilityManager>

          <VisibilityManager as="p">
            Вегетализм — это древняя традиция, которая объединяет человека с
            мудростью природы через взаимодействие с растениями. Это не просто
            практика, а целое мировоззрение, основанное на уважении к силе
            растений, их духам и их роли в исцелении и духовном росте.
          </VisibilityManager>

          <VisibilityManager as="p">
            Для меня, как проводника и целителя, вегетализм — это основа моей
            работы. Я верю, что каждое растение, будь то Мухомор, священные
            травы или деревья, обладает уникальной энергией и знаниями, которые
            помогают исцелять тела, умы и души людей, которые ко мне обращаются.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Что такое вегетализм?
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Это путь глубокого взаимодействия с растениями, где они становятся
              не просто инструментами, а учителями и союзниками.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Это традиция, которая уходит корнями в шаманские практики коренных
              народов, где растения используются для исцеления, предсказаний и
              духовных путешествий.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Это способ восстановить связь с природой и обрести гармонию в
              современном мире.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Почему вегетализм необходим?
          </VisibilityManager>

          <VisibilityManager as="p">
            В наше время, многие люди чувствуют себя оторванными от природы, что
            приводит к болезням, стрессу и потере смысла.
          </VisibilityManager>

          <VisibilityManager as="p">Вегетализм помогает:</VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Вернуться к истокам и почувствовать себя частью живого мира.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Получить доступ к древним знаниям, которые передавались через
              поколения.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Исцелить не только тело, но и душу, обрести ясность и внутреннюю
              силу.
            </p>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            Как я использую вегетализм в своей практике?
          </VisibilityManager>

          <VisibilityManager as="p">
            В своей работе я сочетаю традиционные методы вегетализма с
            современными подходами. Это позволяет мне:
          </VisibilityManager>

          <VisibilityManager as="div">
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Проводить глубокие и безопасные ретриты с использованием священных
              растений, разрешённых в России, таких как Мухомор.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Помогать людям находить ответы на свои вопросы через
              взаимодействие с духами растений.
            </p>
            <p className={contentStyles.textDescription}>
              <span className={contentStyles.textSymbol}>●</span>
              {"  "}
              Создавать индивидуальные программы исцеления, которые учитывают
              уникальные потребности каждого человека.
            </p>
          </VisibilityManager>
        </div>
      </LineAnimation>
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Вегетализм"
        title={"Приглашаю вас на путь вегетализма"}
        description={`Если вы чувствуете, что готовы глубже понять себя, исцелить старые раны и обрести гармонию, я могу стать вашим проводником. 
          
          Я помогу вам безопасно и осознанно войти в этот мир, чтобы вы могли получить максимум пользы от взаимодействия с силами природы. 
          
          Свяжитесь со мной, чтобы узнать больше или записаться на консультацию. Ваше путешествие к гармонии начинается здесь.`}
      />
    </Layout>
  );
}
