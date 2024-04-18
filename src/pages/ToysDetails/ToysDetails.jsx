import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ToysDetails = () => {
  const toysDetails = useLoaderData();
  const {
    _id,
    seller,
    toy_name,
    sub_category,
    price,
    image_url,
    description,
    available_quantity,
  } = toysDetails;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{toy_name}</h1>
            <p>- {seller}</p>
            <p className="py-6">{description}</p>
            <p>Category: {sub_category}</p>
            <p>In Stock: {available_quantity}pcs</p>
            <p>Price: ${price}</p>
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-outline">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
