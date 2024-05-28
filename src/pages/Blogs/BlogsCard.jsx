import React from "react";

const BlogsCard = ({ blog }) => {
  const { question, answer, imageUrl } = blog;
  return (
    <div className="max-w-4xl h-auto mb-5 mx-auto">
      <div className="card lg:flex-row bg-base-100 shadow-xl flex flex-col">
        <figure className="lg:w-1/2 w-full h-64 lg:h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover transform lg:scale-125"
            src={imageUrl}
            alt="Album"
          />
        </figure>
        <div className="card-body lg:w-1/2 w-full">
          <h2 className="card-title">{question}</h2>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
