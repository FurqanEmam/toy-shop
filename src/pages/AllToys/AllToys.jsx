import React, { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const AllToys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-7">
      <h2 className="text-center text-6xl font-bold">
        Toys Your kid will love to use
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-7">
        {products.map((product) => (
          <ToysCard key={products._id} product={product}></ToysCard>
        ))}
        {console.log(products)}
      </div>
    </div>
  );
};

export default AllToys;
