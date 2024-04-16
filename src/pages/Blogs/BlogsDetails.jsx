import React, { useEffect } from "react";
import blogimg6 from "/images/blogimgtext.png";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAllBlogs from "../../hook/useAllBlogs";

const BlogsDetails = () => {
  const blogDetails = useLoaderData();

  const { blogs } = useAllBlogs();

  const ownBlog = blogs.filter((blog) => blog?._id !== blogDetails?._id);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="lg:flex gap-14 my-24 w-11/12 mx-auto">
      <div className="lg:w-[70%] mx-auto">
        <Helmet>
          <title>Blog Details | serviqore</title>
        </Helmet>
        <div className="w-full relative mx-auto">
          <h2 className="font-bold mx-auto text-2xl py-5">
            {blogDetails?.title} :
          </h2>
          <img
            className="w-full rounded hover:shadow-md"
            src={blogimg6}
            alt={blogDetails?.title}
          />
          <h2
            style={{ lineHeight: 1.3 }}
            className="font-bold text-2xl md:text-5xl absolute bottom-2 lg:bottom-10 left-6 w-[60%] lg:py-5"
          >
            {blogDetails?.title.slice(0, 70)}
          </h2>
        </div>
        <div className="mb-3">
          <div className="text-black my-3 text-base text-justify">
            <p className="mt-10"> {blogDetails?.description}</p>
            {blogDetails?.sections.map((pera, index) => (
              <div key={index} className="mt-5">
                <h3 className="font-semibold text-xl">{pera?.title}</h3>
                <p className="mt-3">{pera?.content}</p>
                <p className="mt-3">{pera?.content2}</p>
                <p className="mt-3">{pera?.content3}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] mx-auto">
        <h4 className="text-2xl mt-10 mb-5 font-semibold">More Content</h4>
        {ownBlog?.map((blog) => (
          <div key={blog?._id}>
            <Link to={`/blog/${blog?._id}`}>
              <div className="flex items-center gap-2 mb-3 bg-base-200 hover:bg-base-300 cursor-pointer">
                <img
                  className="w-20 h-20 object-cover"
                  src={blogimg6}
                  alt="blog"
                />
                <div className="text-start">
                  <h3 className="font-medium text-sm">
                    {blog?.title.slice(0, 60)}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsDetails;
