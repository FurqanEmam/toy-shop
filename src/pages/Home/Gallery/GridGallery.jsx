import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://picsum.photos/200/300?image=1050",
  "https://i.ibb.co/ZMzbL5N/img-7.jpg",
  "https://i.ibb.co/VChNTGB/img-5.jpg",
  "https://i.ibb.co/8rPSwxt/img-9.jpg",
  "https://i.ibb.co/ygjTPzN/img-2.jpg",
  "https://i.ibb.co/Fz8ShC2/img-6.jpg",
  "https://i.ibb.co/G3pxmjk/img-4.jpg",
  "https://i.ibb.co/BtX8b31/img-1.jpg",
  "https://i.ibb.co/YtmWmXK/img-11.jpg",
  // Add more image URLs as needed
  "https://picsum.photos/300/300?image=206",
  "https://i.ibb.co/Wt6qCJ7/car-kid.jpg",
  "https://i.ibb.co/rF76gj0/istockphoto-155421275-1024x1024.jpg",
  "https://i.ibb.co/yfs4cBn/istockphoto-900683944-2048x2048.jpg",
];

const GridGallery = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default GridGallery;
