import Category from "../Category/Category";
import GridGallery from "../Gallery/GridGallery";
import MyGallery from "../Gallery/MyGallery";

import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      <MyGallery></MyGallery>
      <GridGallery></GridGallery>
      {/* <Product></Product>
      <Product></Product> */}
      <Category></Category>
    </div>
  );
};

export default Home;
