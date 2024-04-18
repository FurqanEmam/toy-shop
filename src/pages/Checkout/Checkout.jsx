import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Checkout = () => {
  const toyCheckOut = useLoaderData();
  const { _id, toy_name, price, image_url } = toyCheckOut;
  // console.log(toyCheckOut);
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const email = user?.email;
    const card = form.cardNumber.value;
    const expDate = form.expDate.value;
    const cvv = form.cvv.value;
    const newOrder = {
      customerName: name,
      email,
      soldToyId: _id,
      soldToyName: toy_name,
      price: price,
      card,
      expDate,
      cvv,
      address,
      image_url,
    };
    console.log(newOrder);
    fetch("http://localhost:5000/newsoldtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Toy added to your cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-blue-400 via-white-500 to-green-500">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold text-center">Checkout</h1>
            <p className="py-6">
              Please enter your shipping and payment information to complete
              your purchase.
            </p>
          </div>
          <div className="card m-4 lg:m-0 w-full max-w-md shadow-lg bg-white rounded-lg ">
            <form onSubmit={handleCheckOut} className="card-body p-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  type="text"
                  name="toyName"
                  defaultValue={toy_name}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={"$" + price}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="123 Street Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Card Number</span>
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Expiration Date</span>
                  </label>
                  <input
                    type="text"
                    name="expDate"
                    placeholder="MM/YY"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">CVV</span>
                </label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  className="input input-bordered w-20"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Complete Purchase"
                  className="btn btn-primary btn-block"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
