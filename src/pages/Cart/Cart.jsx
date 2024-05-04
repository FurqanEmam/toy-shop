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
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((mycart) => (
              <MyCart key={mycart._id} mycart={mycart}></MyCart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
