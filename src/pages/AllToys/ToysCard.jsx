import React from "react";
import { Link } from "react-router-dom";

const ToysCard = ({ product }) => {
  const {
    _id,
    seller,
    toy_name,
    sub_category,
    price,
    available_quantity,
    description,
    image_url,
  } = product;
  console.log(product);
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={image_url} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy_name}</h2>
          <p>by {seller}</p>
          <p>{description}</p>
          <p>Category: {sub_category}</p>
          <p className="font-bold">Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${_id}`}>
              <button className="btn btn-outline">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
