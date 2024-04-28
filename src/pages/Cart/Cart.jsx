import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const { cart, setCart } = useState([]);

  const url = `http://localhost:5000/newsoldtoy?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>My Cart{}</h1>
    </div>
  );
};

export default Cart;
