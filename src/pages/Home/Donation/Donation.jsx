import React from "react";

const Donation = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1682000249474-99a12b338218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              "Empower Hope: Transforming Lives with Every Purchase"
            </h1>
            <p className="mb-5">
              "At PlayHive, we believe in the power of compassion and action.
              That's why we've pledged to make a difference with every sale. For
              every product you purchase, we commit to donating $1 to support
              the lives of genocide victims. Together, we can be the catalysts
              for change, offering hope, healing, and rebuilding to those who
              have endured unimaginable suffering. Join us in our mission to
              create a brighter future, one purchase at a time. Together, we can
              make a meaningful impact and empower hope in the lives of those
              who need it most."
            </p>
            <button className="btn btn-outline btn-info">Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
