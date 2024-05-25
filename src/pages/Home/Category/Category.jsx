import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

/*
 https://i.ibb.co/74GfKBS/Baby-Jeep-888.jpg
https://i.ibb.co/mNgWSw8/car-808-2.jpg
https://i.ibb.co/k9Vx1WM/IMG-20230526-161351.jpg
https://i.ibb.co/3C1RtJg/lamborghini-2.jpg
https://i.ibb.co/H7K7Dck/Rools-Roys.jpg
 */

const Category = () => {
  const images = {
    img1: "https://www.outdoortoys.com/cdn/shop/products/licensed-audi-rs-e-tron-gt-kids-electric-12v-ride-on-car-blue-413794_1600x.jpg?v=1691140452",
    img2: "https://www.outdoortoys.com/cdn/shop/products/licensed-lamborghini-urus-12v-ride-on-childrens-electric-suv-937544_1600x.jpg?v=1691140526",
    img3: "https://kidscarsales.com.au/cdn/shop/products/MJMRed_1800x1800.jpg?v=1600172269",
    img4: "https://kidscarsales.com.au/cdn/shop/products/MJMBlue_76b238bd-cecb-4e8a-8300-bd983b1d37e3_1800x1800.jpg?v=1683081989",
    img5: "https://kidscarsales.com.au/cdn/shop/files/RigoKidsElectricRideOnCarOffRoadJeepRemote12VRed-1_1800x1800.png?v=1707269218",
    img6: "https://kidscarsales.com.au/cdn/shop/files/Rigo-Kids-Electric-Ride-On-Car-Off-Road-Jeep-Remote-12V-Blue-5_1800x1800.png?v=1707275240",
    img7: "https://kidscarsales.com.au/cdn/shop/files/Rigo-Kids-Electric-12v-Police-Patrol-3-Wheel-Ride-On-Motorbike_1_1800x1800.png?v=1707450811",
    img8: "https://kidscarsales.com.au/cdn/shop/products/RCAR-MBIKE-POLICE-WH-00_1800x1800.jpg?v=1702551550",
    img9: "https://kidscarsales.com.au/cdn/shop/products/DBBlue_e5417934-4035-4a44-baf0-e0ca82aec687_1800x1800.jpg?v=1627947217",
    img10:
      "https://kidscarsales.com.au/cdn/shop/products/DBOrange_eabd6aa8-f252-43d0-b4ba-ddc3ecfb4f62_1800x1800.jpg?v=1602748378",
    img11:
      "https://kidscarsales.com.au/cdn/shop/files/kid-riding-on--motorcycle-125cc-Dirt-Bike-on-the-road_c9ea564a-d5fa-42d9-bcdd-f4d88f3321e8_1800x1800.png?v=1698213977",
    img12:
      "https://kidscarsales.com.au/cdn/shop/products/blue_cfaa9f3e-e19a-4cd9-97ac-59e337fdfb05_1800x1800.jpg?v=1626929588",
  };
  return (
    <div className="max-w-6xl mx-auto mt-5">
      <h2 className="text-5xl font-bold mb-5 bg-slate-100 h-14 text-center">
        Cars Category
      </h2>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Electric Cars</Tab>
          <Tab>Electric Bikes</Tab>
          <Tab>Cars</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Two Seated Cars</Tab>
              <Tab>ATV</Tab>
              <Tab>Off Road Cars</Tab>
            </TabList>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={images.img1} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Two Seated Blue Audi car</h2>

                  <p>Price: $1200</p>
                  <p>
                    Officially Licensed Audi TT RS Roadster Licensed Black 12v
                    Ride-On Kids Car for Ages 3-8
                  </p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure>
                  <img src={images.img2} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Lamborghini car</h2>
                  <p>Price: $1200</p>
                  <p>
                    Licensed Lamborghini Aventador SVJ Electric Kids Car 12v
                    Power With Bluetooth Parental Remote Control, Plush Leather
                    Seats & EVA Noise Reduction Tyres - Green
                  </p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="max-w-xl">
                  <img src={images.img3} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ATV Red</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure className="max-w-xl">
                  <img src={images.img4} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ATV Blue</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={images.img5} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Off Road Red JEEP</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure>
                  <img src={images.img6} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Off Road Blue Jeep</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Kids Police Bikes</Tab>
              <Tab>Dirt Bike</Tab>
              <Tab>Auto Bikes</Tab>
            </TabList>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="max-w-2xl">
                  <img src={images.img7} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Police Bike</h2>
                  <p>Price: $1200</p>
                  <p>
                    Your little one will have lots of fun cruising the park or
                    neighbourhood on this motorbike looking for criminals.
                    Realistically looking, this motorbike has a white, high
                    gloss finish and is decorated with stylish decals. It is
                    also equipped with numerous flashing lights that your kid
                    can turn on as they chase down their suspect. Fun for ages
                    3-8, this ride on toy is easy to operate. Using hand and
                    footstep controls, they can go forward and backwards at
                    speeds of 4-7kph.{" "}
                  </p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure className="max-w-2xl">
                  <img src={images.img8} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Police Bike Blue</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="max-w-xl">
                  <img src={images.img9} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Ducati Dirt Bike Blue</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure className="max-w-xl">
                  <img src={images.img10} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Ducati Dirt Bike Red</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={images.img11} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Auto Dirt Bikes</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure>
                  <img src={images.img12} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Auto Dirt Bikes</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Two Seated Cars</Tab>
              <Tab>ATV</Tab>
              <Tab>Off Road Cars</Tab>
            </TabList>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={images.img1} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Two Seated Blue Audi car</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure>
                  <img src={images.img2} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Lamborghini car</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="max-w-xl">
                  <img src={images.img3} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ATV Red</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure className="max-w-xl">
                  <img src={images.img4} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ATV Blue</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={images.img5} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Off Road Red JEEP</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card lg:card-side bg-base-100 shadow-xl mt-4">
                <figure>
                  <img src={images.img6} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Off Road Blue Jeep</h2>
                  <p>Price: $1200</p>
                  <p>
                    Rating:{" "}
                    <span className="flex">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/alltoys" className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
