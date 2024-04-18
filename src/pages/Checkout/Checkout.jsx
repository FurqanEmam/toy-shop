import React from "react";

const Checkout = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-blue-400 via-white-500 to-green-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Checkout</h1>
            <p className="py-6">
              Please enter your shipping and payment information to complete
              your purchase.
            </p>
          </div>
          <div className="card m-4 lg:m-0 w-full max-w-md shadow-lg bg-white rounded-lg">
            <form className="card-body p-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
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
                  placeholder="email@example.com"
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
                  placeholder="123"
                  className="input input-bordered w-20"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full py-3">
                  Complete Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
