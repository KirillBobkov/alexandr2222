import Layout from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { SecondaryPreview } from "../components/SecondaryPreview/SecondaryPreview";
export default function MainPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useScrollToLocation();

  const metaConfig = {
    title: 'Александр "Интеграл" Васильев',
    description: "Персональный онлайн-ретрит",
    keywords: "очищение интеграл ретрит грибы дурман",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <SecondaryPreview text={'Персональный онлайн-ретрит'}/>
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />
    </Layout>
  );
}

