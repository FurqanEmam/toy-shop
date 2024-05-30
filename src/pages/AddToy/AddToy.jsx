import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const email = user?.email;
    const toyName = form.toyName.value;
    const toyImgUrl = form.toyImgUrl.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const price = form.price.value;

    const newToy = {
      seller: name,
      toy_name: toyName,
      sub_category: category,
      price: price,
      available_quantity: quantity,
      description: details,
      image_url: toyImgUrl,
      address,
      rating,
      seller_email: email,
    };
    console.log(newToy);

    fetch("https://toy-shop-server-production.up.railway.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("data inserted", newToy);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Toy added to the PlayHive Shop.",
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
            <h1 className="text-5xl font-bold text-center">Add A Toy</h1>
            <p className="py-6">
              Please enter your the details of Your toy. Make sure you enter
              them correctly.
            </p>
          </div>
          <div className="card m-4 lg:m-0 w-full max-w-md shadow-lg bg-white rounded-lg ">
            <form onSubmit={handleAddToy} className="card-body p-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name (Seller)</span>
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
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Image Url</span>
                </label>
                <input
                  type="text"
                  name="toyImgUrl"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price ($)</span>
                </label>
                <input
                  type="text"
                  name="price"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Shop Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="123 Street Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Availabe Quantity (pieces)</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="100"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Tango Car"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Rating (Out of 10)</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="8"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details Description</span>
                </label>
                <input
                  type="text"
                  name="details"
                  className="input input-bordered w-full"
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

export default AddToy;
