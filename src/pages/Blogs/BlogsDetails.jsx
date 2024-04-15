import React, { useEffect } from "react";
import blogimg6 from "/images/blogimgtext.png";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAllBlogs from "../../hook/useAllBlogs";
const BlogsDetails = () => {
  const blogDetails = useLoaderData();

  const { blogs } = useAllBlogs();

  const { id } = useParams();

  const ownBlog = blogs.filter((blog) => blog._id !== blogDetails._id);

  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);

  return (
    <div className="flex gap-14 my-24 w-11/12 mx-auto">
      <div className="w-[70%] mx-auto">
        <Helmet>
          <title>Blog Details | serviqore</title>
        </Helmet>
        <div className="w-full mx-auto">
          <h2 className="font-bold mx-auto text-2xl py-5">
            {blogDetails.title} :
          </h2>
          <div className="relative">
            <img
              className="w-full rounded hover:shadow-md"
              src={blogimg6}
              alt={blogDetails.title}
            />
            <h2
              style={{ lineHeight: 1.3 }}
              className="font-bold md:text-5xl absolute bottom-10 left-6 w-[60%]  py-5"
            >
              {blogDetails.title.slice(0, 70)}
            </h2>
          </div>
        </div>
        <div className="mb-3">
          <div className="text-textMuted my-3 text-justify">
            <p> {blogDetails.description}</p>
            {blogDetails?.sections.map((pera, index) => (
              <div key={index} className="mt-5">
                <h3 className="font-semibold text-xl text-secondary">
                  {pera.title}
                </h3>
                <p>{pera.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[30%] mx-auto">
        <h4 className="text-2xl mt-10 mb-5 font-semibold">More Content</h4>
        {ownBlog.map((blog) => (
          <div key={blog._id}>
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
