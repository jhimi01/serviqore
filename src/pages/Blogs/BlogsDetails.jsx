import React, { useEffect } from "react";
import blogimg6 from "/images/blogimgtext.png";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
const BlogsDetails = () => {
  const blogDetails = useLoaderData();
  console.log(blogDetails);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="my-24 md:w-9/12 w-11/12 mx-auto">
      <Helmet>
        <title>Blog Details | serviqore</title>
      </Helmet>
      <div className="md:w-5/6 h-5/6 mx-auto relative">
        <h2 className="font-bold mx-auto text-3xl py-5">
          {blogDetails.title} :
        </h2>
        <img
          className="w-full h-full rounded hover:shadow-md"
          src={blogimg6}
          alt={blogDetails.title}
        />
        <h2 className="font-bold md:text-6xl absolute bottom-0 left-6 w-[60%]  py-5">
          {blogDetails.title.slice(0, 60)}
        </h2>
      </div>
      <div className="my-10">
        <div className="text-textMuted my-3 text-justify">
          {blogDetails.description}
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
