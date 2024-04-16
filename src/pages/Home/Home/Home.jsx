import Category from "../Category/Category";
import Donation from "../Donation/Donation";
import GridGallery from "../Gallery/GridGallery";
import MyGallery from "../Gallery/MyGallery";
import GuidesAndArticles from "../GuidesAndArticles/GuidesAndArticles";

import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      <MyGallery></MyGallery>
      <GridGallery></GridGallery>
      {/* <Product></Product>
      <Product></Product> */}
      <Category></Category>
      <GuidesAndArticles></GuidesAndArticles>
      <Donation></Donation>
    </div>
  );
};

export default Home;
