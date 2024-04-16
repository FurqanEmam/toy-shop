import React from "react";

const GuidesAndArticles = () => {
  return (
    <div className="max-w-6xl mx-auto mt-5 mb-5">
      <div>
        <h2 className="font-bold text-xl text-center">
          How-To Guides & Articles
        </h2>
      </div>
      <div className="lg:flex">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1632435285445-94bca1f15246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1632547684177-f05648d3106a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="max-w-xl">
            <img
              src="https://images.unsplash.com/flagged/photo-1557804519-2a4254cae938?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesAndArticles;
