import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import blogimg6 from "/images/blogimg.png";
import { Link } from "react-router-dom";
import useAllBlogs from "../../hook/useAllBlogs";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Subheader from "../../components/Subheader";

const Blogs = () => {
  const { blogs, isLoading } = useAllBlogs();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="mt-5 md:mt-20">
      <Helmet>
        <title>blogs | serviqore</title>
      </Helmet>
      <Subheader
        title="Blogs"
        text=" Our blog is where we share our expertise, insights, and latest updates
          with you. Whether you're a seasoned professional or just starting out,
          our blog is your go-to resource for valuable information, tips, and
          inspiration."
      />
      <div className="lg:w-10/12 w-11/12 mx-auto my-10">
        <h1 className="text-black font-semibold text-[36px] mb-5">
          Recent Blog posts
        </h1>

        <SkeletonTheme
          baseColor="#b7b7b7"
          height="250"
          highlightColor="#f0f8ff7e"
        >
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              <div className="col-span-1">
                <Skeleton height={250} />
              </div>
              <div className="col-span-1">
                <Skeleton height={250} />
              </div>
              <div className="col-span-1">
                <Skeleton height={250} />
              </div>
              <div className="col-span-1">
                <Skeleton height={250} />
              </div>
              <div className="col-span-1">
                <Skeleton height={250} />
              </div>
              <div className="col-span-1">
                <Skeleton height={250} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {blogs.map((post, index) => (
                <Link to={`/blog/${post._id}`} key={post._id}>
                  <div
                    key={index}
                    className="rounded-lg group hover:shadow-md p-3"
                  >
                    <div className="relative">
                      <img
                        src={blogimg6}
                        alt={post.title}
                        className="w-full group-hover:scale-95 group-hover:shadow-md transition ease-linear   object-cover mb-2 rounded-lg"
                      />
                      <h2 className="text-lg absolute top-4 left-4 w-1/2 text-[#353448] font-bold mb-2">
                        {post.title.slice(0, 77)}...
                      </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">{post.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default Blogs;
