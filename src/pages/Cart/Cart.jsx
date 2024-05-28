import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyCart from "./MyCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const url = `https://toy-shop-server-production.up.railway.app/newsoldtoy?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem(
          "playhive-access-token"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setCart(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  const handleDelete = (id) => {
    const proceed = confirm("sure to delete");
    if (proceed) {
      fetch(
        `https://toy-shop-server-production.up.railway.app/newsoldtoy/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfull");
            const remaining = cart.filter((cartData) => cartData._id !== id);
            setCart(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(
      `https://toy-shop-server-production.up.railway.app/newsoldtoy/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = cart.filter((cartData) => cartData._id !== id);
          const updated = cart.find((cartData) => cartData._id === id);
          updated.status = "confirm";
          const newSoldToy = [updated, ...remaining];
          setCart(newSoldToy);
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Customer Name</th>
              <th>Toy Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((mycart) => (
              <MyCart
                key={mycart._id}
                mycart={mycart}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></MyCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
