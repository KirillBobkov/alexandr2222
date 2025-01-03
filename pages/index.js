import Layout from "../components/Layout/Layout";
import { Bio } from "../components/Bio/Bio";
import { Form } from "../components/Form/Form";
import { useState } from "react";
import { VideoWidget } from "../components/VideoWidget/VideoWidget";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { Preview } from "../components/Preview/Preview";
import { Warranty } from "../components/Warranty/Warranty";
import { AnimatedLine } from "../components/AnimatedLine/AnimatedLine";
import { Suggest } from "../components/Suggests/Suggests";
import { Helping } from "../components/Helping/Helping";
import { Final } from "../components/Final/Final";
import { Products } from "../components/Products/Products";
import { Questions } from "../components/Questions/Questions";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Arsenal } from "../components/Arsenal/Arsenal";
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
      <AboutMe />
      <Arsenal />
      <Warranty />
      <AnimatedLine /> 
      <Suggest />
      <Helping />
      <VideoWidget />
      <AnimatedLine /> 
      <Products />
      <div id="message" />
      <Form setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} />
      <Questions />
      <Final />
    </Layout>
  );
}

