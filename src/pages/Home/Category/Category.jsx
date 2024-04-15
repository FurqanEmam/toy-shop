import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

/*
 https://i.ibb.co/74GfKBS/Baby-Jeep-888.jpg
https://i.ibb.co/mNgWSw8/car-808-2.jpg
https://i.ibb.co/k9Vx1WM/IMG-20230526-161351.jpg
https://i.ibb.co/3C1RtJg/lamborghini-2.jpg
https://i.ibb.co/H7K7Dck/Rools-Roys.jpg
 */

const Category = () => {
  return (
    <div className="max-w-6xl mx-auto mt-5">
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
              <Tab>Mini Cars</Tab>
              <Tab>Cars for Baby</Tab>
            </TabList>
            <TabPanel>
              <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
              <img
                src="https://i.ibb.co/74GfKBS/Baby-Jeep-888.jpg"
                alt="Homer Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
              <img
                src="https://i.ibb.co/mNgWSw8/car-808-2.jpg"
                alt="Marge Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Oldest child and only son of Homer and Marge; brother of Lisa
                and Maggie.
              </p>
              <img
                src="https://i.ibb.co/k9Vx1WM/IMG-20230526-161351.jpg"
                alt="Bart Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Middle child and eldest daughter of Homer and Marge; sister of
                Bart and Maggie.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                alt="Lisa Simpson"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Youngest child and daughter of Homer and Marge; sister of Bart
                and Lisa.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png"
                alt="Maggie Simpson"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Philip J. Fry</Tab>
              <Tab>Turanga Leela</Tab>
              <Tab>Bender Bending Rodriguez</Tab>
              <Tab>Amy Wong</Tab>
              <Tab>Professor Hubert J. Farnsworth</Tab>
              <Tab>Doctor John Zoidberg</Tab>
            </TabList>
            <TabPanel>
              <p>
                Protagonist, from the 20th Century. Delivery boy. Many times
                great-uncle to Professor Hubert Farnsworth. Suitor of Leela.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png"
                alt="Philip J. Fry"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Mutant cyclops. Captain of the Planet Express Ship. Love
                interest of Fry.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                alt="Turanga Leela"
              />
            </TabPanel>
            <TabPanel>
              <p>
                A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who
                is Fry's best friend. Built in Tijuana, Mexico, he is the Planet
                Express Ship's cook.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                alt="Bender Bending Rodriguez"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Chinese-Martian intern at Planet Express. Fonfon Ru of Kif
                Kroker.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Many times great-nephew of Fry. CEO and owner of Planet Express
                delivery company. Tenured professor of Mars University.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png"
                alt="Professor Hubert J. Farnsworth"
              />
            </TabPanel>
            <TabPanel>
              <p>
                Alien from Decapod 10. Planet Express' staff doctor and steward.
                Has a medical degree and Ph.D in art history.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png"
                alt="Doctor John Zoidberg"
              />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
