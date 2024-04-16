import Category from "../Category/Category";
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
    </div>
  );
};

export default Home;
