import Layout from "../components/Layout/Layout";
import { VisibilityManager } from "../components/VisibilityManager";
import { useScrollToLocation } from "../hooks/useScrollToLocation";

export default function MainPage() {
  useScrollToLocation();

  const metaConfig = {
    title: 'Александр "Интеграл" Васильев',
    description: "БЛАГОСЛОВЕННЫЙ ПОРТАЛ МЕЧТЫ",
    keywords: "очищение интеграл ретрит грибы дурман",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager side="opacity">
        <div>hello</div>
      </VisibilityManager>
    </Layout>
  );
}
