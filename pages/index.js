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
import { Preview } from "../components/Preview/Preview";
import { Warranty } from "../components/Warranty/Warranty";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Suggest } from "../components/Suggests/Suggests";
import { Helping } from "../components/Helping/Helping";
import { Final } from "../components/Final/Final";
import { Products } from "../components/Products/Products";
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
      <Warranty />
      <AnimatedLine /> 
      <Suggest />
      <Helping />
      <VideoWidget />
      <Products />
      <AnimatedLine /> 
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />
      <Final />
    </Layout>
  );
}

