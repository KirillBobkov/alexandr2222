import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_25 from "../../images/secondary_preview_25.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Бессонница и кошмары: что скрывается в глубинах подсознания?",
  "description": "Бессонница и ночные кошмары — это не просто нарушение сна, а сигналы подсознания о внутренних конфликтах и нерешённых эмоциях. Нейротраблшутинг помогает выявить и устранить причины бессонницы, тревожных снов, панических атак ночью. Глубокая работа с подсознанием, индивидуальный подход, быстрый результат. Ключевые слова: бессонница, кошмары, нейротраблшутинг, расстройства сна, подсознание, психология сна, ночные страхи, консультация, Казань, работа с подсознанием, улучшение сна, психотерапия, избавление от страхов.",
  "image": "/_next/static/media/secondary_preview_25.webp",
  "url": "https://alexandrvasilev.ru/blog/insomnia-nightmares-solutions",
  "inLanguage": "ru",
  "datePublished": "2025-04-10",
  "publisher": {
    "@type": "Organization",
    "name": "INTEGRAAL",
    "url": "https://alexandrvasilev.ru",
    "logo": {
      "@type": "ImageObject",
      "url": "/_next/static/media/logo.ab1a421b.webp",
      "width": 378,
      "height": 400
    }
  },
  "author": {
    "@type": "Person",
    "name": "Александр Васильев",
    "url": "https://alexandrvasilev.ru/#about",
    "description": "Нейротраблшутер, специалист по работе с подсознанием и расстройствами сна",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/insomnia-nightmares-solutions"
  },
  "keywords": "бессонница, кошмары, нейротраблшутинг, расстройства сна, подсознание, психология сна, ночные страхи",
  "about": [
    {
      "@type": "Thing",
      "name": "Психология сна",
      "description": "Связь проблем со сном с подсознательными конфликтами и неразрешенными внутренними противоречиями"
    },
    {
      "@type": "Thing",
      "name": "Нейротраблшутинг для решения проблем со сном",
      "description": "Метод работы с подсознанием для устранения первопричин бессонницы и ночных кошмаров"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/insomnia-nightmares-solutions#message",
    "description": "Запишитесь на консультацию, чтобы узнать, как нейротраблшутинг может помочь вам нормализовать сон и избавиться от кошмаров."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "Бессонница и кошмары: что скрывается в глубинах подсознания?",
    description: "Как нейротраблшутинг помогает решить проблемы со сном: избавиться от бессонницы и ночных кошмаров через работу с подсознательными конфликтами и установками.",
    keywords: "бессонница, кошмары, нейротраблшутинг, расстройства сна, подсознание, психология сна, ночные страхи, консультация, Казань, работа с подсознанием, улучшение сна, психотерапия",
    seoContent: "Инсомния и ночные кошмары — не просто расстройства сна, а сигналы подсознания о внутренних противоречиях и непрожитых эмоциях. Нейротраблшутинг помогает выявить и устранить корневые причины бессонницы, тревожных сновидений, ночных панических эпизодов. Глубокая работа с подсознанием, персональный подход, быстрый результат. Ключевые слова: нарушения сна, ночные кошмары, нейротраблшутинг, расстройства сна, подсознательные процессы, психология сновидений, ночные страхи, консультация, Казань, работа с подсознанием, улучшение сна, психотерапевтическая помощь, освобождение от страхов.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview
        text={"Бессонница и кошмары: что скрывается в глубинах подсознания?"}
        image={secondary_preview_25}
      />
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
            Нейротраблшутинг — ключ к настоящему покою
          </VisibilityManager>

          <VisibilityManager as="p">
            В моей практике я использую метод, который позволяет работать не с симптомом, а с корневой причиной. Нейротраблшутинг — это точечная, бережная и очень глубокая работа с подсознанием. Мы находим тот самый узел, который мешает вам уснуть, который запускает тревожные сны или прерывает ваш сон на полпути.
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
      <div id="message" />
      <Form
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
        type="Как избавиться от бессонницы и ночных кошмаров? (статья)"
        title={"Консультация по избавлению от бессонницы и кошмаров"}
        description={`Хотите вернуть себе здоровый сон и избавиться от ночных кошмаров? 
          
          Запишитесь на консультацию, и мы обсудим, как метод нейротраблшутинга может помочь именно вам.`}
      />
    </Layout>
  );
} 