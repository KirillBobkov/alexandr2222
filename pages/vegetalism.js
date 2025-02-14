import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Warranty } from "../components/Warranty/Warranty";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Suggest } from "../components/Suggests/Suggests";
import { Helping } from "../components/Helping/Helping";
import { Products } from "../components/Products/Products";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
import secondary_preview_9 from '../public/images/secondary_preview_9.webp';

export default function () {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Александр "Интеграл" Васильев',
    description: "Благословенный портал мечты",
    keywords: "очищение интеграл подсознание ретрит грибы",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={"Вегетализм"} image={secondary_preview_9} />
      <AnimatedLine />
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />
    </Layout>
  );
}
