import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyCart from "./MyCart";

const Cart = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [cart, setCart] = useState([]);

  const url = `http://localhost:5000/newsoldtoy?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("sure to delete");
    if (proceed) {
      fetch(`http://localhost:5000/newsoldtoy/${id}`, {
        method: "DELETE",
      })
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
              ></MyCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
