import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://toy-shop-server-production.up.railway.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <BlogsCard key={blog._id} blog={blog}></BlogsCard>
      ))}
    </div>
  );
};

export default Blogs;
