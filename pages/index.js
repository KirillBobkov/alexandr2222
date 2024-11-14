import { FullWidthImage } from "../components/FullWidthImage/FullWidthImage";
import Layout from "../components/Layout/Layout";
import Neuro from "../components/Neuro/Neuro";
import { Preview } from "../components/Preview/Preview";
import { TextWithImage } from "../components/TextWithImage/TextWithImage";
import { VisibilityManager } from "../components/VisibilityManager";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import alex2 from "../public/images/alex2.png";
import alex3 from "../public/images/alex3.png";
import alex4 from "../public/images/alex4.jpg";
import alex5 from "../public/images/alex5.png";
import alex6 from "../public/images/alex6.jpg";

export default function MainPage() {
  useScrollToLocation();

  const metaConfig = {
    title: 'Александр "Интеграл" Васильев',
    description: "Благословенный портал мечты",
    keywords: "очищение интеграл ретрит грибы дурман",
  };

  return (
    <Layout metaConfig={metaConfig}>
        <Preview />
        <TextWithImage />
        <Neuro />
        <FullWidthImage src={alex2} alt={"Александр Васильев"} description={'Вечеринка PLMBR (кейс №1) г.Казань'}/>
        <FullWidthImage src={alex3} alt={"Александр Васильев 2"} description={'Ресторан "Вишня Золотая" г.Казань'}/>
        <FullWidthImage src={alex4} alt={"Александр Васильев 3"} description={'PLMBR promo group'}/>
        <FullWidthImage src={alex5} alt={"Александр Васильев 4"} description={'WHITE PLACE by PLOMBIR PROMO GROUP KAZAN'}/>

        <FullWidthImage src={alex6} alt={"Александр Васильев 5"} description={'С Айдаром Рустамовичем на Мамаевом Кургане'}/>

        
    </Layout>
  );
}
