import Layout from "../../components/Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../../hooks/useScrollToLocation";
import { SecondaryPreview } from "../../components/SecondaryPreview/SecondaryPreview";
import { VisibilityManager } from "../../components/shared/VisibilityManager";
import containerStyles from "../../styles/container.module.css";
import contentStyles from "../../styles/contentStyles.module.css";
import secondary_preview_33 from "../../images/secondary_preview_33.webp";
import { Button } from "../../components/shared/Button/Button";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "ОКР и работа с подсознанием: глубинное освобождение от навязчивых состояний",
  "description": "Обсессивно-компульсивное расстройство (ОКР) проявляется через специфические «петли»: навязчивая мысль вызывает тревогу, которую временно снижает ритуал. Работа с подсознанием позволяет обратиться к глубинным причинам напрямую, меняя внутреннее восприятие событий из прошлого и ослабляя эмоциональный заряд. В отдельных случаях проблема решается в результате всего одного сеанса. Работа проходит конфиденциально, без необходимости подробно рассказывать личные истории.",
  "image": "/_next/static/media/secondary_preview_24.webp",
  "url": "https://alexandrvasilev.ru/blog/ocd-subconscious",
  "inLanguage": "ru",
  "datePublished": "2025-01-25",
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
    "description": "Нейротраблшутер, специалист по работе с подсознанием и навязчивыми состояниями",
    "jobTitle": "Нейротраблшутер, специалист по работе с подсознанием"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://alexandrvasilev.ru/blog/ocd-subconscious"
  },
  "keywords": "ОКР, обсессивно-компульсивное расстройство, навязчивые мысли, компульсии, нейротраблшутинг, подсознание, психология, работа с подсознанием",
  "about": [
    {
      "@type": "Thing",
      "name": "Обсессивно-компульсивное расстройство",
      "description": "Психическое расстройство, характеризующееся навязчивыми мыслями и повторяющимися действиями"
    },
    {
      "@type": "Thing",
      "name": "Работа с подсознанием при ОКР",
      "description": "Методы нейротраблшутинга для устранения глубинных причин навязчивых состояний"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "Бесплатная первая консультация",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "https://alexandrvasilev.ru/blog/ocd-subconscious#message",
    "description": "Запишитесь на консультацию, чтобы узнать, как работа с подсознанием может помочь при ОКР."
  }
};

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: "ОКР и работа с подсознанием: глубинное освобождение от навязчивых состояний",
    description:
      "Обсессивно-компульсивное расстройство (ОКР) проявляется через специфические «петли». Работа с подсознанием помогает устранить глубинные причины и освободиться от навязчивых состояний.",
    keywords:
      "ОКР, обсессивно-компульсивное расстройство, навязчивые мысли, компульсии, нейротраблшутинг, подсознание, психология, консультация, Казань, работа с подсознанием, освобождение от ОКР",
    seoContent: "ОКР (обсессивно-компульсивное расстройство) часто проявляется через специфические «петли»: навязчивая мысль вызывает тревогу, которую временно снижает ритуал. Работа с подсознанием позволяет обратиться к глубинным причинам напрямую, меняя внутреннее восприятие событий из прошлого и ослабляя эмоциональный заряд. В отдельных случаях проблема решается в результате всего одного сеанса. Работа проходит конфиденциально. Ключевые слова: ОКР, навязчивые состояния, нейротраблшутинг, работа с подсознанием, освобождение от тревоги, психотерапия, консультация, Казань.",
  };

  return (
    <Layout metaConfig={metaConfig} schemaOrg={schemaOrg}>
      <SecondaryPreview 
        text="ОКР и работа с подсознанием" 
        image={secondary_preview_33} 
      />
        <div className={containerStyles.container}>
          <VisibilityManager as="p">
            Обсессивно-компульсивное расстройство (ОКР, также невроз навязчивых состояний) часто проявляется через специфические «петли»: навязчивая мысль (обсессия) вызывает тревогу, которую временно снижает ритуал (компульсия).
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ЧАСТЫЕ СЮЖЕТЫ ЭТИХ ПЕТЕЛЬ
          </VisibilityManager>

          <VisibilityManager as="div" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', paddingBottom: '8px', borderBottom: '3px solid rgba(62, 62, 62, 0.3)' }}>
              <div style={{ flex: 1 }}>
                <h4 className={contentStyles.title_small}>Обсессия</h4>
              </div>
              <div style={{ flex: 1 }}>
                <h4 className={contentStyles.title_small}>Компульсия</h4>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', paddingBottom: '16px', borderBottom: '3px solid rgba(62, 62, 62, 0.3)' }}>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Страх заразиться или испачкаться
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Дезинфекция, многократное длительное мытьё
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', paddingBottom: '16px', borderBottom: '3px solid rgba(62, 62, 62, 0.3)' }}>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Мысль о возможной опасности (пожар, взрыв, кража)
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Многократная проверка замков, выключателей, приборов
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', paddingBottom: '16px', borderBottom: '3px solid rgba(62, 62, 62, 0.3)' }}>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Ощущение «неправильности» и дискомфорта при асимметрии
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Расстановка предметов по строгим правилам, симметрично
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', paddingBottom: '16px', borderBottom: '3px solid rgba(62, 62, 62, 0.3)' }}>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Пугающие, неприемлемые мысли (навредить близкому, кощунство)
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Мысленное «исправление», избегание ситуаций, ментальные ритуалы
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Сомнение в правильности любого действия («А выключил ли?», «А не обидел ли?»)
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p className={contentStyles.textDescription}>
                  Внутренние диалоги, поиск подтверждений, мысленный пересмотр событий
                </p>
              </div>
            </div>
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            СВЯЗЬ С ПРОШЛЫМ ОПЫТОМ
          </VisibilityManager>

          <VisibilityManager as="p">
            Практика показывает, что подобные состояния часто связаны с прошлым опытом, который был пережит как неприятный или эмоционально тяжёлый.
          </VisibilityManager>

          <VisibilityManager as="p">
            Психика фиксирует негативное переживание и формирует устойчивый защитный механизм. Так появляется навязчивый цикл, который повторяется даже после того, как исходная ситуация уже давно утратила свою актуальность.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            РАБОТА С ПОДСОЗНАНИЕМ
          </VisibilityManager>

          <VisibilityManager as="p">
            Работа с подсознанием позволяет обратиться к глубинным причинам напрямую. В ходе сессии меняется внутреннее восприятие событий из прошлого, эмоциональный заряд ослабевает, и навязчивые реакции утрачивают свою необходимость.
          </VisibilityManager>

          <VisibilityManager as="p">
            Хотя и нельзя на 100% гарантировать исцеление таким методом, в отдельных случаях проблема решается в результате всего одного сеанса.
          </VisibilityManager>

          <VisibilityManager as="p">
            Работа проходит конфиденциально. Нет необходимости подробно рассказывать личные истории или делиться чувствительными деталями. Внимание сосредоточено на внутреннем состоянии и субъективных ощущениях человека.
          </VisibilityManager>

          <div style={{ height: '1px' }} />
          <VisibilityManager as="h3" className={contentStyles.title_middle}>
            ИНДИВИДУАЛЬНЫЙ ПОДХОД
          </VisibilityManager>

          <VisibilityManager as="p">
            Каждый случай индивидуален. Нейротраблшутинг относится к сфере немедицинской помощи и рассматривается энтузиастами как один из способов безопасного управления внутренним состоянием.
          </VisibilityManager>

          <VisibilityManager as="p">
            Если вы ищете аккуратный и содержательный подход к работе с ОКР, можете бесплатно попробовать эту методику. Оставьте заявку, и я свяжусь с вами в ближайшее время.
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
        type="ОКР и работа с подсознанием (статья)"
        title={"КОНСУЛЬТАЦИЯ"}      />
    </Layout>
  );
}
