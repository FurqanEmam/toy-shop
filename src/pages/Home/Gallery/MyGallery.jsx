import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://i.ibb.co/ygjTPzN/img-2.jpg",
    thumbnail: "https://i.ibb.co/ygjTPzN/img-2.jpg",
    description: "Robot",
  },
  {
    original: "https://i.ibb.co/8rPSwxt/img-9.jpg",
    thumbnail: "https://i.ibb.co/8rPSwxt/img-9.jpg",
    description: "Train",
  },
  {
    original: "https://i.ibb.co/0mjQDt5/img-8.jpg",
    thumbnail: "https://i.ibb.co/0mjQDt5/img-8.jpg",
    description: "Car",
  },
  {
    original: "https://i.ibb.co/ZMzbL5N/img-7.jpg",
    thumbnail: "https://i.ibb.co/ZMzbL5N/img-7.jpg",
    description: "Abacus",
  },
  {
    original: "https://i.ibb.co/VChNTGB/img-5.jpg",
    thumbnail: "https://i.ibb.co/VChNTGB/img-5.jpg",
    description: "Blocks",
  },
];

const MyGallery = () => {
  return (
    <div className="bg-orange-400 max-w-6xl mx-auto">
      <ImageGallery items={images} />
    </div>
  );
};

export default MyGallery;
