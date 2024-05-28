import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1716749026~exp=1716749626~hmac=b9e75ee722d19593337f39141634330cf7417f9b6c81c8b0c68b518a2855d334"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl">
          Back to the{" "}
          <Link to="/" className="underline">
            Homepage
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
