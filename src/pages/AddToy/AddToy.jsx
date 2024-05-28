import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = () => {
    console.log("handle add toy working");
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
                  <span className="label-text">Price</span>
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

export default AddToy;
