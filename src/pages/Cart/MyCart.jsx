import React from "react";

const MyCart = ({ mycart, handleDelete, handleConfirm }) => {
  const {
    _id,
    customerName,
    email,
    price,
    image_url,
    address,
    soldToyName,
    status,
  } = mycart;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image_url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {soldToyName}
        <br />
      </td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <span>Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default MyCart;
